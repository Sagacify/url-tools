var URI = require('urijs');
var ip = require('ip');

module.exports = (function () {
	'use strict';

	function UrlValidator () {}

	UrlValidator.prototype.init = function () {};

	UrlValidator.prototype.validate = function (url) {
		if (typeof url !== 'string' || !url.length) {
			return false;
		}

		var prsurl = new URI(url);

		var protocol = prsurl.protocol();
		var hostname = prsurl.hostname();

		return (
			(
				protocol === 'http' ||
				protocol === 'https'
			) &&
			(
				prsurl.tld().length ||
				prsurl.is('ip') === true
			) &&
			hostname.length &&
			hostname.indexOf(' ') === -1 &&
			(
				prsurl.is('ip') === false ||
				ip.isPrivate(hostname) === false
			)
		);
	};

	return new UrlValidator();
})();
