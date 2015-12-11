var UrlParser = require('./url-parser');

module.exports = (function () {
	'use strict';

	function UrlNormalizer () {
		this.queryParamsBlacklist = [
			'utm_source',
			'utm_medium',
			'utm_term',
			'utm_content',
			'utm_campaign'
		];
	}

	UrlNormalizer.prototype.normalize = function (parentStrUrl, childStrUrl, stringify) {
		parentStrUrl = parentStrUrl || childStrUrl;

		if (typeof parentStrUrl !== 'string') {
			return new TypeError('`parentStrUrl` should be a String');
		}

		if (typeof childStrUrl !== 'string') {
			return new TypeError('`childStrUrl` should be a String');
		}

		var prsUrl = UrlParser.parse(childStrUrl.trim());

		if (prsUrl instanceof Error) {
			return prsUrl;
		}

		var normUrl = null;

		try {
			normUrl = prsUrl
				.absoluteTo(parentStrUrl.trim())
				.normalize()
				.removeQuery(this.queryParamsBlacklist)
				.fragment('');

			if (stringify === true) {
				normUrl = normUrl.toString();
			}
		}
		catch (e) {
			return e;
		}

		return normUrl;
	};

	return new UrlNormalizer();
})();
