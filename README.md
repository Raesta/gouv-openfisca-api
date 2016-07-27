gouv-openfisca-api
======

[![NPM](https://nodei.co/npm/gouv-openfisca-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gouv-openfisca-api/)

[![npm version](https://badge.fury.io/js/gouv-openfisca-api.svg)](https://badge.fury.io/js/gouv-openfisca-api)

A Node wrapper for the [Openfisca api](https://api.gouv.fr/api/openfisca.html).
---

### Installation
```javascript
$ npm install gouv-openfisca-api
```
or
```javascript
$ npm install git://github.com/Raesta/gouv-openfisca-api.git
```

### Example
```javascript
var OpenfiscaAPI = require('gouv-national-address-api');

var Openfisca = new OpenfiscaAPI();

OpenFisca.entities(null, function(error, result) {
  console.log(error, result);
});

OpenFisca.calculate({/* Your data */}, function(error, result) {
  console.log(error, result);
});
```
