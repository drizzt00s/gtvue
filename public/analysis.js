"object"!=typeof JSON_ANALY&&"object"==typeof window.JSON&&window.JSON.stringify&&window.JSON.parse?JSON_ANALY=window.JSON:function(){var c={};(function(){var e="function"==typeof define&&define.amd,q={function:!0,object:!0},t=q[typeof c]&&c&&!c.nodeType&&c,I=q[typeof window]&&window||this,n=t&&q[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;function Y(e,s){e||(e=I.Object()),s||(s=I.Object());var f=e.Number||I.Number,u=e.String||I.String,t=e.Object||I.Object,l=e.Date||I.Date,n=e.SyntaxError||I.SyntaxError,A=e.TypeError||I.TypeError,r=e.Math||I.Math,i=e.JSON||I.JSON;"object"==typeof i&&i&&(s.stringify=i.stringify,s.parse=i.parse);var _,k,S,o=t.prototype,O=o.toString,d=new l(-0xc782b5b800cec);try{d=-109252==d.getUTCFullYear()&&0===d.getUTCMonth()&&1===d.getUTCDate()&&10==d.getUTCHours()&&37==d.getUTCMinutes()&&6==d.getUTCSeconds()&&708==d.getUTCMilliseconds()}catch(e){}function h(e){if(h[e]!==S)return h[e];var t;if("bug-string-char-index"==e)t="a"!="a"[0];else if("json"==e)t=h("json-stringify")&&h("json-parse");else{var n,r='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==e){var i=s.stringify,o="function"==typeof i&&d;if(o){(n=function(){return 1}).toJSON=n;try{o="0"===i(0)&&"0"===i(new f)&&'""'==i(new u)&&i(O)===S&&i(S)===S&&i()===S&&"1"===i(n)&&"[1]"==i([n])&&"[null]"==i([S])&&"null"==i(null)&&"[null,null,null]"==i([S,O,null])&&i({a:[n,!0,!1,null,"\0\b\n\f\r\t"]})==r&&"1"===i(null,n)&&"[\n 1,\n 2\n]"==i([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==i(new l(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==i(new l(864e13))&&'"-000001-01-01T00:00:00.000Z"'==i(new l(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==i(new l(-1))}catch(e){o=!1}}t=o}if("json-parse"==e){var a=s.parse;if("function"==typeof a)try{if(0===a("0")&&!a(!1)){var c=5==(n=a(r)).a.length&&1===n.a[0];if(c){try{c=!a('"\t"')}catch(e){}if(c)try{c=1!==a("01")}catch(e){}if(c)try{c=1!==a("1.")}catch(e){}}}}catch(e){c=!1}t=c}}return h[e]=!!t}if(!h("json")){var g="[object Function]",j="[object Number]",N="[object String]",U="[object Array]",c=h("bug-string-char-index");if(!d)var J=r.floor,a=[0,31,59,90,120,151,181,212,243,273,304,334],x=function(e,t){return a[t]+365*(e-1970)+J((e-1969+(t=+(1<t)))/4)-J((e-1901+t)/100)+J((e-1601+t)/400)};if((_=o.hasOwnProperty)||(_=function(e){var n,t={};return(t.__proto__=null,t.__proto__={toString:1},t).toString!=O?_=function(e){var t=this.__proto__,n=e in(this.__proto__=null,this);return this.__proto__=t,n}:(n=t.constructor,_=function(e){var t=(this.constructor||n).prototype;return e in this&&!(e in t&&this[e]===t[e])}),t=null,_.call(this,e)}),k=function(e,t){var n,a,r,i=0;for(r in(n=function(){this.valueOf=0}).prototype.valueOf=0,a=new n)_.call(a,r)&&i++;return n=a=null,i?k=2==i?function(e,t){var n,r={},i=O.call(e)==g;for(n in e)i&&"prototype"==n||_.call(r,n)||!(r[n]=1)||!_.call(e,n)||t(n)}:function(e,t){var n,r,i=O.call(e)==g;for(n in e)i&&"prototype"==n||!_.call(e,n)||(r="constructor"===n)||t(n);(r||_.call(e,n="constructor"))&&t(n)}:(a=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],k=function(e,t){var n,r,i=O.call(e)==g,o=!i&&"function"!=typeof e.constructor&&q[typeof e.hasOwnProperty]&&e.hasOwnProperty||_;for(n in e)i&&"prototype"==n||!o.call(e,n)||t(n);for(r=a.length;n=a[--r];o.call(e,n)&&t(n));}),k(e,t)},!h("json-stringify")){var p={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},D=function(e,t){return("000000"+(t||0)).slice(-e)},M=function(e){for(var t='"',n=0,r=e.length,i=!c||10<r,o=i&&(c?e.split(""):e);n<r;n++){var a=e.charCodeAt(n);switch(a){case 8:case 9:case 10:case 12:case 13:case 34:case 92:t+=p[a];break;default:if(a<32){t+="\\u00"+D(2,a.toString(16));break}t+=i?o[n]:e.charAt(n)}}return t+'"'},L=function(e,t,n,r,i,o,a){var c,s,f,u,l,d,h,g,p,v,y,w,T,m,b,C;try{c=t[e]}catch(e){}if("object"==typeof c&&c)if("[object Date]"!=(s=O.call(c))||_.call(c,"toJSON"))"function"==typeof c.toJSON&&(s!=j&&s!=N&&s!=U||_.call(c,"toJSON"))&&(c=c.toJSON(e));else if(-1/0<c&&c<1/0){if(x){for(l=J(c/864e5),f=J(l/365.2425)+1970-1;x(f+1,0)<=l;f++);for(u=J((l-x(f,0))/30.42);x(f,u+1)<=l;u++);l=1+l-x(f,u),h=J((d=(c%864e5+864e5)%864e5)/36e5)%24,g=J(d/6e4)%60,p=J(d/1e3)%60,v=d%1e3}else f=c.getUTCFullYear(),u=c.getUTCMonth(),l=c.getUTCDate(),h=c.getUTCHours(),g=c.getUTCMinutes(),p=c.getUTCSeconds(),v=c.getUTCMilliseconds();c=(f<=0||1e4<=f?(f<0?"-":"+")+D(6,f<0?-f:f):D(4,f))+"-"+D(2,u+1)+"-"+D(2,l)+"T"+D(2,h)+":"+D(2,g)+":"+D(2,p)+"."+D(3,v)+"Z"}else c=null;if(n&&(c=n.call(t,e,c)),null===c)return"null";if("[object Boolean]"==(s=O.call(c)))return""+c;if(s==j)return-1/0<c&&c<1/0?""+c:"null";if(s==N)return M(""+c);if("object"==typeof c){for(m=a.length;m--;)if(a[m]===c)throw A();if(a.push(c),y=[],b=o,o+=i,s==U){for(T=0,m=c.length;T<m;T++)w=L(T,c,n,r,i,o,a),y.push(w===S?"null":w);C=y.length?i?"[\n"+o+y.join(",\n"+o)+"\n"+b+"]":"["+y.join(",")+"]":"[]"}else k(r||c,function(e){var t=L(e,c,n,r,i,o,a);t!==S&&y.push(M(e)+":"+(i?" ":"")+t)}),C=y.length?i?"{\n"+o+y.join(",\n"+o)+"\n"+b+"}":"{"+y.join(",")+"}":"{}";return a.pop(),C}};s.stringify=function(e,t,n){var r,i,o,a;if(q[typeof t]&&t)if((a=O.call(t))==g)i=t;else if(a==U){o={};for(var c,s=0,f=t.length;s<f;c=t[s++],((a=O.call(c))==N||a==j)&&(o[c]=1));}if(n)if((a=O.call(n))==j){if(0<(n-=n%1))for(r="",10<n&&(n=10);r.length<n;r+=" ");}else a==N&&(r=n.length<=10?n:n.slice(0,10));return L("",((c={})[""]=e,c),i,o,r,"",[])}}if(!h("json-parse")){var v,y,w=u.fromCharCode,T={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},m=function(){throw v=y=null,n()},b=function(){for(var e,t,n,r,i,o=y,a=o.length;v<a;)switch(i=o.charCodeAt(v)){case 9:case 10:case 13:case 32:v++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=c?o.charAt(v):o[v],v++,e;case 34:for(e="@",v++;v<a;)if((i=o.charCodeAt(v))<32)m();else if(92==i)switch(i=o.charCodeAt(++v)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=T[i],v++;break;case 117:for(t=++v,n=v+4;v<n;v++)48<=(i=o.charCodeAt(v))&&i<=57||97<=i&&i<=102||65<=i&&i<=70||m();e+=w("0x"+o.slice(t,v));break;default:m()}else{if(34==i)break;for(i=o.charCodeAt(v),t=v;32<=i&&92!=i&&34!=i;)i=o.charCodeAt(++v);e+=o.slice(t,v)}if(34==o.charCodeAt(v))return v++,e;m();default:if(t=v,45==i&&(r=!0,i=o.charCodeAt(++v)),48<=i&&i<=57){for(48==i&&(48<=(i=o.charCodeAt(v+1))&&i<=57)&&m(),r=!1;v<a&&(48<=(i=o.charCodeAt(v))&&i<=57);v++);if(46==o.charCodeAt(v)){for(n=++v;n<a&&(48<=(i=o.charCodeAt(n))&&i<=57);n++);n==v&&m(),v=n}if(101==(i=o.charCodeAt(v))||69==i){for(43!=(i=o.charCodeAt(++v))&&45!=i||v++,n=v;n<a&&(48<=(i=o.charCodeAt(n))&&i<=57);n++);n==v&&m(),v=n}return+o.slice(t,v)}if(r&&m(),"true"==o.slice(v,v+4))return v+=4,!0;if("false"==o.slice(v,v+5))return v+=5,!1;if("null"==o.slice(v,v+4))return v+=4,null;m()}return"$"},C=function(e){var t,n;if("$"==e&&m(),"string"==typeof e){if("@"==(c?e.charAt(0):e[0]))return e.slice(1);if("["==e){for(t=[];"]"!=(e=b());n||(n=!0))n&&(","==e?"]"==(e=b())&&m():m()),","==e&&m(),t.push(C(e));return t}if("{"==e){for(t={};"}"!=(e=b());n||(n=!0))n&&(","==e?"}"==(e=b())&&m():m()),","!=e&&"string"==typeof e&&"@"==(c?e.charAt(0):e[0])&&":"==b()||m(),t[e.slice(1)]=C(b());return t}m()}return e},E=function(e,t,n){var r=P(e,t,n);r===S?delete e[t]:e[t]=r},P=function(e,t,n){var r,i=e[t];if("object"==typeof i&&i)if(O.call(i)==U)for(r=i.length;r--;)E(i,r,n);else k(i,function(e){E(i,e,n)});return n.call(e,t,i)};s.parse=function(e,t){var n,r;return v=0,y=""+e,n=C(b()),"$"!=b()&&m(),v=y=null,t&&O.call(t)==g?P(((r={})[""]=n,r),"",t):n}}}return s.runInContext=Y,s}if(!n||n.global!==n&&n.window!==n&&n.self!==n||(I=n),t&&!e)Y(I,t);else{var r=I.JSON,i=I.JSON3,o=!1,a=Y(I,I.JSON3={noConflict:function(){return o||(o=!0,I.JSON=r,I.JSON3=i,r=i=null),a}});I.JSON={parse:a.parse,stringify:a.stringify}}e&&define(function(){return a})}).call(this),JSON_ANALY=c}(),"object"!=typeof _faq&&(_faq=[]),"object"!=typeof window.Analy&&(window.Analy=function(){"use strict";var re,ie,e,oe=document,ae=navigator,ce=screen,se=window,fe=se.performance||se.mozPerformance||se.msPerformance||se.webkitPerformance,ue=se.encodeURIComponent,le=se.decodeURIComponent,de=[];function he(t){try{return le(t)}catch(e){return unescape(t)}}function ge(e){return void 0!==e}function pe(e){return"string"==typeof e||e instanceof String}function c(e){"undefined"!==typeof console&&console&&console.error&&console.error(e)}function ve(e){var t,n,r,i,o,a,c,s,f,u,l=function(e,t){return e<<t|e>>>32-t},d=function(e){var t,n="";for(t=7;0<=t;t--)n+=(e>>>4*t&15).toString(16);return n},h=[],g=1732584193,p=4023233417,v=2562383102,y=271733878,w=3285377520,T=[];for(u=(e=unescape(ue(e))).length,n=0;n<u-3;n+=4)r=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),T.push(r);switch(3&u){case 0:n=2147483648;break;case 1:n=e.charCodeAt(u-1)<<24|8388608;break;case 2:n=e.charCodeAt(u-2)<<24|e.charCodeAt(u-1)<<16|32768;break;case 3:n=e.charCodeAt(u-3)<<24|e.charCodeAt(u-2)<<16|e.charCodeAt(u-1)<<8|128}for(T.push(n);14!=(15&T.length);)T.push(0);for(T.push(u>>>29),T.push(u<<3&4294967295),t=0;t<T.length;t+=16){for(n=0;n<16;n++)h[n]=T[t+n];for(n=16;n<=79;n++)h[n]=l(h[n-3]^h[n-8]^h[n-14]^h[n-16],1);for(i=g,o=p,a=v,c=y,s=w,n=0;n<=19;n++)f=l(i,5)+(o&a|~o&c)+s+h[n]+1518500249&4294967295,s=c,c=a,a=l(o,30),o=i,i=f;for(n=20;n<=39;n++)f=l(i,5)+(o^a^c)+s+h[n]+1859775393&4294967295,s=c,c=a,a=l(o,30),o=i,i=f;for(n=40;n<=59;n++)f=l(i,5)+(o&a|o&c|a&c)+s+h[n]+2400959708&4294967295,s=c,c=a,a=l(o,30),o=i,i=f;for(n=60;n<=79;n++)f=l(i,5)+(o^a^c)+s+h[n]+3395469782&4294967295,s=c,c=a,a=l(o,30),o=i,i=f;g=g+i&4294967295,p=p+o&4294967295,v=v+a&4294967295,y=y+c&4294967295,w=w+s&4294967295}return(f=d(g)+d(p)+d(v)+d(y)+d(w)).toLowerCase()}function s(){var e,t,n,r;for(e=0;e<arguments.length;e+=1){var i;for(n=(r=arguments[e]).shift(),t=0;t<de.length;t++)if(pe(n)){if((i=de[t])[n]?i[n].apply(i,r):c("The method '"+n+'\' was not found in "_faq" variable.'),"addTracker"===n)break;if("setTrackerUrl"===n||"setSiteId"===n)break}else n.apply(de[t],r)}}function ye(e,t,n,r){return e.addEventListener?(e.addEventListener(t,n,r),!0):e.attachEvent?e.attachEvent("on"+t,n):void(e["on"+t]=n)}function we(e,t){var o,d,h,g,p,r,a,n,i,c,s,f,u,l,v=t||"",y=e||"",w={},T=(c=oe.domain,s=se.location.href,f=function(){var t="";try{t=se.top.document.referrer}catch(e){if(se.parent)try{t=se.parent.document.referrer}catch(e){t=""}}return""===t&&(t=oe.referrer),t}(),c||(c=""),s||(s=""),[c,s,f]),m=(i=(n=T[0]).length,"."===n.charAt(--i)&&(n=n.slice(0,i)),"*."===n.slice(0,2)&&(n=n.slice(1)),-1!==n.indexOf("/")&&(n=n.substr(0,n.indexOf("/"))),n),b=he(T[1]),C=he(T[2]),A="",_="",k="",S="_fs_",O=63072e6,j=18e5,N=["vid","ses","cvar","ref"],U=1,J=!1,x=!0,D=0,M="",L=500,E=!1,P="GET",q="application/x-www-form-urlencoded; charset=UTF-8",I=ve;try{A=oe.title}catch(e){A=""}function Y(){return I((ae.userAgent||"")+(ae.platform||"")+JSON_ANALY.stringify(w)+(new Date).getTime()+Math.random())}function R(){var e,t="",n="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",r=n.length;for(e=0;e<6;e++)t+=n.charAt(Math.floor(Math.random()*r));return t}function H(t){var e,n,r,i=["","webkit","ms","moz"];if(!o)for(n=0;n<i.length;n++)if(r=i[n],Object.prototype.hasOwnProperty.call(oe,V(r,"hidden"))){"prerender"===oe[V(r,"visibilityState")]&&(e=!0);break}e?ye(oe,r+"visibilitychange",function e(){oe.removeEventListener(r+"visibilitychange",e,!1),t()}):t()}function V(e,t){return""!==e?e+t.charAt(0).toUpperCase()+t.slice(1):t}function X(e,t,n,r,i){var o;n&&(o=new Date).setTime(o.getTime()+n),oe.cookie=e+"="+ue(t)+(n?";expires="+o.toGMTString():"")+";path="+(r||"/")+(i?";domain="+i:"")+(J?";secure":"")}function Z(e){var t=new RegExp("(^|;)[ ]*"+e+"=([^;]*)").exec(oe.cookie);return t?le(t[2]):0}function z(e){return S+e+"."+v}function F(){if(ge(ae.cookieEnabled))return ae.cookieEnabled?"1":"0";var e=z("testcookie");return X(e,"1"),"1"===Z(e)?"1":"0"}function G(e,t,n){X(e,"",-86400,t,n)}function B(){var e,t,n,r,i=(t=new Date,n=Math.round(t.getTime()/1e3),(r=Z(z("vid")))?((e=r.split(".")).unshift("0"),e):e=["1","0"===F()?"":Y(),n,0,n,n+j/1e3,"",U]);return{newVisitor:i[0],uuid:i[1],createTs:i[2],visitCount:i[3],currentVisitTs:i[4],expiresTime:i[5],cid:i[6],version:i[7]}}function $(e){if(v){var t=new Date,n=Math.round(t.getTime()/1e3);ge(e)||(e=B());var r=e.uuid+"."+e.createTs+"."+e.visitCount+"."+n+"."+e.expiresTime;if(e.cid?(r+="."+e.cid,_=e.cid):r+=r?"."+_:".",r+="."+U,X(z("vid"),r,O,h,d),!k){var i=Z(S+"fid");k=i||e.uuid}X(S+"fid",k,O,h,d),G(S+"id.1."+a,h,oe.domain),G(S+"id.en."+a,h,oe.domain)}}function K(){var e,t;return{uuid:(e=new Date,Math.round(e.getTime()/1e3),(t=Z(z("ses")))?t.split("."):["0"===F()?"":Y()])[0]}}function Q(e){var t=(new Date).getTime()+e;(!re||re<t)&&(re=t)}function W(e,t,n){var r,i=new Date,o=Math.round(i.getTime()/1e3),a=Z(z("ses")),c=b,s=B(),f=oe.characterSet||oe.charset;f&&"utf-8"!==f.toLowerCase()||(f=null),s.expiresTime<o&&(G(z("ses"),h,d),a=Z(z("ses"))),a||s.visitCount++,s.expiresTime=o+j/1e3;var u,l=K();for(r in e+="&idsite="+v+"&r="+String(Math.random()).slice(2,8)+"&url="+ue(c)+"&_id="+s.uuid+"&_fid="+k+"&_idts="+s.createTs+"&_idvc="+s.visitCount+"&_idn="+s.newVisitor+"&_sid="+l.uuid+(_&&_.length?"&_c="+ue(_):"")+(C.length?"&urlref="+ue(C):"")+(f?"&cs="+ue(f):"")+"&send_image=0&_v="+U,w)Object.prototype.hasOwnProperty.call(w,r)&&(e+="&"+r+"="+w[r]);return t&&function(e){if(!e)return!0;var t,n=!0;for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n=!1);return n}(t)&&(t=null),t?e+="&data="+ue(JSON_ANALY.stringify(t)):p&&(e+="&data="+ue(JSON_ANALY.stringify(p))),x&&(D?e+="&gt_ms="+D:fe&&fe.timing&&fe.timing.requestStart&&fe.timing.responseEnd&&(e+="&gt_ms="+(fe.timing.responseEnd-fe.timing.requestStart))),g&&(e+="&_rid="+g),$(s),u=l.uuid,X(z("ses"),u,0,h,d),M.length&&(e+="&"+M),e}function ee(e,t,n){!r&&e&&function(e){var t=(new Date).getTime();if(t,E&&t<E){var n=E-t;return setTimeout(e,n),Q(n+50),E+=50}!1===E&&(E=t+800);e()}(function(){"POST"===P||2e3<String(e).length?function(t,n,r){ge(r)&&null!==r||(r=!0);try{var e=se.XMLHttpRequest?new se.XMLHttpRequest:se.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;e.open("POST",y,!0),e.onreadystatechange=function(){4!==this.readyState||200<=this.status&&this.status<300||!r?4===this.readyState&&"function"==typeof n&&n():te(t,n)},e.setRequestHeader("Content-Type",q),e.send(t)}catch(e){r&&te(t,n)}}(e,n):te(e,n),Q(t)})}function te(e,t){var n=new Image(1,1);n.onload=function(){ie=0,"function"==typeof t&&t()},e=e.replace("send_image=0","send_image=1"),n.src=y+(y.indexOf("?")<0?"?":"&")+e}function ne(e,t,n){g=R(),ee(W("t=trackPageView&e_n=pageView&e_s=1&title="+ue(function(e){if(!pe(e=e&&e.text?e.text:e)){var t=oe.getElementsByTagName("title");t&&ge(t[0])&&(e=t[0].text)}return e}(e||A)),t),L,n)}this.addTracker=function(e,t){if(!t)throw new Error("A siteId must be given to add a new tracker");ge(e)&&null!==e||(e=this.getTrackerUrl());var n=new we(e,t);return de.push(n),n},this.setSiteId=function(e){v=e,$()},this.getSiteId=function(){return v},this.setTrackerUrl=function(e){y=e},this.getTrackerUrl=function(){return y},this.setCountPreRendered=function(e){o=e},this.setCustomData=function(e,t){"object"==typeof e?p=e:(p||(p={}),p[e]=t)},this.getCustomData=function(){return p},this.disablePerformanceTracking=function(){x=!1},this.setGenerationTimeMs=function(e){D=parseInt(e,10)},this.appendToTrackingUrl=function(e){M=e},this.setLinkTrackingTimer=function(e){L=e},this.getLinkTrackingTimer=function(){return L},this.setDoNotTrack=function(e){var t=ae.doNotTrack||ae.msDoNotTrack;(r=e&&("yes"===t||"1"===t))&&this.disableCookies()},this.disableCookies=function(){!0,w.cookie="0",v&&function(){var e,t;for(e=0;e<N.length;e++)0!==Z(t=z(N[e]))&&G(t,h,d)}()},this.setUserId=function(e){ge(e)&&e.length&&(_=e)},this.trackPageView=function(e,t,n){H(function(){0,ne(e,t,n)})},this.trackEvent=function(e,t,n,r){H(function(){g=R(),n||(n=1),ee(W("t=trackEvent&e_n="+e+"&e_s="+n,t),L,r)})},function(){w.cookie=F();var e=parseInt(ce.width,10),t=parseInt(ce.height,10);w.res=parseInt(e,10)+"x"+parseInt(t,10)}(),l=oe.domain.split(".").reverse(),u=l.length<=3?"."+l[1]+"."+l[0]:"."+l[2]+"."+l[1]+"."+l[0],d=u,a=I(m+(h||"/")).slice(0,4),$()}function r(){return{push:s}}var i=["addTracker","disableCookies","setTrackerUrl","setAPIUrl","enableCrossDomainLinking","setCrossDomainLinkingTimeout","setCookiePath","setCookieDomain","setDomains","setUserId","setSiteId","enableLinkTracking","setSecureCookie"];function n(e,t){var n=new we(e,t);for(de.push(n),_faq=function(e,t){var n,r,i={};for(n=0;n<t.length;n++){var o=t[n];for(i[o]=1,r=0;r<e.length;r++)if(e[r]&&e[r][0]){var a=e[r][0];o===a&&(s(e[r]),delete e[r],1<i[a]&&c("The method "+a+' is registered more than once in "_faq" variable.'),i[a]++)}}return e}(_faq,i),ie=0;ie<_faq.length;ie++)_faq[ie]&&s(_faq[ie]);return _faq=new r,n}return ye(se,"beforeunload",function(){if(re)for(;(new Date).getTime()<re;);},!1),e={initialized:!1,JSON:JSON_ANALY,addTracker:function(e,t){de.length?de[0].addTracker(e,t):n(e,t)},getAsyncTrackers:function(){return de}},"function"==typeof define&&define.amd&&define("analy",[],function(){return e}),e}()),function(){"use strict";window.Analy.getAsyncTrackers().length||("object"==typeof _faq&&_faq.length?window.Analy.addTracker():console.error("_faq configure error")),window.Analy.initialized=!0}();