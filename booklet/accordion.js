/**
 accordion.js 1.0 (14-Jun-2007) (c) by Christian Effenberger
 **/
var isIE = navigator.appName=='Microsoft Internet Explorer' && navigator.userAgent.indexOf('Opera')<1?1:0;
var isWK = navigator.userAgent.indexOf('AppleWebKit')>-1?1:0;

function toggleHeader(id) {
	var obj = document.getElementById(id);
	var ele = document.getElementById("do_"+id);
	if(obj.style.display=="none"||obj.style.display==null) {
		obj.style.display = "block"; ele.className = "open";
	}else {
		obj.style.display = "none"; ele.className = "closed";
	}
}
function toggleAll(status,omit) {
	var i=0, id="", ele, obj;
	var header = document.getElementsByTagName("h2");
	for(i=0;i<header.length;i++) {
		ele = header[i]; id = ele.id.split('_');
		obj = document.getElementById(id[1]);
		if(i<=omit) {}else {
			if(status) {
				ele.className = "open"; obj.style.display = "block";
			}else {
				ele.className = "closed"; obj.style.display = "none";
			}
		}
	}
}
function addAccordion(omit) {
	var i=0, id="", ele, obj, small, link, tmp;
	var header = document.getElementsByTagName("h2");
	for(i=0;i<header.length;i++) {
		ele = header[i]; id = ele.id.split('_');
		obj = document.getElementById(id[1]);
		if(i<=omit) {
			ele.className = "open";
		}else {
			if(isIE) {
				small = document.createElement("small");
				small.style.position = 'absolute';
				small.style.right = 0.25 + 'em';
				small.style.background = 'transparent';
				tmp = "toggleHeader('" + id[1] + "');";
				small.innerHTML = '<a title="toggle named section" style="color:black;" onClick=' + tmp + '>&plusmn;</a>';
				ele.appendChild(small);
			}else {
				ele.setAttribute("title", "toggle named section");
				ele.setAttribute("onclick","toggleHeader('"+id[1]+"');");
			}
			ele.className = "closed"; obj.style.display = "none";
		}
	}
}
