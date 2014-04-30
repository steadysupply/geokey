import json

from django.db import models
from django.db.models import Q
from django.conf import settings

from django_hstore import hstore

from .base import STATUS
from .manager import ViewManager, ViewGroupManager, RuleManager


class View(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    creator = models.ForeignKey(settings.AUTH_USER_MODEL)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        choices=STATUS,
        default=STATUS.active,
        max_length=20
    )
    project = models.ForeignKey('projects.Project', related_name='views')

    objects = ViewManager()

    @property
    def data(self):
        queries = [rule.get_query() for rule in self.rules.all()]

        query = queries.pop()
        for item in queries:
            query |= item

        return self.project.observations.filter(query)

    def delete(self):
        """
        Deletes the view by setting its status to DELETED.
        """
        self.status = STATUS.deleted
        self.save()


class ViewGroup(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    users = models.ManyToManyField(settings.AUTH_USER_MODEL)
    can_edit = models.BooleanField(default=False)
    can_read = models.BooleanField(default=False)
    can_view = models.BooleanField(default=True)
    view = models.ForeignKey('View', related_name='viewgroups')
    status = models.CharField(
        choices=STATUS,
        default=STATUS.active,
        max_length=20
    )

    objects = ViewGroupManager()

    def delete(self):
        """
        Deletes the view by setting its status to DELETED.
        """
        self.status = STATUS.deleted
        self.save()


class Rule(models.Model):
    view = models.ForeignKey('View', related_name='rules')
    observation_type = models.ForeignKey('observationtypes.ObservationType')
    filters = hstore.DictionaryField(db_index=True, null=True, default=None)
    status = models.CharField(
        choices=STATUS,
        default=STATUS.active,
        max_length=20
    )

    objects = RuleManager()

    def get_query(self):
        queries = [Q(observationtype=self.observation_type)]

        for key in self.filters:
            try:
                rule_filter = json.loads(self.filters[key])
            except ValueError:
                rule_filter = self.filters[key]

            field = self.observation_type.fields.get_subclass(key=key)
            queries.append(field.get_filter(rule_filter))

        query = queries.pop()
        for item in queries:
            query &= item
        return query

    def delete(self):
        """
        Deletes the Filter by setting its status to DELETED.
        """
        self.status = STATUS.deleted
        self.save()
