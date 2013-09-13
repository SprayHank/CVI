;
var CVI;
(function() {
    "use strict";
    CVI = function() {};
    CVI.prototype = {
        vml: function supportsVml() {
            if(typeof supportsVml.supported == "undefined") {
                var a = document.documentElement.appendChild(document.createElement('div'));
                a.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
                var b = a.firstChild;
                b.style.behavior = "url(#default#VML)";
                supportsVml.supported = b ? typeof b.adj == "object" : true;
                a.parentNode.removeChild(a);
            }
            return supportsVml.supported
        }(),
        G: function(v) {return(document.getElementById(v));},
        R: function(v) {return(document.body.removeChild(v));},
        A: function(v) {return(document.body.appendChild(v));},
        C: function(v) {return(document.createElement(v));},
        extend: function(subClass, superClass) {
            //见到网上有人是这样写的
            //subClass.prototype=superClass.prototype;
            //subClass.prototype.constructor=subClass;
            var F = function() {};
            F.prototype = superClass.prototype;
            subClass.prototype = new F();
            subClass.prototype.constructor = subClass;
        }
    };
})();