var querystringParser = require('querystringparser');
var fastUrlParser = require('fast-url-parser');

module.exports = (function () {
	'use strict';

	fastUrlParser.queryString = querystringParser;
	fastUrlParser.replace();
})();
