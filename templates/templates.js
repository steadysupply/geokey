this["Templates"] = this["Templates"] || {};

Handlebars.registerPartial("datefield", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"form-group\">\n    <label for=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-min\">is older than</label>\n    <input type=\"datetime\" class=\"form-control\" name=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-min\" id=\"minval\">\n    <label for=\"younger\">and younger than</label>\n    <input type=\"datetime\" class=\"form-control\" name=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-max\" id=\"maxval\">\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("lookupfield", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }

  buffer += "<div class=\"form-group\">\n    <label for=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ref\">is one of</label>\n    <select name=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ref\" id=\"reference-value\" multiple size=\"5\" class=\"form-control\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.lookupvalues), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("numericfield", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "min=\"";
  if (helper = helpers.minval) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.minval); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"";
  if (helper = helpers.minval) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.minval); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "max=\"";
  if (helper = helpers.maxval) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.maxval); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "max=\"";
  if (helper = helpers.maxval) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.maxval); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"";
  if (helper = helpers.maxval) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.maxval); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "min=\"";
  if (helper = helpers.minval) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.minval); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

  buffer += "<div class=\"form-group\">\n    <label for=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-min\">is larger than</label>\n    <input type=\"number\" class=\"form-control\" name=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-min\" id=\"minval\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.minval), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.maxval), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <label for=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-max\">and lower than</label>\n    <input type=\"number\" class=\"form-control\" name=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-max\" id=\"maxval\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.maxval), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.minval), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("textfield", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"form-group\">\n    <label for=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ref\">contains</label>\n    <input type=\"text\" class=\"form-control\" name=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ref\" id=\"reference-value\" class=\"reference-value\">\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("truefalsefield", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"form-group\">\n    <label for=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ref\">is</label>\n    <select name=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ref\" id=\"reference-value\" class=\"form-control\">\n        <option></option>\n        <option value=\"true\">True</option>\n        <option value=\"false\">False</option>\n    </select>\n</div>";
  return buffer;
  }));

this["Templates"]["fields"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"field-filter\" data-key=\"";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-type=\"";
  if (helper = helpers.fieldtype) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fieldtype); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"form-inline\">\n            ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.fieldtype), "TextField", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.fieldtype), "TextField", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.fieldtype), "NumericField", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.fieldtype), "NumericField", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.fieldtype), "DateTimeField", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.fieldtype), "DateTimeField", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.fieldtype), "TrueFalseField", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.fieldtype), "TrueFalseField", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.fieldtype), "LookupField", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.fieldtype), "LookupField", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = self.invokePartial(partials.textfield, 'textfield', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = self.invokePartial(partials.numericfield, 'numericfield', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = self.invokePartial(partials.datefield, 'datefield', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = self.invokePartial(partials.truefalsefield, 'truefalsefield', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = self.invokePartial(partials.lookupfield, 'lookupfield', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.fields), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["Templates"]["lookupvalues"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <li class=\"list-group-item\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " (<a data-lookup-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"text-danger\" href=\"#\">remove</a>)</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.lookupvalues), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["Templates"]["observation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h4>Observation type name</h4>\n<table class=\"table table-condensed\">\n    <tr><th>Field name</th><th>Value</th></tr>\n    <tr><td>Contributor:</td><td>Oliver Roick</td></tr>\n    <tr><td>Version:</td><td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.properties)),stack1 == null || stack1 === false ? stack1 : stack1.version)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td></tr>\n    <tr><td>Status:</td><td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.properties)),stack1 == null || stack1 === false ? stack1 : stack1.status)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td></tr>\n</table>\n<a class=\"btn btn-primary btn-sm btn-block\" href=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Open observation</a>";
  return buffer;
  });

this["Templates"]["observationinfo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <tr><td>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td>"
    + escapeExpression((helper = helpers.value || (depth1 && depth1.value),options={hash:{},data:data},helper ? helper.call(depth0, (depth1 && depth1.feature), depth0, options) : helperMissing.call(depth0, "value", (depth1 && depth1.feature), depth0, options)))
    + "</td></tr>\n        ";
  return buffer;
  }

  buffer += "<div class=\"col-sm-8\" id=\"info\">\n    <h4>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.observationtype)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n    <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.observationtype)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    <table class=\"table table-striped\">\n        <tr><th>Field name</th><th>Value</th></tr>\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.observationtype)),stack1 == null || stack1 === false ? stack1 : stack1.fields), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </table>\n</div>";
  return buffer;
  });

this["Templates"]["usergroupusers"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <li class=\"list-group-item\">"
    + escapeExpression((helper = helpers.user || (depth0 && depth0.user),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "user", depth0, options)))
    + " <a class=\"text-danger remove\" data-user-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\"><small>remove</small></a></li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.users), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["Templates"]["userstypeaway"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" data-user-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression((helper = helpers.user || (depth0 && depth0.user),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "user", depth0, options)))
    + "</a></li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });