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

module.exports = Openfisca;
