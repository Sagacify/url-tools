var urlext = require('urlext');

module.exports = (function () {
	'use strict';

	function UrlExtractor () {}

	UrlExtractor.prototype.extract = function (strurl) {
		var dcmpurl = null;

		try {
			dcmpurl = urlext.tld.decompose(strurl);
		}
		catch (e) {
			return dcmpurl;
		}

		return dcmpurl;
	};

	return new UrlExtractor();
})();
