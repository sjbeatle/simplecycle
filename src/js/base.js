/*	Simple Cycle Base JS - Huzzah!
------------------------------------------*/

	window.sc = {};

	/*	Libraries
	------------------------------------------*/
		var $ = require("jquery"),
			_ = require("lodash");

		sc.$ = $;
		sc._ = _;

		// Make lodash templates use mustache style
		sc._.templateSettings = {
			evaluate:    /\{\[([\s\S]+?)\]\}/g,
			interpolate: /{{([\s\S]+?)}}/g,
			escape:      /{{{([\s\S]+?)}}}/g
		};





	/*	SCSS Kickoff!
	------------------------------------------*/
		require("../scss/_import.scss");





	/*	The Magic
	------------------------------------------*/
		require("./magic.js");
