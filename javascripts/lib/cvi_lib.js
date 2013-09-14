;
var CVI;
(function() {
    "use strict";
    CVI = function() {return};
    CVI.prototype = {
        //VML Support detection
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
        //Canvas Support detection
        cvs: (function isCanvasSupported() {
            var elem = document.createElement('CANVAS');
            return !!(elem.getContext && elem.getContext('2d'));
        })(),
        //type
        type: (function() {
            if((function supportsVml() {
                if(typeof supportsVml.supported == "undefined") {
                    var a = document.documentElement.appendChild(document.createElement('div'));
                    a.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
                    var b = a.firstChild;
                    b.style.behavior = "url(#default#VML)";
                    supportsVml.supported = b ? typeof b.adj == "object" : true;
                    a.parentNode.removeChild(a);
                }
                return supportsVml.supported
            })())return 'VML';
            if((function isCanvasSupported() {
                var elem = document.createElement('CANVAS');
                return !!(elem.getContext && elem.getContext('2d'));
            })())return 'CVS';
            return ''
        })(),
        //Format the Color to #XXXXXX from #XXX even if not color , turn to #000000
        Color: function(v) {
            if(v.match(/^#[0-9a-f]{6}$/i)) {return v}
            else if(v.match(/^#[0-9a-f]{3}$/i)) {
                return '#' + v.substr(1, 1) + v.substr(1, 1) + v.substr(2, 1) + v.substr(2, 1) + v.substr(3, 1) + v.substr(3, 1)
            } else {return '#000000'}
        },
        //get the Color from hex to rgb ,return like '35, 98, 106'
        getRGB: function(v) {
            function hex2dec(h) {return(Math.max(0, Math.min(parseInt(h, 16), 255)))};
            v = v || '#FFFFFF';
            v = this.Color(v);
            return hex2dec(v.substr(1, 2)) + ', ' + hex2dec(v.substr(3, 2)) + ', ' + hex2dec(v.substr(5, 2))
        },
        //return the element by id
        G: function(v) {return(document.getElementById(v));},
        //remove the element
        R: function(v) {return(document.body.removeChild(v));},
        //append the element to the page
        A: function(v) {return(document.body.appendChild(v));},
        //create a element
        C: function(v) {return(document.createElement(v));},
        //debug function
        debug: function(s, v) {
            if(this.verbose) {
                s = s.toUpperCase() || 'LOG';
                if(window.console) {
                    if(!window.console.warn) {
                        window.console.log(s + ': ' + v);
                    } else {
                        window.console[s.toLowerCase() || 'log'](v);
                    }
                } else if(window.opera) {
                    opera.postError(s + ': ' + v);
                } else {
                    window.document.title = s + ': ' + v;
                }
            }
            return false
        },
        //extend an object like jQuery but no deep
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
        //extend a class
        extends: function(subClass, superClass) {
            //见到网上有人是这样写的
            //subClass.prototype=superClass.prototype;
            //subClass.prototype.constructor=subClass;
            var F = function() {};
            F.prototype = superClass.prototype;
            subClass.prototype = new F();
            subClass.prototype.parent = superClass;
            subClass.prototype.constructor = subClass;
            return
        }
    };
})();