/*	Simple Cycle Base JS - Huzzah!
------------------------------------------*/

	/*	Libraries
	------------------------------------------*/
		var $ = require("jquery"),
			_ = require("lodash");

		// Make lodash templates use mustache style
		_.templateSettings = {
			evaluate:    /\{\[([\s\S]+?)\]\}/g,
			interpolate: /{{([\s\S]+?)}}/g,
			escape:      /{{{([\s\S]+?)}}}/g
		};
