/**
 projectmenu.js 1.3 (10-Apr-2009) (c) by Christian Effenberger
 **/
var isIE = document.all && !window.opera && !window.XMLHttpRequest ? 1 : 0;

function openMenu(referer) {
	var par = document.getElementById('outer');
	var obj = document.getElementById('menu');
	referer.style.visibility='hidden';
	obj.style.width = (par.offsetWidth-4)+'px';
	if(isIE) {
		obj.style.left = 0+'px';
		obj.style.top = 0+'px';
	}else {
		obj.style.left = (par.offsetLeft+1)+'px';
		obj.style.top = (par.offsetTop+1)+'px';
	}
	obj.style.visibility = 'visible';
	obj.style.display = 'block';
	obj.onmouseout = function(e) {
		if(!this.parentNode) return;
		if(!e) e= window.event;
		var related = e.relatedTarget || e.toElement;
		while(related && related != this) {
			related = related.parentNode;
			if(related == this) return;
		}
		if(this.style.visibility=='visible') {
			var but = document.getElementById('button');
			but.style.visibility = 'visible';
			this.style.visibility = 'hidden';
			this.style.display = 'none';
		}
	}
}
function closeMenu() {
	var obj = document.getElementById('menu');
	if(obj.style.visibility=='visible') {
		var but = document.getElementById('button');
		but.style.visibility = 'visible';
		obj.style.visibility = 'hidden';
		obj.style.display = 'none';
	}
}
function jumpMenu(url) {
	closeMenu();
	if(url==-1) {
		window.location.href = "http://www.netzgesta.de/cvi/";
	}else if(url==-2) {
		window.location.href = "http://www.netzgesta.de/lab/";
	}else if(url==-3) {
		window.location.href = "http://www.netzgesta.de/dev/";
	}else if(url>=0) {
		window.location.href = "http://www.netzgesta.de/"+cvi_nme[url]+"/";
	}
}
function buildMenus(omit) {
	var tmp = document.getElementById("lst"); if(tmp) {tmp.style.display='none';}
	var rep = document.getElementById("replace");  var obj = rep.parentNode;
	var fol = window.navigator.systemLanguage?'menu/':'icons/';
	var suf = window.navigator.systemLanguage?'.gif':'.png';
	var div = document.createElement("div"); div.className = "mc";
	var inner = '<div class="bf"><span class="rt button"><a class="nip" style="margin-right:1px;" onClick="toggleAll(false,'+omit+');" title="Close all subitems"'+inop+'>–</a><a class="nip" onClick="toggleAll(true,'+omit+');" title="Open all subitems"'+inop+'>+</a></span></div>';
	inner += '<div id="outer" class="om"><div id="button" title="Click to push menu down" class="im" onclick="openMenu(this);"><span class="mi">Projects Pushdown Menu</span><div class="pu"></div></div><div id="menu" class="mn">';
	inner += '<div class="mi" style="border:none;" onclick="jumpMenu(-1);"><span class="li"><img src="'+path+'images/'+fol+'cvi'+suf+'" class="li" border="0" alt="cvi">&nbsp;home</span><br></div>';
	inner += '<div class="mi" style="border:none;" onclick="jumpMenu(-2);"><span class="li"><img src="'+path+'images/'+fol+'lab'+suf+'" class="li" border="0" alt="lab">&nbsp;lab</span><br></div>';
	inner += '<div class="mi" style="border:none;" onclick="jumpMenu(-3);"><span class="li"><img src="'+path+'images/'+fol+'dev'+suf+'" class="li" border="0" alt="dev">&nbsp;dev</span><br></div>';
	for(var i=0; i<cvi_nme.length; i++) {
		inner += '<div class="mi" onclick="jumpMenu('+i+');"><span class="li"><img src="'+path+'images/'+fol+cvi_nme[i]+suf+'" class="li" border="0" alt="'+cvi_nme[i]+'">&nbsp;'+cvi_nme[i]+'.js <span class="ar">...'+cvi_ttl[i]+'</span></span><br></div>';
	}
	inner += '<div class="mb" title="Click to push menu up" onclick="closeMenu();"><span class="mi">Projects</span></div></div></div>';
	div.innerHTML = inner;
	obj.replaceChild(div,rep);
}