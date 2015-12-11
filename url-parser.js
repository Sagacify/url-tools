var URI = require('urijs');

module.exports = (function () {
	'use strict';

	function UrlParser () {}

	UrlParser.prototype.parse = function (strurl) {
		var prsurl = null;

		try {
			prsurl = new URI(strurl);
		}
		catch (e) {
			return e;
		}

		return prsurl;
	};

	return new UrlParser();
})();
