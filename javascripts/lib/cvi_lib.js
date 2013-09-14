;
var CVI;
(function() {
    "use strict";
    CVI = function() {};
    CVI.prototype = {
        vml: (function supportsVml() {
            if(typeof supportsVml.supported == "undefined") {
                var a = document.documentElement.appendChild(document.createElement('div'));
                a.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
                var b = a.firstChild;
                b.style.behavior = "url(#default#VML)";
                supportsVml.supported = b ? typeof b.adj == "object" : true;
                a.parentNode.removeChild(a);
            }
            return supportsVml.supported
        })(),
        cvs: !this.vml,
        getRGB: function(v) {
            function hex2dec(h) {return(Math.max(0, Math.min(parseInt(h, 16), 255)))}

            var r = 0, g = 0, b = 0;
            v = v || '#fff';
            if(v.match(/^#[0-9a-f]{3}$/i)) {
                r = hex2dec(v.substr(1, 1) + v.substr(1, 1)), g = hex2dec(v.substr(2, 1) + v.substr(2, 1)), b = hex2dec(v.substr(3, 1) + v.substr(3, 1))
            } else if(v.match(/^#[0-9a-f]{6}$/i)) {
                r = hex2dec(v.substr(1, 2)), g = hex2dec(v.substr(3, 2)), b = hex2dec(v.substr(5, 2))
            }
            return r + ',' + g + ',' + b
        },
        G: function(v) {return(document.getElementById(v));},
        R: function(v) {return(document.body.removeChild(v));},
        A: function(v) {return(document.body.appendChild(v));},
        C: function(v) {return(document.createElement(v));},
        extend: function() {
            var destination = arguments[0] || {},
                source = arguments[1] || {};
//            console.log('before all:');
//            console.log(destination);
            for(var property in source) {
//                console.log('before operation :');
//                console.log(destination);
//                console.log('the attribute:' + property);
                destination[property] = source[property];
//                console.log('after operation :');
//                console.log(destination);
            }
            return destination;
        },
        extends: function(subClass, superClass) {
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