;
var VML;
(function() {
	"use strict";
	VML = function() {
		if(document.namespaces['v'] == null) {
			var e = [
					"shape",
					"shapetype",
					"group",
					"background",
					"path",
					"formulas",
					"handles",
					"fill",
					"stroke",
					"shadow",
					"textbox",
					"textpath",
					"imagedata",
					"line",
					"polyline",
					"curve",
					"roundrect",
					"oval",
					"rect",
					"arc",
					"image"
				],
				s = document.createStyleSheet();
			for(i = 0; i < e.length; i++) {s.addRule("v\\:" + e[i], "behavior: url(#default#VML);");}
			document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
		}
	};
})();