var request = require('request');
var apiUrl = 'http://api.openfisca.fr/api/1/';

function Openfisca() {
  this.apiUrl = apiUrl;
  this.request = req;
}

function req(method, apiUrl, data, callback) {
  var options = {};
  options.method = method;
  options.url = apiUrl;
  options.headers = { 'Content-Type': 'application/json' };
  request(options, function (error, response, body) {
    if (error) return callback(null, JSON.parse(error));
    switch (response.statusCode) {
      case 200:
        return callback(null, JSON.parse(body));
        break;
      case 400:
        return callback('BAD_REQUEST');
        break;
      case 404:
        return callback('NOT_FOUND');
        break;
    }
  });
}

Openfisca.prototype.entities = function(params, callback) {
  var url = apiUrl + 'entities';
  req('GET', url, null, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}

Openfisca.prototype.graph = function(params, callback) {
  var url = apiUrl + 'graph?';
  if (params && params.context) url = (url.substr(url.length-1, 1) === '?' ? url + 'context=' + params.context : url + '&context=' + params.context);
  if (params && params.variable) url = (url.substr(url.length-1, 1) === '?' ? url + 'variable=' + params.variable : url + '&variable=' + params.variable);
  req('GET', url, null, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}

Openfisca.prototype.parameters = function(params, callback) {
  var url = apiUrl + 'parameters?';
  if (params && params.name) url = (url.substr(url.length-1, 1) === '?' ? url + 'name=' + params.name : url + '&name=' + params.name);
  req('GET', url, null, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}

Openfisca.prototype.reforms = function(params, callback) {
  var url = apiUrl + 'reforms?';
  req('GET', url, null, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}

Openfisca.prototype.variables = function(params, callback) {
  var url  = apiUrl + 'variables?';
  req('GET', url, null, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}

Openfisca.prototype.swagger = function(params, callback) {
  var url = apiUrl + 'swagger?';
  req('GET', url, null, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}

module.exports = Openfisca;
