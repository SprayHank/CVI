/**
 * tripleb.js 1.24 (19-Jan-2011) (c) by Christian Effenberger 
 * All Rights Reserved. Source: tripleb.netzgesta.de
 * Distributed under Netzgestade Non-commercial Software License Agreement.
 * This license permits free of charge use on non-commercial 
 * and private web sites only under special conditions. 
 * Read more at... http://www.netzgesta.de/cvi/LICENSE.html
 
 syntax:
	cvi_3b.interval=1000;	//INT 50-5000 (ms)
	
	cvi_3b.init();
	cvi_3b.paint( div );
FLT=cvi_3b.version;
STR=cvi_3b.released;
 
**/

var cvi_3b_run=false, cvi_3b_img=new Array(), cvi_3b = {version : 1.24, released : '2011-01-19 12:00:00', 
	user : 0, data : 0, radius : 0, shadow : 0, gradient : 0, mgradient : 0, cvs : 0, tri : 0, wk4 : 0, gko : 0, ie6 : 0, ie8 : 0, ie9 : 0, mode : 0, timer : 0, stat : 0, interval : 1000,
	engine	: (window.opera?"O":document.all&&!window.opera?"Ms":navigator.userAgent.indexOf('WebKit')>-1?"Webkit":navigator.userAgent.indexOf('KHTML')>-1&&navigator.userAgent.indexOf('WebKit')==-1?"Khtml":navigator.userAgent.indexOf('Gecko')>-1&&window.updateCommands?"Moz":""),
	parse	: function(a,b,c,d) {if(a=='image') {if(b.indexOf('url')>-1) {var img=b.split("(")[1].split(")")[0]; img=img.replace(/["']{1}/gi,""); /* " */ if(img) {return img;}else {return false;}}else {return false;}}else if(a=='display') {return (b.match(/^none|inline|run-in|compact|marker$/i)?false:true);} else if(a=='color') {if(b.indexOf('transparent')>-1) {return false;}else if(b.indexOf('#')>-1) {return b;}else if(b.indexOf('rgba')>-1) {var col=b.split("(")[1].split(")")[0].split(","); for(var i=0; i<3; i++) {col[i]=(col[i]*1).toString(16); if(!col[i].match(/^[0-9a-f][0-9a-f]$/i)) col[i]='0'+col[i];} if(col[3]!=0) {return "#"+col[0]+col[1]+col[2];}else {return false;}}else if(b.indexOf('rgb')>-1) {var col=b.split("(")[1].split(")")[0].split(","); for(var i=0; i<3; i++) {col[i]=(col[i]*1).toString(16); if(!col[i].match(/^[0-9a-f][0-9a-f]$/i)) col[i]='0'+col[i];} return "#"+col[0]+col[1]+col[2];}else {return false;}}else if(a=='type') {return !b.match(/^(none|hidden)$/i)?true:false;}else if(a=='width') {if(b.match(/^thin$/i)) {return 2;}else if(b.match(/^medium$/i)) {return 4;}else if(b.match(/^thick$/i)) {return 6;}else {return parseFloat(b);}}else {return false;}},
	special : function() {var i,v="gradient",o=document.createElement('div'),d=new Object(),s=new Array("o","ms","khtml","webkit","moz"); d["o"]=d["ms"]=d["khtml"]=d["webkit"]=d["moz"]=d["css"]=false; for(i=0;i<s.length;i++) {try {o.style.cssText="background-image: -"+s[i]+"-gradient(linear, left top, right bottom, from(black), to(white));"; d[s[i].toLowerCase()]=!!(o.style.backgroundImage.indexOf(v)!==-1);}catch(e) {}} try {o.style.cssText="background-image: gradient(linear, left top, right bottom, from(black), to(white));"; d["css"]=!!(o.style.backgroundImage.indexOf(v)!==-1);}catch(e) {} d["any"]=(d["css"]||d["moz"]||d["khtml"]||d["webkit"]||d["ms"]||d["o"]?true:false); return this.engine!=""&&d.any?d.css?v:d[this.engine.toLowerCase()]?'-'+this.engine.toLowerCase()+'-'+v:false:false;},
	datauri	: function(o) {var f,t,j,u,s,c=document.createElement('canvas'),x=c.getContext('2d'); if(x) {f=cvi_3b.rgb(o.gfc)+','+o.gfo; t=cvi_3b.rgb(o.gtc)+','+o.gto; j=o.ga!=0?1:0; c.width=j?o.w:2; c.height=j?2:o.h; s=x.createLinearGradient(0,0,j?c.width:0,j?0:c.height); s.addColorStop(0,'rgba('+f+')'); s.addColorStop(1,'rgba('+t+')'); x.fillStyle=s; x.fillRect(0,0,c.width,c.height); u=c.toDataURL(); with(o.style) {backgroundRepeat='repeat';backgroundImage='none';backgroundColor=o.bgcolor;backgroundImage='url('+u+')';backgroundRepeat=j?'repeat-y':'repeat-x';};}},
	css		: function(v) {var i,t,d=new Object(),s=new Array("O","Ms","Khtml","Webkit","Moz"); d["o"]=d["ms"]=d["khtml"]=d["webkit"]=d["moz"]=d["css"]=false; if(v&&(typeof v==='string')) {t=v.substr(0,1).toUpperCase()+v.substring(1); for(i=0;i<s.length;i++) {try {d[s[i].toLowerCase()]=(document.body.style[s[i]+t]!==undefined);}catch(e) {}}}try {d["css"]=(document.body.style[v]!==undefined);}catch(e) {} d["any"]=(d["css"]||d["moz"]||d["khtml"]||d["webkit"]||d["ms"]||d["o"]?true:false); return d;},
	setcss	: function(a,o,s) {if(a=='radius') {o.style[cvi_3b.radius]=o.br+'px';}else if(a=='shadow') {o.style[cvi_3b.shadow]='rgba('+cvi_3b.rgb(o.sc)+','+o.so+') '+o.sx+'px '+o.sy+'px '+o.sr+'px';}else if(a=='gradient'&&s) {o.style.backgroundImage=cvi_3b.mgradient+'('+(o.ga!=0?'left':'top')+',rgba('+cvi_3b.rgb(o.gfc)+','+o.gfo+'), rgba('+cvi_3b.rgb(o.gtc)+','+o.gto+'))';}else if(a=='gradient') {o.style.backgroundImage=cvi_3b.gradient+'(linear, left top, '+(o.ga!=0?'right top':'left bottom')+', from(rgba('+cvi_3b.rgb(o.gfc)+','+o.gfo+')), to(rgba('+cvi_3b.rgb(o.gtc)+','+o.gto+')))';}},
	onzoom	: function() {s=document.getElementsByTagName("body")[0],t=document.createElement('div'); t.id='_%_'; with(t.style) {position="absolute"; width="10px"; height="10px"; left="-100%"; top="2px";} s.appendChild(t); t=document.createElement('div'); t.id='_0_'; with(t.style) {position="absolute"; width="10px"; height="10px"; top="2px";} s.appendChild(t); return false;},
	color	: function(v) {if(v.toLowerCase().match(/^[0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f]$/i)) {return '#'+v;}else if(v.toLowerCase().match(/^[0-9a-f][0-9a-f][0-9a-f]$/i)) {return '#'+v.substr(0,1)+v.substr(0,1)+v.substr(1,1)+v.substr(1,1)+v.substr(2,1)+v.substr(2,1);}else {return '#000000';}},
	collect : function(e,v,r) {var i,j,c,t,n,a=new Array(),p=new RegExp(v+"\\b","i"); if(r) {c=r.getElementsByTagName(e);}else {c=document.getElementsByTagName(e);} for(i=0;i<c.length;i++) {t=c[i]; n=t.className.split(' '); for(j=0;j<n.length; j++) {if(p.exec(n[j])) {a.push(t); break;}}}return a;},
	hack	: function() {var t="",v="-moz-linear-gradient",o=document.createElement('div'); try {o.style.cssText="background-image: "+v+"(top,black,white);"; t=!!(o.style.backgroundImage.indexOf(v)!==-1);}catch(e) {} return t?v:false;},
	style	: function(v) {if(v&&(typeof v==='string')) {var d=this.css(v),t=v.substr(0,1).toUpperCase()+v.substring(1); return this.engine!=""&&d.any?d.css?v:d[this.engine.toLowerCase()]?this.engine+t:false:false;} return false;}, 
	modi 	: function(a,b,c,d,e) {var m=0; if(!a&&!b&&!c) {m=d?0.1:0;}else if(!a&&!b) {m=1;}else if(!a&&!c) {m=d?2.1:2;}else if(!b&&!c) {m=d?3.1:3;}else if(!a) {m=4;}else if(!b) {m=5;}else if(!c) {m=e?6.9:d?6.1:6;}else {m=7;} return m;},
	current	: function(o) {var s; if(o.currentStyle) {s=o.currentStyle;}else if(document.defaultView && document.defaultView.getComputedStyle) {s=document.defaultView.getComputedStyle(o,"");}else {s=o.style;} return s;},
	canvas	: function(v) {var t=document.createElement('canvas'),c=t.getContext("2d"); if(c&&v&&(typeof v==='string')){if(c[v]){return true;}else if(t[v]){return true;}else{return false;}}else {return Boolean(c);}},
	filter	: function(o) {o.style.filter+=' '+['progid:DXImageTransform.Microsoft.gradient(GradientType=', (o.ga!=0?1:0),',enabled=true,startColorstr=',o.gfc,', endColorstr=',o.gtc,')'].join('');},
	feature : function(r,s,g) {var m=0; if(r&&s&&g) {m=7;}else if(r&&s) {m=6;}else if(r&&g) {m=5;}else if(s&&g) {m=4;}else if(r) {m=3;}else if(s) {m=2;}else if(g) {m=1;} return m;},
	rgb		: function(v) {function h2d(h){return(Math.max(0,Math.min(parseInt(h,16),254)));}; return h2d(v.substr(1,2))+','+h2d(v.substr(3,2))+','+h2d(v.substr(5,2));},
	log		: function(v) {if(window.console) {window.console.log(v);}else if(window.opera) {opera.postError(v);}else {window.document.title=v;}},
	unique	: function() {var v=Date.parse(new Date())+Math.floor(Math.random()*100000000000); return v.toString(16);},
	vml		: function() {return document.all&&document.namespaces&&!window.opera&&(!document.documentMode||document.documentMode<9)?true:false;},
	$ 		: function(v) {return(document.getElementById(v));},
	init : function() {
		cvi_3b.wk4=navigator.userAgent.indexOf('WebKit')>-1&&window.atob==undefined; cvi_3b.gko=navigator.userAgent.indexOf('Gecko')>-1&&window.updateCommands&&!window.postMessage; cvi_3b.tri=cvi_3b.vml(); cvi_3b.ie6=!window.XMLHttpRequest; cvi_3b.ie8=document.documentMode<9?1:0; cvi_3b.ie9=document.documentMode==9?1:0; if(!cvi_3b.tri) {cvi_3b.cvs=cvi_3b.canvas();}
		if(!cvi_3b.wk4&&(cvi_3b.tri||cvi_3b.cvs)) {if(!cvi_3b.tri) {cvi_3b.data=cvi_3b.canvas('toDataURL'); cvi_3b.user=cvi_3b.style('userSelect'); cvi_3b.radius=cvi_3b.style('borderRadius'); cvi_3b.shadow=cvi_3b.style('boxShadow'); cvi_3b.gradient=cvi_3b.special(); if(cvi_3b.engine=="Moz") {cvi_3b.mgradient=cvi_3b.hack();}}
			cvi_3b.mode=cvi_3b.modi(cvi_3b.radius,cvi_3b.shadow,cvi_3b.gradient,cvi_3b.data,cvi_3b.mgradient); var i,j,f,t,s,c,o,n,m,e=cvi_3b.collect('div','tripleb'); if(e&&e.length>0) {
				if(cvi_3b.tri&&!cvi_3b.ie6&&document.namespaces['v']==null) {t=["shape","shapetype","group","background","path","formulas","handles","fill","stroke","shadow","textbox","textpath","imagedata","line","polyline","curve","roundrect","oval","rect","arc","image"],s=document.createStyleSheet(); for(i=0; i<t.length; i++) {s.addRule("v\\:"+t[i],"behavior: url(#default#VML);");} document.namespaces.add("v","urn:schemas-microsoft-com:vml");} 
				for(i=0;i<e.length;i++) {o=e[i]; n=o.className.split(' '); s=cvi_3b.current(o);
					if(cvi_3b.parse('display',s.display)) {o.w=o.offsetWidth; o.h=o.offsetHeight; o.style.padding='0px'; o.btype=cvi_3b.parse('type',s.borderLeftStyle); o.bwidth=cvi_3b.parse('width',s.borderLeftWidth); o.bwidth=o.btype?o.bwidth:0; o.bcolor=cvi_3b.parse('color',s.borderLeftColor); o.bgcolor=cvi_3b.parse('color',s.backgroundColor); o.bgimage=cvi_3b.parse('image',s.backgroundImage); o.bgrepeat=s.backgroundRepeat; o.bgposition=s.backgroundPosition;
						if(!!o.bgimage) {cvi_3b_img[i]=new Image(); cvi_3b_img[i].src=o.bgimage; o.n=i;} for(j=0;j<n.length; j++) {c=n[j].split('_');
							if(n[j].match(/^bradius_/i)) {if(c&&c.length>1) {with(Math){o.br=min(min(floor(o.w/2),floor(o.h/2)),max(0,parseInt(c[1])||0));} if(o.br>0) {o.bradius=true;} o.className=o.className.replace(n[j],'');}}
							else if(n[j].match(/^bshadow_/i)) {if(c&&c.length>1) {o.sc=cvi_3b.color(c[1]||'#000'); with(Math){o.so=parseFloat(min(100,max(0,parseInt(c[2]||1)))/100); o.sx=min(64,max(-64,parseInt(c[3]||0))); o.sy=min(64,max(-64,parseInt(c[4]||0))); o.sr=min(32,max(0,parseInt(c[5]||0)));} if(o.so>0&&(o.sr>0||o.sx!=0||o.sy!=0)) {o.bshadow=true;} o.className=o.className.replace(n[j],'');}}
							else if(n[j].match(/^bgradient_/i)) {if(c&&c.length>1) {o.ga=parseInt(c[1])!=0?90:0; o.gfc=cvi_3b.color(c[2]||'#000'); o.gtc=cvi_3b.color(c[4]||'#000'); with(Math){o.gfo=parseFloat(min(100,max(0,parseInt(c[3])||1))/100); o.gto=parseFloat(min(100,max(0,parseInt(c[5])||1))/100);} if(o.gfo>0||o.gto>0) {o.bgradient=true;} o.className=o.className.replace(n[j],'');}}
						}
					}
				}
				for(i=0;i<e.length;i++) {if(!e[i].bradius&&!e[i].bshadow&&!e[i].bgradient) {e.splice(i,1); i--;}}
				if(e&&e.length>0) {for(i=0;i<e.length;i++) {o=e[i]; m=cvi_3b.feature(o.bradius,o.bshadow,o.bgradient);
						if(cvi_3b.mode>6) {if(o.bradius) {cvi_3b.setcss('radius',o);} if(o.bshadow) {cvi_3b.setcss('shadow',o);} if(cvi_3b.mode==6.1&&o.bgradient) {cvi_3b.datauri(o);}else if(cvi_3b.mode==6.9&&o.bgradient) {cvi_3b.setcss('gradient',o,true);}else if(o.bgradient) {cvi_3b.setcss('gradient',o);}}
						else if(cvi_3b.mode==6&&(m==6||m==3||m==2)) {if(o.bradius) {cvi_3b.setcss('radius',o);} if(o.bshadow) {cvi_3b.setcss('shadow',o);}}else if(cvi_3b.mode==5&&(m==5||m==3||m==1)) {if(o.bradius) {cvi_3b.setcss('radius',o);} if(o.bgradient) {cvi_3b.setcss('gradient',o);}}
						else if(cvi_3b.mode==4&&(m==4||m==2||m==1)) {if(o.bshadow) {cvi_3b.setcss('shadow',o);} if(o.bgradient) {cvi_3b.setcss('shadow',o);}}else if(cvi_3b.mode==3.1&&(m==5||(m==3&&!o.bgimage)||m==1)) {if(o.bradius) {cvi_3b.setcss('radius',o);} if(o.bgradient) {cvi_3b.datauri(o);}}
						else if(cvi_3b.mode==3&&m==3&&!o.bgimage) {cvi_3b.setcss('radius',o);}else if(cvi_3b.mode==2&&m==2) {cvi_3b.setcss('shadow',o);}else if(cvi_3b.mode==1&&m==1) {cvi_3b.setcss('gradient',o);}else if(cvi_3b.mode==0.1&&m==1) {cvi_3b.datauri(o);} else if(cvi_3b.mode==0&&cvi_3b.tri&&m==1) {cvi_3b.filter(o);}else {
						if(cvi_3b.tri&&!cvi_3b.ie6) {var canvas=document.createElement('div'); if(canvas) {if(o.id==="") {o.id=cvi_3b.unique();} canvas.id=o.id+'_canvas'; canvas.unselectable=true; with(canvas.style) {display='block'; position='absolute'; padding='0px'; margin='0px'; left='0px'; top='0px'; height='100%'; width='100%';} if(o.hasChildNodes()) {o.insertBefore(canvas,o.firstChild);}else {o.appendChild(canvas);} o.modified=true; o.engine=cvi_3b.ie8?8:7; with(o.style) {padding='0px'; borderColor='transparent'; backgroundColor='transparent'; backgroundImage='none'; overflow='visible';};}}
							else {var canvas=document.createElement('canvas'); if(canvas.getContext("2d")) {if(o.id==="") {o.id=cvi_3b.unique();} if(!!cvi_3b.user) {canvas.style[cvi_3b.user]='none';} canvas.id=o.id+'_canvas'; canvas.height=o.h; canvas.width=o.w; canvas.unselectable=true; with(canvas.style) {display='block'; position='absolute'; left='0px'; top='0px'; height='100%'; width='100%';} if(o.hasChildNodes()) {o.insertBefore(canvas,o.firstChild);}else {o.appendChild(canvas);} o.modified=true; with(o.style) {outline='none'; padding='0px'; borderColor='transparent'; backgroundColor='transparent'; backgroundImage='none'; overflow='visible';};}}
						}
					}
				}
				for(i=0;i<e.length;i++) {if(!e[i].modified) {e.splice(i,1); i--;}} if(e&&e.length>0) {for(i=0;i<e.length;i++) {cvi_3b.paint(e[i]);}
					if(cvi_3b.tri&&window.attachEvent) {window.attachEvent("onresize",function(){cvi_3b_run=true; for(i=0;i<e.length;i++) {cvi_3b.paint(e[i]);}cvi_3b_run=false;}); for(i=0;i<e.length;i++) {e[i].onresize=new Function('if(!cvi_3b_run) {cvi_3b.paint(this);}');}}
					else if(cvi_3b.cvs) {window.addEventListener("resize",function(){cvi_3b_run=true; for(i=0;i<e.length;i++) {cvi_3b.paint(e[i]);}cvi_3b_run=false;},false); var delay=(typeof cvi_3b['interval']=='number'?Math.min(Math.max(50,cvi_3b['interval']),5000):1000); cvi_3b.onzoom(); n=cvi_3b.$('_%_'); m=cvi_3b.$('_0_'); cvi_3b.timer=window.setInterval(function() {t=(m.offsetLeft/n.offsetLeft); f=cvi_3b.stat!=t?0:1; cvi_3b.stat=t; if(f&&!cvi_3b_run) {for(i=0;i<e.length;i++) {if(e[i].w!=e[i].offsetWidth||e[i].h!=e[i].offsetHeight) {cvi_3b.paint(e[i]);}}}},delay);}
				}
			}
		} return false;
	},
	paint : function(o) {
		function _rgb(v) {function h2d(h){return(Math.max(0,Math.min(parseInt(h,16),254)));}; return h2d(v.substr(1,2))+','+h2d(v.substr(3,2))+','+h2d(v.substr(5,2));};
		function _clip(c,x,y,w,h,r) {c.beginPath(); c.arc(x+r,y+r,r,Math.PI,Math.PI*(3/2),false); c.arc(x+w-r,y+r,r,Math.PI*(3/2),0,false); c.arc(x+w-r,y+h-r,r,0,Math.PI*(1/2),false); c.arc(x+r,y+h-r,r,Math.PI*(1/2),Math.PI,false); c.closePath();};
		function _shade(c,x,y,w,h,r,o,l,f,k,s) {var a=r-f,b=1-((0.5/32)*a); a=0.4; if(f==0) {r=r+4; a=1-Math.max(0.6-(4/r),0);}
			function setRS(c,x1,y1,r1,x2,y2,r2,o,l,a,b) {var t=c.createRadialGradient(x1,y1,r1,x2,y2,r2); t.addColorStop(0,'rgba('+l+','+o+')'); if(k) {t.addColorStop((f/r),'rgba('+l+','+(o*a)+')'); t.addColorStop(b,'rgba('+l+','+((o*a)*.1)+')');}else {t.addColorStop(b,'rgba('+l+',0)');} t.addColorStop(1,'rgba('+l+',0)'); return t;};
			function setLS(c,x,y,w,h,o,l,a,b) {var t=c.createLinearGradient(x,y,w,h); t.addColorStop(0,'rgba('+l+','+o+')'); if(k) {t.addColorStop((f/r),'rgba('+l+','+(o*a)+')'); t.addColorStop(b,'rgba('+l+','+((o*a)*.1)+')');}else {t.addColorStop(b,'rgba('+l+',0)');} t.addColorStop(1,'rgba('+l+',0)'); return t;};
			c.beginPath(); c.rect(x+r,y,w-(r*2),r); c.closePath(); s=setLS(c,x+r,y+r,x+r,y,o,l,a,b); c.fillStyle=s; c.fill(); 
			c.beginPath(); c.rect(x,y+r,r,h-(r*2)); c.closePath(); s=setLS(c,x+r,y+r,x,y+r,o,l,a,b); c.fillStyle=s; c.fill(); 
			c.beginPath(); c.rect(x+r,y+h-r,w-(r*2),r); c.closePath(); s=setLS(c,x+r,y+h-r,x+r,y+h,o,l,a,b); c.fillStyle=s; c.fill(); 
			c.beginPath(); c.rect(x+w-r,y+r,r,h-(r*2)); c.closePath(); s=setLS(c,x+w-r,y+r,x+w,y+r,o,l,a,b); c.fillStyle=s; c.fill();	
			c.beginPath(); c.rect(x,y,r,r); c.closePath(); s=setRS(c,x+r,y+r,0,x+r,y+r,r,o,l,a,b); c.fillStyle=s; c.fill(); 
			c.beginPath(); c.rect(x,y+h-r,r,r); c.closePath(); s=setRS(c,x+r,y+h-r,0,x+r,y+h-r,r,o,l,a,b); c.fillStyle=s; c.fill(); 
			c.beginPath(); c.rect(x+w-r,y,r,r); c.closePath(); s=setRS(c,x+w-r,y+r,0,x+w-r,y+r,r,o,l,a,b); c.fillStyle=s; c.fill(); 
			c.beginPath(); c.rect(x+w-r,y+h-r,r,r); c.closePath(); s=setRS(c,x+w-r,y+h-r,0,x+w-r,y+h-r,r,o,l,a,b); c.fillStyle=s; c.fill();
			c.fillStyle='rgba('+l+','+o+')'; c.fillRect(x+r,y+r,w-(r*2),h-(r*2)); 
		};
		var c=o.firstChild,ck=0,st,iw,ih,ix=0,iy=0,ow,oh,ew=0,eh=0,cx=0,cy=0,br=0,bw=0,bc,sc,so,sx=0,sy=0,sr=0,ga=0,gfc,gfo,gtc,gto,bgc,bgi=0,bgr,bgp,x;
		if(o&&o.modified&&c&&c.id===o.id+'_canvas') {if(!o.engine) {x=c.getContext("2d"); if(x) {br=o.br||0; bw=o.bwidth||0; bc=o.bcolor;
				if(o.bshadow) {sc=_rgb(o.sc); so=o.so; sx=o.sx; sy=o.sy; sr=o.sr; ck=(sx==0&&sy==0?1:0);} if(o.bgradient) {ga=o.ga!=0?1:0; gfc=_rgb(o.gfc); gfo=o.gfo; gtc=_rgb(o.gtc); gto=o.gto; bgc=o.bgcolor;}
				else {bgc=o.bgcolor; bgi=o.bgimage||0; bgr=o.bgrepeat; bgp=o.bgposition;} iw=o.w=o.offsetWidth; ih=o.h=o.offsetHeight; with(Math){br=min(min(floor(iw/2),floor(ih/2)),max(0,br||0));} 
				ow=c.width=iw+(sx==0?sr*2:Math.abs(sx)+sr); oh=c.height=ih+(sy==0?sr*2:Math.abs(sy)+sr); cx=bw+(sx==0?sr:sx<0?Math.abs(sx)+sr:0); cy=bw+(sy==0?sr:sy<0?Math.abs(sy)+sr:0);
				ix=cx-bw; iy=cy-bw; sx=(sx<=0?0:sx-sr); sy=(sy<=0?0:sy-sr); c.style.left=-(cx)+'px'; c.style.top=-(cy)+'px'; c.style.width=ow+'px'; c.style.height=oh+'px'; x.clearRect(0,0,ow,oh); x.save();
				if(o.bshadow) {x.shadowOffsetX=o.sx; x.shadowOffsetY=o.sy; x.shadowBlur=sr; x.shadowColor='rgba('+sc+','+so+')'; if(x.shadowBlur==sr&&x.shadowOffsetX==o.sx&&x.shadowOffsetY==o.sy&&!window.opera) {_clip(x,ix,iy,iw,ih,br); x.fillStyle='rgba('+sc+','+so+')'; x.fill();}else {_shade(x,sx,sy,iw+(2*sr),ih+(2*sr),sr+br,so,sc,br,ck);} x.shadowOffsetX=0; x.shadowOffsetY=0; x.shadowBlur=0;}
				if(br>0) {_clip(x,ix,iy,iw,ih,br); x.clip();} if(bgc) {x.fillStyle=bgc; x.fillRect(ix,iy,iw,ih);}else {if(window.opera&&o.bshadow) {x.fillStyle='rgba(255,255,255,1)'; x.fillRect(ix,iy,iw,ih); x.clearRect(ix,iy,iw,ih);}x.clearRect(ix,iy,iw,ih);}
				if(o.bgradient) {st=x.createLinearGradient(ix,iy,ga?ix+iw:ix,ga?iy:iy+ih); st.addColorStop(0,'rgba('+gfc+','+gfo+')'); st.addColorStop(1,'rgba('+gtc+','+gto+')'); x.fillStyle=st; x.fillRect(ix,iy,iw,ih);}
				else if(!o.bgradient&&bgi!=''&&o.n>=0) {ew=cvi_3b_img[o.n].width||0; eh=cvi_3b_img[o.n].height||0; if(ew>0&&eh>0) {if(bgr=='no-repeat') {x.drawImage(cvi_3b_img[o.n],ix+((iw-ew)/2),iy+((ih-eh)/2));}else {st=x.createPattern(cvi_3b_img[o.n],bgr); x.fillStyle=st; x.fillRect(ix,iy,iw,ih);}}}
				if(bw>0) {x.strokeStyle=bc; x.lineWidth=(br==0?bw:2*bw); if(br==0) {x.strokeRect(ix+(bw*.5),iy+(bw*.5),iw-bw,ih-bw);}else {if(cvi_3b.gko||cvi_3b.wk4) {_clip(x,ix,iy,iw,ih,br);} x.stroke();}} x.restore();}
			}else if(o.engine>=7) {var hb=0,as=0,sw=0,shadow="",bgrnd="",bfill="",vform=""; br=o.br||0; bw=o.bwidth||0; bc=o.bcolor; hb=bw*.5; vform=(br>0?"roundrect":"rect");
				if(o.bshadow) {sc=o.sc; so=o.so; sx=o.sx; sy=o.sy; sr=o.sr; sw=(1-((0.6/32)*sr))*sr; so=so*.75;}
				if(o.bgradient) {ga=o.ga!=0?90:0; gfc=o.gfc; gfo=o.gfo; gtc=o.gtc; gto=o.gto; bgc=o.bgcolor;}else {bgc=o.bgcolor; bgi=o.bgimage||0; bgr=o.bgrepeat; bgp=o.bgposition;} bgc=!o.bgradient&&o.bshadow&&bgi==''&&bgc==''?'#ffffff':bgc; iw=o.offsetWidth-bw-(bw>0?1:0); ih=o.offsetHeight-bw-(bw>0?1:0); as=Math.max(Math.min(1,(br-hb)/Math.min(iw,ih)),0); cx=bw+sw+(sx<0?Math.abs(sx):sx>0?sx*(-1):0); cy=bw+sw+(sy<0?Math.abs(sy):sy>0?sy*(-1):0); 
				if(o.bshadow) {shadow='<v:roundrect arcsize="'+as+'" filled="t" stroked="t" strokeweight="'+bw+'px" strokecolor="transparent" fillcolor="'+sc+'" style="left:-'+cx+'px; top:-'+cy+'px; border: solid '+hb+'px transparent; zoom:1;display:block;position:absolute;width:'+iw+'px;height:'+ih+'px;padding:0px;margin:0px; filter: progid:dxImageTransform.Microsoft.Blur(PixelRadius='+sw+',makeShadow=true,ShadowOpacity='+so+'); "><v:fill color="'+sc+'" opacity="'+so+'" /></v:roundrect>';}
				if(bgc) {bgrnd='<v:'+vform+' arcsize="'+as+'" filled="t" stroked="f" strokeweight="'+bw+'px" strokecolor="transparent" fillcolor="'+bgc+'" style="left:-'+bw+'px; top:-'+bw+'px; border: solid '+hb+'px transparent; zoom:1;display:block;position:absolute;width:'+iw+'px;height:'+ih+'px;padding:0px;margin:0px;"></v:'+vform+'>';} bfill='<v:'+vform+' arcsize="'+as+'" filled="'+(o.bgradient||bgi!=''?'t':'f')+'" stroked="'+(bw>0?'t':'f')+'" strokeweight="'+bw+'px" strokecolor="'+bc+'" fillcolor="'+bgc+'" style="left:-'+bw+'px; top:-'+bw+'px; border: solid '+hb+'px transparent; zoom:1;display:block;position:absolute;width:'+iw+'px;height:'+ih+'px;padding:0px;margin:0px;">';
				if(o.bgradient) {bfill+='<v:fill method="linear" type="gradient" angle="'+ga+'" color="'+gtc+'" opacity="'+gto+'" color2="'+gfc+'" o:opacity2="'+gfo+'" />';}else if(!o.bgradient&&bgi!='') {ew=Math.round(.75*cvi_3b_img[o.n].width)||0; eh=Math.round(.75*cvi_3b_img[o.n].height)||0;
				if(bgr=='no-repeat') {if(ew>0&&eh>0) {bfill+='<v:fill src="'+bgi+'" type="frame" size="'+ew+'pt,'+eh+'pt" aspect="ignore"  />';}else {bfill+='<v:fill src="'+bgi+'" type="frame" aspect="atleast"  />';}}else {if(ew>0&&eh>0) {bfill+='<v:fill src="'+bgi+'" type="tile" size="'+ew+'pt,'+eh+'pt" aspect="ignore"  />';}else {bfill+='<v:fill src="'+bgi+'" type="tile" />';}}} bfill+='</v:'+vform+'>'; c.innerHTML=shadow+bgrnd+bfill;
			}
		} return false;
	}
}

if(window.attachEvent) window.attachEvent("onload",cvi_3b.init);
else window.addEventListener("load",cvi_3b.init,false);
