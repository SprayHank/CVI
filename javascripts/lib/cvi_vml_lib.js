;
var VML;
(function() {
    "use strict";

    var G = function(v) {return(document.getElementById(v));},
        R = function(v) {return(document.body.removeChild(v));},
        A = function(v) {return(document.body.appendChild(v));},
        C = function(v) {return(document.createElement(v));},
        cvi = new CVI();
    VML = function() {
        if(document.namespaces['v'] == null) {
            var e = ["shape", "shapetype", "group", "background",
                    "path", "formulas", "handles", "fill",
                    "stroke", "shadow", "textbox", "textpath",
                    "imagedata", "line", "polyline", "curve",
                    "roundrect", "oval", "rect", "arc", "image"],
                s = document.createStyleSheet();
            for(i = 0; i < e.length; i++) {s.addRule("v\\:" + e[i], "behavior: url(#default#VML);");}
            document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
        }
        this.tagEnd = ' \/>';
    };
})();