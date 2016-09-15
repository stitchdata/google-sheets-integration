;(function(){var aa=this;
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function h(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b};function l(a,b){this.v=a|0;this.j=b|0}var ca,da,ea,fa,ga,ia,ja={};function m(a){if(-128<=a&&128>a){var b=ja[a];if(b)return b}b=new l(a|0,0>a?-1:0);-128<=a&&128>a&&(ja[a]=b);return b}function n(a){isNaN(a)||!isFinite(a)?a=p():a<=-ka?a=q():a+1>=ka?(fa||(fa=r(-1,2147483647)),a=fa):a=0>a?t(n(-a)):new l(a%v|0,a/v|0);return a}function r(a,b){return new l(a,b)}
function la(a,b){if(0==a.length)throw Error("number format error: empty string");var c=b||10;if(2>c||36<c)throw Error("radix out of range: "+c);if("-"==a.charAt(0))return t(la(a.substring(1),c));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);for(var d=n(Math.pow(c,8)),e=p(),f=0;f<a.length;f+=8){var g=Math.min(8,a.length-f),k=parseInt(a.substring(f,f+g),c);8>g?(g=n(Math.pow(c,g)),e=w(e,g).add(n(k))):(e=w(e,d),e=e.add(n(k)))}return e}var v=4294967296,ka=v*v/2;
function p(){ca||(ca=m(0));return ca}function x(){da||(da=m(1));return da}function ma(){ea||(ea=m(-1));return ea}function q(){ga||(ga=r(0,-2147483648));return ga}function na(){ia||(ia=m(16777216));return ia}function y(a){return a.j*v+(0<=a.v?a.v:v+a.v)}
l.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(z(this))return"0";if(0>this.j){if(A(this,q())){var b=n(a),c=B(this,b),b=oa(w(c,b),this);return c.toString(a)+b.v.toString(a)}return"-"+t(this).toString(a)}for(var c=n(Math.pow(a,6)),b=this,d="";;){var e=B(b,c),f=oa(b,w(e,c)).v.toString(a),b=e;if(z(b))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};function z(a){return 0==a.j&&0==a.v}function A(a,b){return a.j==b.j&&a.v==b.v}
function C(a,b){if(A(a,b))return 0;var c=0>a.j,d=0>b.j;return c&&!d?-1:!c&&d?1:0>oa(a,b).j?-1:1}function t(a){return A(a,q())?q():r(~a.v,~a.j).add(x())}l.prototype.add=function(a){var b=this.j>>>16,c=this.j&65535,d=this.v>>>16,e=a.j>>>16,f=a.j&65535,g=a.v>>>16,k;k=0+((this.v&65535)+(a.v&65535));a=0+(k>>>16);a+=d+g;d=0+(a>>>16);d+=c+f;c=0+(d>>>16);c=c+(b+e)&65535;return r((a&65535)<<16|k&65535,c<<16|d&65535)};function oa(a,b){return a.add(t(b))}
function w(a,b){if(z(a)||z(b))return p();if(A(a,q()))return 1==(b.v&1)?q():p();if(A(b,q()))return 1==(a.v&1)?q():p();if(0>a.j)return 0>b.j?w(t(a),t(b)):t(w(t(a),b));if(0>b.j)return t(w(a,t(b)));var c=na();if(c=0>C(a,c))c=na(),c=0>C(b,c);if(c)return n(y(a)*y(b));var c=a.j>>>16,d=a.j&65535,e=a.v>>>16,f=a.v&65535,g=b.j>>>16,k=b.j&65535,Ia=b.v>>>16,ha=b.v&65535,M,u,H,Ja;Ja=0+f*ha;H=0+(Ja>>>16);H+=e*ha;u=0+(H>>>16);H=(H&65535)+f*Ia;u+=H>>>16;H&=65535;u+=d*ha;M=0+(u>>>16);u=(u&65535)+e*Ia;M+=u>>>16;u&=
65535;u+=f*k;M+=u>>>16;u&=65535;M=M+(c*ha+d*Ia+e*k+f*g)&65535;return r(H<<16|Ja&65535,M<<16|u)}
function B(a,b){if(z(b))throw Error("division by zero");if(z(a))return p();if(A(a,q())){if(A(b,x())||A(b,ma()))return q();if(A(b,q()))return x();var c;c=1;if(0==c)c=a;else{var d=a.j;c=32>c?r(a.v>>>c|d<<32-c,d>>c):r(d>>c-32,0<=d?0:-1)}c=pa(B(c,b),1);if(A(c,p()))return 0>b.j?x():ma();d=oa(a,w(b,c));return c.add(B(d,b))}if(A(b,q()))return p();if(0>a.j)return 0>b.j?B(t(a),t(b)):t(B(t(a),b));if(0>b.j)return t(B(a,t(b)));for(var e=p(),d=a;0<=C(d,b);){c=Math.max(1,Math.floor(y(d)/y(b)));for(var f=Math.ceil(Math.log(c)/
Math.LN2),f=48>=f?1:Math.pow(2,f-48),g=n(c),k=w(g,b);0>k.j||0<C(k,d);)c-=f,g=n(c),k=w(g,b);z(g)&&(g=x());e=e.add(g);d=oa(d,k)}return e}function pa(a,b){b&=63;if(0==b)return a;var c=a.v;return 32>b?r(c<<b,a.j<<b|c>>>32-b):r(0,c<<b-32)}function qa(a,b){b&=63;if(0==b)return a;var c=a.j;return 32>b?r(a.v>>>b|c<<32-b,c>>>b):32==b?r(c,0):r(c>>>b-32,0)};function ra(a,b){if(3<a.length){if(b)return!0;var c=a.charAt(1);return"~"===a.charAt(0)?":"===c||"$"===c||"#"===c:!1}return!1}function sa(a){var b=Math.floor(a/44);a=String.fromCharCode(a%44+48);return 0===b?"^"+a:"^"+String.fromCharCode(b+48)+a}function ta(){this.a=this.s=0;this.g={}}ta.prototype.write=function(a,b){if(ra(a,b)){1936===this.s&&this.clear();var c=this.g[a];return null==c?(this.g[a]=[sa(this.s),this.a],this.s++,a):c[1]!=this.a?(c[1]=this.a,c[0]=sa(this.s),this.s++,a):c[0]}return a};
ta.prototype.clear=function(){this.s=0;this.a++};function ua(){this.s=0;this.a=[]}ua.prototype.write=function(a){1936==this.s&&(this.s=0);this.a[this.s]=a;this.s++;return a};ua.prototype.P=function(a){return this.a[2===a.length?a.charCodeAt(1)-48:44*(a.charCodeAt(1)-48)+(a.charCodeAt(2)-48)]};ua.prototype.clear=function(){this.s=0};var D="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},E="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===ba(a)};function F(){return Math.round(15*Math.random()).toString(16)}
function va(){var a=(8|3&Math.round(14*Math.random())).toString(16);return F()+F()+F()+F()+F()+F()+F()+F()+"-"+F()+F()+F()+F()+"-4"+F()+F()+F()+"-"+a+F()+F()+F()+"-"+F()+F()+F()+F()+F()+F()+F()+F()+F()+F()+F()+F()};var wa=1;function G(a,b){if(null==a)return null==b;if(a===b)return!0;if("object"===typeof a){if(E(a)){if(E(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!G(a[c],b[c]))return!1;return!0}return!1}if(a.C)return a.C(b);if(null!=b&&"object"===typeof b){if(b.C)return b.C(a);var c=0,d=D(b).length,e;for(e in a)if(a.hasOwnProperty(e)&&(c++,!b.hasOwnProperty(e)||!G(a[e],b[e])))return!1;return c===d}}return!1}function xa(a,b){return a^b+2654435769+(a<<6)+(a>>2)}var ya={},za=0;
function Aa(a){var b=0;if(null!=a.forEach)a.forEach(function(a,c){b=(b+(I(c)^I(a)))%4503599627370496});else for(var c=D(a),d=0;d<c.length;d++)var e=c[d],f=a[e],b=(b+(I(e)^I(f)))%4503599627370496;return b}function Ba(a){var b=0;if(E(a))for(var c=0;c<a.length;c++)b=xa(b,I(a[c]));else a.forEach&&a.forEach(function(a){b=xa(b,I(a))});return b}
function I(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":var b=ya[a];if(null==b){for(var c=b=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;za++;256<=za&&(ya={},za=1);ya[a]=b}a=b;return a;case "function":if(b=a.transit$hashCode$)return b;b=wa;"undefined"!=typeof Object.defineProperty?Object.defineProperty(a,"transit$hashCode$",{value:b,enumerable:!1}):a.transit$hashCode$=b;wa++;return b;default:return a instanceof Date?a.valueOf():
E(a)?Ba(a):a.D?a.D():Aa(a)}};var Ca="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function J(a,b){this.tag=a;this.rep=b;this.a=-1}J.prototype.toString=function(){return"[TaggedValue: "+this.tag+", "+this.rep+"]"};J.prototype.g=function(a){return G(this,a)};J.prototype.equiv=J.prototype.g;J.prototype.C=function(a){return a instanceof J?this.tag===a.tag&&G(this.rep,a.rep):!1};J.prototype.D=function(){-1===this.a&&(this.a=xa(I(this.tag),I(this.rep)));return this.a};function K(a,b){return new J(a,b)}
var Da=la("9007199254740991"),Ea=la("-9007199254740991");function Fa(a){if("number"===typeof a)return a;if(a instanceof l)return a;a=la(a,10);return 0<C(a,Da)||0>C(a,Ea)?a:y(a)}l.prototype.a=function(a){return G(this,a)};l.prototype.equiv=l.prototype.a;l.prototype.C=function(a){return a instanceof l&&A(this,a)};l.prototype.D=function(){return this.v};function Ga(a){return K("n",a)}function Ha(a){return K("f",a)}function L(a){this.w=a;this.a=-1}L.prototype.toString=function(){return":"+this.w};
L.prototype.namespace=function(){var a=this.w.indexOf("/");return-1!=a?this.w.substring(0,a):null};L.prototype.name=function(){var a=this.w.indexOf("/");return-1!=a?this.w.substring(a+1,this.w.length):this.w};L.prototype.g=function(a){return G(this,a)};L.prototype.equiv=L.prototype.g;L.prototype.C=function(a){return a instanceof L&&this.w==a.w};L.prototype.D=function(){-1===this.a&&(this.a=I(this.w));return this.a};function Ka(a){return new L(a)}function N(a){this.w=a;this.a=-1}
N.prototype.namespace=function(){var a=this.w.indexOf("/");return-1!=a?this.w.substring(0,a):null};N.prototype.name=function(){var a=this.w.indexOf("/");return-1!=a?this.w.substring(a+1,this.w.length):this.w};N.prototype.toString=function(){return this.w};N.prototype.g=function(a){return G(this,a)};N.prototype.equiv=N.prototype.g;N.prototype.C=function(a){return a instanceof N&&this.w==a.w};N.prototype.D=function(){-1===this.a&&(this.a=I(this.w));return this.a};function La(a){return new N(a)}
function Ma(a,b,c){var d="";c=c||b+1;for(var e=8*(7-b),f=pa(m(255),e);b<c;b++,e-=8,f=qa(f,8)){var g=qa(r(a.v&f.v,a.j&f.j),e).toString(16);1==g.length&&(g="0"+g);d+=g}return d}function O(a,b){this.g=a;this.o=b;this.a=-1}O.prototype.toString=function(){var a,b=this.g,c=this.o;a=""+(Ma(b,0,4)+"-");a+=Ma(b,4,6)+"-";a+=Ma(b,6,8)+"-";a+=Ma(c,0,2)+"-";return a+=Ma(c,2,8)};O.prototype.F=function(a){return G(this,a)};O.prototype.equiv=O.prototype.F;
O.prototype.C=function(a){return a instanceof O&&A(this.g,a.g)&&A(this.o,a.o)};O.prototype.D=function(){-1===this.a&&(this.a=I(this.toString()));return this.a};
function Na(a){a=a.replace(/-/g,"");for(var b=null,c=null,d=c=0,e=24,f=0,f=c=0,e=24;8>f;f+=2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;f=8;for(e=24;16>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;b=r(d,c);c=0;f=16;for(e=24;24>f;f+=2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;for(e=f=24;32>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;c=r(d,c);return new O(b,c)}function Oa(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)}
Date.prototype.C=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.D=function(){return this.valueOf()};
function Pa(a,b){var c;if(b&&!1===b.O||"undefined"==typeof Buffer)if("undefined"!=typeof Uint8Array){if("undefined"!=typeof atob)c=atob(a);else{c=String(a).replace(/=+$/,"");if(1==c.length%4)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var d=0,e,f,g=0,k="";f=c.charAt(g++);~f&&(e=d%4?64*e+f:f,d++%4)?k+=String.fromCharCode(255&e>>(-2*d&6)):0)f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(f);c=k}d=c.length;e=new Uint8Array(d);for(f=
0;f<d;f++)e[f]=c.charCodeAt(f);c=e}else c=K("b",a);else c=new Buffer(a,"base64");return c}function Qa(a){return K("r",a)}function P(a,b){this.a=a;this.type=b||0;this.s=0}P.prototype.next=function(){if(this.s<this.a.length){var a=null;0===this.type?a=this.a[this.s]:1===this.type?a=this.a[this.s+1]:a=[this.a[this.s],this.a[this.s+1]];a={value:a,done:!1};this.s+=2;return a}return{value:null,done:!0}};P.prototype.next=P.prototype.next;P.prototype[Ca]=function(){return this};
function Q(a,b){this.map=a;this.type=b||0;this.keys=Ra(this.map);this.s=0;this.g=null;this.a=0}Q.prototype.next=function(){if(this.s<this.map.size){null!=this.g&&this.a<this.g.length||(this.g=this.map.map[this.keys[this.s]],this.a=0);var a=null;0===this.type?a=this.g[this.a]:1===this.type?a=this.g[this.a+1]:a=[this.g[this.a],this.g[this.a+1]];a={value:a,done:!1};this.s++;this.a+=2;return a}return{value:null,done:!0}};Q.prototype.next=Q.prototype.next;Q.prototype[Ca]=function(){return this};
function Sa(a,b){if(a instanceof R&&Ta(b)){if(a.size!==b.size)return!1;for(var c in a.map)for(var d=a.map[c],e=0;e<d.length;e+=2)if(!G(d[e+1],b.get(d[e])))return!1;return!0}if(a instanceof S&&Ta(b)){if(a.size!==b.size)return!1;c=a.l;for(e=0;e<c.length;e+=2)if(!G(c[e+1],b.get(c[e])))return!1;return!0}if(null!=b&&"object"===typeof b&&(e=D(b),c=e.length,a.size===c)){for(d=0;d<c;d++){var f=e[d];if(!a.has(f)||!G(b[f],a.get(f)))return!1}return!0}return!1}
function Ua(a){return null==a?"null":"array"==ba(a)?"["+a.toString()+"]":"string"==typeof a?'"'+a+'"':a.toString()}function Va(a){var b=0,c="TransitMap {";a.forEach(function(d,e){c+=Ua(e)+" => "+Ua(d);b<a.size-1&&(c+=", ");b++});return c+"}"}function Wa(a){var b=0,c="TransitSet {";a.forEach(function(d){c+=Ua(d);b<a.size-1&&(c+=", ");b++});return c+"}"}function S(a){this.l=a;this.h=null;this.a=-1;this.size=a.length/2;this.g=0}S.prototype.toString=function(){return Va(this)};S.prototype.inspect=function(){return this.toString()};
function Xa(a){if(a.h)throw Error("Invalid operation, already converted");if(8>a.size)return!1;a.g++;return 32<a.g?(a.h=T(a.l,!1,!0),a.l=[],!0):!1}S.prototype.clear=function(){this.a=-1;this.h?this.h.clear():this.l=[];this.size=0};S.prototype.clear=S.prototype.clear;S.prototype.keys=function(){return this.h?this.h.keys():new P(this.l,0)};S.prototype.keys=S.prototype.keys;S.prototype.o=function(){if(this.h)return this.h.o();for(var a=[],b=0,c=0;c<this.l.length;b++,c+=2)a[b]=this.l[c];return a};
S.prototype.keySet=S.prototype.o;S.prototype.entries=function(){return this.h?this.h.entries():new P(this.l,2)};S.prototype.entries=S.prototype.entries;S.prototype.values=function(){return this.h?this.h.values():new P(this.l,1)};S.prototype.values=S.prototype.values;S.prototype.forEach=function(a){if(this.h)this.h.forEach(a);else for(var b=0;b<this.l.length;b+=2)a(this.l[b+1],this.l[b])};S.prototype.forEach=S.prototype.forEach;
S.prototype.get=function(a,b){if(this.h)return this.h.get(a);if(Xa(this))return this.get(a);for(var c=0;c<this.l.length;c+=2)if(G(this.l[c],a))return this.l[c+1];return b};S.prototype.get=S.prototype.get;S.prototype.has=function(a){if(this.h)return this.h.has(a);if(Xa(this))return this.has(a);for(var b=0;b<this.l.length;b+=2)if(G(this.l[b],a))return!0;return!1};S.prototype.has=S.prototype.has;
S.prototype.set=function(a,b){this.a=-1;if(this.h)this.h.set(a,b),this.size=this.h.size;else{for(var c=0;c<this.l.length;c+=2)if(G(this.l[c],a)){this.l[c+1]=b;return}this.l.push(a);this.l.push(b);this.size++;32<this.size&&(this.h=T(this.l,!1,!0),this.l=null)}};S.prototype.set=S.prototype.set;
S.prototype["delete"]=function(a){this.a=-1;if(this.h)return a=this.h["delete"](a),this.size=this.h.size,a;for(var b=0;b<this.l.length;b+=2)if(G(this.l[b],a))return a=this.l[b+1],this.l.splice(b,2),this.size--,a};S.prototype.clone=function(){var a=T();this.forEach(function(b,c){a.set(c,b)});return a};S.prototype.clone=S.prototype.clone;S.prototype[Ca]=function(){return this.entries()};S.prototype.D=function(){if(this.h)return this.h.D();-1===this.a&&(this.a=Aa(this));return this.a};
S.prototype.C=function(a){return this.h?Sa(this.h,a):Sa(this,a)};function R(a,b,c){this.map=b||{};this.a=a||[];this.size=c||0;this.g=-1}R.prototype.toString=function(){return Va(this)};R.prototype.inspect=function(){return this.toString()};R.prototype.clear=function(){this.g=-1;this.map={};this.a=[];this.size=0};R.prototype.clear=R.prototype.clear;function Ra(a){return null!=a.a?a.a:D(a.map)}
R.prototype["delete"]=function(a){this.g=-1;this.a=null;for(var b=I(a),c=this.map[b],d=0;d<c.length;d+=2)if(G(a,c[d]))return a=c[d+1],c.splice(d,2),0===c.length&&delete this.map[b],this.size--,a};R.prototype.entries=function(){return new Q(this,2)};R.prototype.entries=R.prototype.entries;R.prototype.forEach=function(a){for(var b=Ra(this),c=0;c<b.length;c++)for(var d=this.map[b[c]],e=0;e<d.length;e+=2)a(d[e+1],d[e],this)};R.prototype.forEach=R.prototype.forEach;
R.prototype.get=function(a,b){var c=I(a),c=this.map[c];if(null!=c)for(var d=0;d<c.length;d+=2){if(G(a,c[d]))return c[d+1]}else return b};R.prototype.get=R.prototype.get;R.prototype.has=function(a){var b=I(a),b=this.map[b];if(null!=b)for(var c=0;c<b.length;c+=2)if(G(a,b[c]))return!0;return!1};R.prototype.has=R.prototype.has;R.prototype.keys=function(){return new Q(this,0)};R.prototype.keys=R.prototype.keys;
R.prototype.o=function(){for(var a=Ra(this),b=[],c=0;c<a.length;c++)for(var d=this.map[a[c]],e=0;e<d.length;e+=2)b.push(d[e]);return b};R.prototype.keySet=R.prototype.o;R.prototype.set=function(a,b){this.g=-1;var c=I(a),d=this.map[c];if(null==d)this.a&&this.a.push(c),this.map[c]=[a,b],this.size++;else{for(var c=!0,e=0;e<d.length;e+=2)if(G(b,d[e])){c=!1;d[e]=b;break}c&&(d.push(a),d.push(b),this.size++)}};R.prototype.set=R.prototype.set;R.prototype.values=function(){return new Q(this,1)};
R.prototype.values=R.prototype.values;R.prototype.clone=function(){var a=T();this.forEach(function(b,c){a.set(c,b)});return a};R.prototype.clone=R.prototype.clone;R.prototype[Ca]=function(){return this.entries()};R.prototype.D=function(){-1===this.g&&(this.g=Aa(this));return this.g};R.prototype.C=function(a){return Sa(this,a)};
function T(a,b,c){a=a||[];b=!1===b?b:!0;if((!0!==c||!c)&&64>=a.length){if(b){var d=a;a=[];for(b=0;b<d.length;b+=2){var e=!1;for(c=0;c<a.length;c+=2)if(G(a[c],d[b])){a[c+1]=d[b+1];e=!0;break}e||(a.push(d[b]),a.push(d[b+1]))}}return new S(a)}var d={},e=[],f=0;for(b=0;b<a.length;b+=2){c=I(a[b]);var g=d[c];if(null==g)e.push(c),d[c]=[a[b],a[b+1]],f++;else{var k=!0;for(c=0;c<g.length;c+=2)if(G(g[c],a[b])){g[c+1]=a[b+1];k=!1;break}k&&(g.push(a[b]),g.push(a[b+1]),f++)}}return new R(e,d,f)}
function Ta(a){return a instanceof S||a instanceof R}function U(a){this.map=a;this.size=a.size}U.prototype.toString=function(){return Wa(this)};U.prototype.inspect=function(){return this.toString()};U.prototype.add=function(a){this.map.set(a,a);this.size=this.map.size};U.prototype.add=U.prototype.add;U.prototype.clear=function(){this.map=new R;this.size=0};U.prototype.clear=U.prototype.clear;U.prototype["delete"]=function(a){a=this.map["delete"](a);this.size=this.map.size;return a};
U.prototype.g=function(){return this.map.entries()};U.prototype.entries=U.prototype.g;U.prototype.forEach=function(a){var b=this;this.map.forEach(function(c,d){a(d,b)})};U.prototype.forEach=U.prototype.forEach;U.prototype.has=function(a){return this.map.has(a)};U.prototype.has=U.prototype.has;U.prototype.keys=function(){return this.map.keys()};U.prototype.keys=U.prototype.keys;U.prototype.o=function(){return this.map.o()};U.prototype.keySet=U.prototype.o;U.prototype.a=function(){return this.map.values()};
U.prototype.values=U.prototype.a;U.prototype.clone=function(){var a=Ya();this.forEach(function(b){a.add(b)});return a};U.prototype.clone=U.prototype.clone;U.prototype[Ca]=function(){return this.a()};U.prototype.C=function(a){if(a instanceof U){if(this.size===a.size)return G(this.map,a.map)}else return!1};U.prototype.D=function(){return I(this.map)};
function Ya(a){a=a||[];for(var b={},c=[],d=0,e=0;e<a.length;e++){var f=I(a[e]),g=b[f];if(null==g)c.push(f),b[f]=[a[e],a[e]],d++;else{for(var f=!0,k=0;k<g.length;k+=2)if(G(g[k],a[e])){f=!1;break}f&&(g.push(a[e]),g.push(a[e]),d++)}}return new U(new R(c,b,d))}function Za(a){return K("'",a)}function $a(a){return K("list",a)}function ab(a){return K("link",a)};var bb=0,cb="transit$guid$"+va();function db(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var b=a[cb];null==b&&("undefined"!=typeof Object.defineProperty?(b=++bb,Object.defineProperty(a,cb,{value:b,enumerable:!1})):a[cb]=b=++bb);return b}function V(a,b){for(var c=a.toString(),d=c.length;d<b;d++)c="0"+c;return c}function eb(){}eb.prototype.tag=function(){return"_"};
eb.prototype.rep=function(){return null};eb.prototype.B=function(){return"null"};function fb(){}fb.prototype.tag=function(){return"s"};fb.prototype.rep=function(a){return a};fb.prototype.B=function(a){return a};function gb(){}gb.prototype.tag=function(){return"i"};gb.prototype.rep=function(a){return a};gb.prototype.B=function(a){return a.toString()};function hb(){}hb.prototype.tag=function(){return"i"};hb.prototype.rep=function(a){return a.toString()};hb.prototype.B=function(a){return a.toString()};
function ib(){}ib.prototype.tag=function(){return"?"};ib.prototype.rep=function(a){return a};ib.prototype.B=function(a){return a.toString()};function jb(){}jb.prototype.tag=function(){return"array"};jb.prototype.rep=function(a){return a};jb.prototype.B=function(){return null};function kb(){}kb.prototype.tag=function(){return"map"};kb.prototype.rep=function(a){return a};kb.prototype.B=function(){return null};function lb(){}lb.prototype.tag=function(){return"t"};
lb.prototype.rep=function(a){return a.getUTCFullYear()+"-"+V(a.getUTCMonth()+1,2)+"-"+V(a.getUTCDate(),2)+"T"+V(a.getUTCHours(),2)+":"+V(a.getUTCMinutes(),2)+":"+V(a.getUTCSeconds(),2)+"."+V(a.getUTCMilliseconds(),3)+"Z"};lb.prototype.B=function(a,b){return b.rep(a)};function mb(){}mb.prototype.tag=function(){return"m"};mb.prototype.rep=function(a){return a.valueOf()};mb.prototype.B=function(a){return a.valueOf().toString()};mb.prototype.R=function(){return new lb};function nb(){}
nb.prototype.tag=function(){return"u"};nb.prototype.rep=function(a){return a.toString()};nb.prototype.B=function(a){return a.toString()};function ob(){}ob.prototype.tag=function(){return":"};ob.prototype.rep=function(a){return a.w};ob.prototype.B=function(a,b){return b.rep(a)};function pb(){}pb.prototype.tag=function(){return"$"};pb.prototype.rep=function(a){return a.w};pb.prototype.B=function(a,b){return b.rep(a)};function qb(){}qb.prototype.tag=function(a){return a.tag};qb.prototype.rep=function(a){return a.rep};
qb.prototype.B=function(){return null};function rb(){}rb.prototype.tag=function(){return"set"};rb.prototype.rep=function(a){var b=[];a.forEach(function(a){b.push(a)});return K("array",b)};rb.prototype.B=function(){return null};function sb(){}sb.prototype.tag=function(){return"map"};sb.prototype.rep=function(a){return a};sb.prototype.B=function(){return null};function tb(){}tb.prototype.tag=function(){return"map"};tb.prototype.rep=function(a){return a};tb.prototype.B=function(){return null};
function ub(){}ub.prototype.tag=function(){return"b"};ub.prototype.rep=function(a){return a.toString("base64")};ub.prototype.B=function(){return null};function vb(){}vb.prototype.tag=function(){return"b"};
vb.prototype.rep=function(a){for(var b=0,c=a.length,d="",e=null;b<c;)e=a.subarray(b,Math.min(b+32768,c)),d+=String.fromCharCode.apply(null,e),b+=32768;var f;if("undefined"!=typeof btoa)f=btoa(d);else{a=String(d);c=0;d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";for(e="";a.charAt(c|0)||(d="=",c%1);e+=d.charAt(63&f>>8-c%1*8)){b=a.charCodeAt(c+=.75);if(255<b)throw Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");f=f<<8|b}f=e}return f};
vb.prototype.B=function(){return null};function wb(){this.A={};this.set(null,new eb);this.set(String,new fb);this.set(Number,new gb);this.set(l,new hb);this.set(Boolean,new ib);this.set(Array,new jb);this.set(Object,new kb);this.set(Date,new mb);this.set(O,new nb);this.set(L,new ob);this.set(N,new pb);this.set(J,new qb);this.set(U,new rb);this.set(S,new sb);this.set(R,new tb);"undefined"!=typeof Buffer&&this.set(Buffer,new ub);"undefined"!=typeof Uint8Array&&this.set(Uint8Array,new vb)}
wb.prototype.get=function(a){var b=null,b="string"===typeof a?this.A[a]:this.A[db(a)];return null!=b?b:this.A["default"]};wb.prototype.get=wb.prototype.get;wb.prototype.set=function(a,b){var c;if(c="string"===typeof a)a:{switch(a){case "null":case "string":case "boolean":case "number":case "array":case "map":c=!1;break a}c=!0}c?this.A[a]=b:this.A[db(a)]=b};function xb(a){this.K=a}
function W(a){this.o=a||{};this.A={};for(var b in this.G.A)this.A[b]=this.G.A[b];for(b in this.o.handlers){a:{switch(b){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":a=!0;break a}a=!1}if(a)throw Error('Cannot override handler for ground type "'+b+'"');this.A[b]=this.o.handlers[b]}this.J=null!=this.o.preferStrings?this.o.preferStrings:this.G.J;this.O=null!=this.o.preferBuffers?this.o.preferBuffers:this.G.O;this.M=this.o.defaultHandler||this.G.M;this.g=this.o.mapBuilder;
this.F=this.o.arrayBuilder}
W.prototype.G={A:{_:function(){return null},"?":function(a){return"t"===a},b:function(a,b){return Pa(a,b)},i:function(a){return Fa(a)},n:function(a){return Ga(a)},d:function(a){return parseFloat(a)},f:function(a){return Ha(a)},c:function(a){return a},":":function(a){return Ka(a)},$:function(a){return La(a)},r:function(a){return Qa(a)},z:function(a){a:switch(a){case "-INF":a=-Infinity;break a;case "INF":a=Infinity;break a;case "NaN":a=NaN;break a;default:throw Error("Invalid special double value "+a);
}return a},"'":function(a){return a},m:function(a){return Oa(a)},t:function(a){return new Date(a)},u:function(a){return Na(a)},set:function(a){return Ya(a)},list:function(a){return $a(a)},link:function(a){return ab(a)},cmap:function(a){return T(a,!1)}},M:function(a,b){return K(a,b)},J:!0,O:!0};
W.prototype.a=function(a,b,c,d){if(null==a)return null;switch(typeof a){case "string":return ra(a,c)?(a=yb(this,a),b&&b.write(a,c),b=a):b="^"===a.charAt(0)&&" "!==a.charAt(1)?b.P(a,c):yb(this,a),b;case "object":if(E(a))if("^ "===a[0])if(this.g)if(17>a.length&&this.g.fromArray){d=[];for(c=1;c<a.length;c+=2)d.push(this.a(a[c],b,!0,!1)),d.push(this.a(a[c+1],b,!1,!1));b=this.g.fromArray(d,a)}else{d=this.g.init(a);for(c=1;c<a.length;c+=2)d=this.g.add(d,this.a(a[c],b,!0,!1),this.a(a[c+1],b,!1,!1),a);b=
this.g.finalize(d,a)}else{d=[];for(c=1;c<a.length;c+=2)d.push(this.a(a[c],b,!0,!1)),d.push(this.a(a[c+1],b,!1,!1));b=T(d,!1)}else b=zb(this,a,b,c,d);else{c=D(a);var e=c[0];if((d=1==c.length?this.a(e,b,!1,!1):null)&&d instanceof xb)a=a[e],c=this.A[d.K],b=null!=c?c(this.a(a,b,!1,!0),this):K(d.K,this.a(a,b,!1,!1));else if(this.g)if(16>c.length&&this.g.fromArray){var f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.a(e,b,!0,!1)),f.push(this.a(a[e],b,!1,!1));b=this.g.fromArray(f,a)}else{f=this.g.init(a);
for(d=0;d<c.length;d++)e=c[d],f=this.g.add(f,this.a(e,b,!0,!1),this.a(a[e],b,!1,!1),a);b=this.g.finalize(f,a)}else{f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.a(e,b,!0,!1)),f.push(this.a(a[e],b,!1,!1));b=T(f,!1)}}return b}return a};W.prototype.decode=W.prototype.a;
function zb(a,b,c,d,e){if(e){var f=[];for(e=0;e<b.length;e++)f.push(a.a(b[e],c,d,!1));return f}f=c&&c.s;if(2===b.length&&"string"===typeof b[0]&&(e=a.a(b[0],c,!1,!1))&&e instanceof xb)return b=b[1],f=a.A[e.K],null!=f?f=f(a.a(b,c,d,!0),a):K(e.K,a.a(b,c,d,!1));c&&f!=c.s&&(c.s=f);if(a.F){if(32>=b.length&&a.F.fromArray){f=[];for(e=0;e<b.length;e++)f.push(a.a(b[e],c,d,!1));return a.F.fromArray(f,b)}f=a.F.init(b);for(e=0;e<b.length;e++)f=a.F.add(f,a.a(b[e],c,d,!1),b);return a.F.finalize(f,b)}f=[];for(e=
0;e<b.length;e++)f.push(a.a(b[e],c,d,!1));return f}function yb(a,b){if("~"===b.charAt(0)){var c=b.charAt(1);if("~"===c||"^"===c||"`"===c)return b.substring(1);if("#"===c)return new xb(b.substring(2));var d=a.A[c];return null==d?a.M(c,b.substring(2)):d(b.substring(2),a)}return b};function Ab(a){this.a=new W(a)}function Bb(a,b){this.o=a;this.g=b||{};this.a=this.g.cache?this.g.cache:new ua}Bb.prototype.P=function(a){var b=this.a;a=this.o.a.a(JSON.parse(a),b);this.a.clear();return a};Bb.prototype.read=Bb.prototype.P;function Cb(a){this.a=a||{};this.J=null!=this.a.preferStrings?this.a.preferStrings:!0;this.S=this.a.objectBuilder||null;this.A=new wb;if(a=this.a.handlers){if(E(a)||!a.forEach)throw Error('transit writer "handlers" option must be a map');var b=this;a.forEach(function(a,d){if(void 0!==d)b.A.set(d,a);else throw Error("Cannot create handler for JavaScript undefined");})}this.H=this.a.handlerForForeign;this.L=this.a.unpack||function(a){return a instanceof S&&null===a.h?a.l:!1};this.I=this.a&&this.a.verbose||
!1}function Db(a,b){var c=a.A.get(null==b?null:b.constructor);return null!=c?c:(c=b&&b.transitTag)?a.A.get(c):null}function X(a,b,c,d,e){a=a+b+c;return e?e.write(a,d):a}function Eb(a,b,c){var d=[];if(E(b))for(var e=0;e<b.length;e++)d.push(Y(a,b[e],!1,c));else b.forEach(function(b){d.push(Y(a,b,!1,c))});return d}function Fb(a,b){if("string"!==typeof b){var c=Db(a,b);return c&&1===c.tag(b).length}return!0}
function Gb(a,b){var c=a.L(b),d=!0;if(c){for(var e=0;e<c.length&&(d=Fb(a,c[e]),d);e+=2);return d}if(b.keys&&(c=b.keys(),e=null,c.next)){for(e=c.next();!e.done;){d=Fb(a,e.value);if(!d)break;e=c.next()}return d}if(b.forEach)return b.forEach(function(b,c){d=d&&Fb(a,c)}),d;throw Error("Cannot walk keys of object type "+(null==b?null:b.constructor).name);}
function Hb(a){if(a.constructor.transit$isObject)return!0;var b=a.constructor.toString(),b=b.substr(9),b=b.substr(0,b.indexOf("("));isObject="Object"==b;"undefined"!=typeof Object.defineProperty?Object.defineProperty(a.constructor,"transit$isObject",{value:isObject,enumerable:!1}):a.constructor.transit$isObject=isObject;return isObject}
function Ib(a,b,c){var d=null,e=null,f=null,d=null,g=0;if(b.constructor===Object||null!=b.forEach||a.H&&Hb(b)){if(a.I){if(null!=b.forEach){if(Gb(a,b)){var k={};b.forEach(function(b,d){k[Y(a,d,!0,!1)]=Y(a,b,!1,c)});return k}d=a.L(b);e=[];f=X("~#","cmap","",!0,c);if(d)for(;g<d.length;g+=2)e.push(Y(a,d[g],!1,!1)),e.push(Y(a,d[g+1],!1,c));else b.forEach(function(b,d){e.push(Y(a,d,!1,!1));e.push(Y(a,b,!1,c))});k={};k[f]=e;return k}d=D(b);for(k={};g<d.length;g++)k[Y(a,d[g],!0,!1)]=Y(a,b[d[g]],!1,c);return k}if(null!=
b.forEach){if(Gb(a,b)){d=a.L(b);k=["^ "];if(d)for(;g<d.length;g+=2)k.push(Y(a,d[g],!0,c)),k.push(Y(a,d[g+1],!1,c));else b.forEach(function(b,d){k.push(Y(a,d,!0,c));k.push(Y(a,b,!1,c))});return k}d=a.L(b);e=[];f=X("~#","cmap","",!0,c);if(d)for(;g<d.length;g+=2)e.push(Y(a,d[g],!1,c)),e.push(Y(a,d[g+1],!1,c));else b.forEach(function(b,d){e.push(Y(a,d,!1,c));e.push(Y(a,b,!1,c))});return[f,e]}k=["^ "];for(d=D(b);g<d.length;g++)k.push(Y(a,d[g],!0,c)),k.push(Y(a,b[d[g]],!1,c));return k}if(null!=a.S)return a.S(b,
function(b){return Y(a,b,!0,c)},function(b){return Y(a,b,!1,c)});g=(null==b?null:b.constructor).name;d=Error("Cannot write "+g);d.data={N:b,type:g};throw d;}
function Y(a,b,c,d){var e=Db(a,b)||(a.H?a.H(b,a.A):null),f=e?e.tag(b):null,g=e?e.rep(b):null;if(null!=e&&null!=f)switch(f){case "_":return c?X("~","_","",c,d):null;case "s":return 0<g.length?(a=g.charAt(0),a="~"===a||"^"===a||"`"===a?"~"+g:g):a=g,X("","",a,c,d);case "?":return c?X("~","?",g.toString()[0],c,d):g;case "i":return Infinity===g?X("~","z","INF",c,d):-Infinity===g?X("~","z","-INF",c,d):isNaN(g)?X("~","z","NaN",c,d):c||"string"===typeof g||g instanceof l?X("~","i",g.toString(),c,d):g;case "d":return c?
X(g.T,"d",g,c,d):g;case "b":return X("~","b",g,c,d);case "'":return a.I?(b={},c=X("~#","'","",!0,d),b[c]=Y(a,g,!1,d),d=b):d=[X("~#","'","",!0,d),Y(a,g,!1,d)],d;case "array":return Eb(a,g,d);case "map":return Ib(a,g,d);default:a:{if(1===f.length){if("string"===typeof g){d=X("~",f,g,c,d);break a}if(c||a.J){(a=a.I&&e.R())?(f=a.tag(b),g=a.B(b,a)):g=e.B(b,e);if(null!==g){d=X("~",f,g,c,d);break a}d=Error('Tag "'+f+'" cannot be encoded as string');d.data={tag:f,rep:g,N:b};throw d;}}b=f;c=g;a.I?(g={},g[X("~#",
b,"",!0,d)]=Y(a,c,!1,d),d=g):d=[X("~#",b,"",!0,d),Y(a,c,!1,d)]}return d}else throw d=(null==b?null:b.constructor).name,a=Error("Cannot write "+d),a.data={N:b,type:d},a;}function Jb(a,b){var c=Db(a,b)||(a.H?a.H(b,a.A):null);if(null!=c)return 1===c.tag(b).length?Za(b):b;var c=(null==b?null:b.constructor).name,d=Error("Cannot write "+c);d.data={N:b,type:c};throw d;}function Z(a,b){this.a=a;this.o=b||{};!1===this.o.cache?this.g=null:this.g=this.o.cache?this.o.cache:new ta}Z.prototype.G=function(){return this.a};
Z.prototype.marshaller=Z.prototype.G;Z.prototype.write=function(a,b){var c=null,d=b||{},c=d.asMapKey||!1,e=this.a.I?!1:this.g;!1===d.marshalTop?c=Y(this.a,a,c,e):(d=this.a,c=JSON.stringify(Y(d,Jb(d,a),c,e)));null!=this.g&&this.g.clear();return c};Z.prototype.write=Z.prototype.write;Z.prototype.F=function(a,b){this.a.A.set(a,b)};Z.prototype.register=Z.prototype.F;var Kb=T;h("transit.reader",function(a,b){if("json"===a||"json-verbose"===a||null==a){var c=new Ab(b);return new Bb(c,b)}throw Error("Cannot create reader of type "+a);});h("transit.writer",function(a,b){if("json"===a||"json-verbose"===a||null==a){"json-verbose"===a&&(null==b&&(b={}),b.verbose=!0);var c=new Cb(b);return new Z(c,b)}c=Error('Type must be "json"');c.data={type:a};throw c;});
h("transit.makeBuilder",function(a){function b(){}b.prototype.init=a.init;b.prototype.add=a.add;b.prototype.finalize=a.finalize;b.prototype.fromArray=a.fromArray;return new b});h("transit.makeWriteHandler",function(a){function b(){}b.prototype.tag=a.tag;b.prototype.rep=a.rep;b.prototype.B=a.stringRep;b.prototype.R=a.getVerboseHandler;return new b});h("transit.date",Oa);h("transit.integer",Fa);
h("transit.isInteger",function(a){return a instanceof l?!0:"number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a,10)});h("transit.uuid",function(a){return Na(a)});h("transit.isUUID",function(a){return a instanceof O});h("transit.bigInt",Ga);h("transit.isBigInt",function(a){return a instanceof J&&"n"===a.tag});h("transit.bigDec",Ha);h("transit.isBigDec",function(a){return a instanceof J&&"f"===a.tag});h("transit.keyword",Ka);h("transit.isKeyword",function(a){return a instanceof L});
h("transit.symbol",La);h("transit.isSymbol",function(a){return a instanceof N});h("transit.binary",Pa);h("transit.isBinary",function(a){return"undefined"!=typeof Buffer&&a instanceof Buffer?!0:"undefined"!=typeof Uint8Array&&a instanceof Uint8Array?!0:a instanceof J&&"b"===a.tag});h("transit.uri",Qa);h("transit.isURI",function(a){return a instanceof J&&"r"===a.tag});h("transit.map",T);h("transit.isMap",Ta);h("transit.set",Ya);h("transit.isSet",function(a){return a instanceof U});
h("transit.list",$a);h("transit.isList",function(a){return a instanceof J&&"list"===a.tag});h("transit.quoted",Za);h("transit.isQuoted",function(a){return a instanceof J&&"'"===a.tag});h("transit.tagged",K);h("transit.isTaggedValue",function(a){return a instanceof J});h("transit.link",ab);h("transit.isLink",function(a){return a instanceof J&&"link"===a.tag});h("transit.hash",I);h("transit.hashMapLike",Aa);h("transit.hashArrayLike",Ba);h("transit.equals",G);
h("transit.extendToEQ",function(a,b){a.D=b.hashCode;a.C=b.equals;return a});h("transit.mapToObject",function(a){var b={};a.forEach(function(a,d){if("string"!==typeof d)throw Error("Cannot convert map with non-string keys");b[d]=a});return b});h("transit.objectToMap",function(a){var b=Kb(),c;for(c in a)a.hasOwnProperty(c)&&b.set(c,a[c]);return b});h("transit.decoder",function(a){return new W(a)});h("transit.UUIDfromString",Na);h("transit.randomUUID",va);h("transit.stringableKeys",Gb);
h("transit.readCache",function(){return new ua});h("transit.writeCache",function(){return new ta});})();

var t = transit;


// This function is what kicks off the datasync. It will either loop through and send 10000 records at a time,
// or send the entire dataset,depending on the size of the document

function push(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var tablename = normalizeHeaders([sheet.getSheetName()])[0];
  if (ScriptProperties.getProperty('STITCHTOKEN') == null || ScriptProperties.getProperty('STITCHID') == null || ScriptProperties.getProperty(tablename) == null){
    Browser.msgBox("You are missing some of the required information to send the data. Please click add the required information in the next prompt");
    onInstall();
  }
  else {
    var range = sheet.getDataRange();
    var lastcolumn = range.getLastColumn();
    Logger.log(tablename);
    var newkey = normalizeHeaders(ScriptProperties.getProperty(tablename).split(','));
    var firstrow = 2
    // last row minus 1 assuming the first row is headers
    var lastrow = range.getLastRow() + 1;
    trackdoc(lastrow, tablename);

    var i = 10001;
    if (ScriptProperties.getProperty('STITCHTOKEN') == null || ScriptProperties.getProperty('STITCHID') == null || tablename == null){
      msgBox("You are missing some of the required information to send the data. Please click the 'Setup Spreadsheet For Push' in the dropdown");
    }
    else if (lastrow > i){
      largedoc(lastrow, lastcolumn, i, tablename, sheet, newkey)

    }
    else {smalldoc(lastrow, lastcolumn, i, firstrow, tablename, sheet, newkey)};
  }
}

function toTransit(data){
  var w = t.writer("json");
  return w.write(data);
}

function insertKeys(spreadsheetdata, keys, tablename, sheet, cid){
 var new_array = []
 var arrayLength = spreadsheetdata.length;
  for (var i = 0; i < arrayLength; i++) {
    //Logger.log('keys' + keys);
    var record = {};
    record.client_id = parseInt(cid);
    record.action = "upsert"
    record.sequence = new Date().getTime();
    record.table_name = tablename;
    record.key_names = keys;
    record.data = spreadsheetdata[i];

    new_array.push(record);
    //Logger.log(record);
  }
  return new_array
}

function largedoc(lastrow, lastcolumn, i, tablename, sheet, newkey){
  Logger.log('starting largedoc rows loop');
  // this first row setting is so the first row gets incremented by 10000 at the beginning of the while loop instead of the end.
  var firstrow = -99998;
  // send 10000 rows at a time, asyncronosly.
  while (lastrow > i){
    firstrow = firstrow + 100000
    //Logger.log('rows ' + firstrow + " - " + (firstrow + 100000));
    var datarange = sheet.getRange(firstrow, 1, 100000, lastcolumn);
    //Logger.log("datarange = " + datarange.getNumRows())
    var api = ScriptProperties.getProperty('STITCHTOKEN');
    var cid = ScriptProperties.getProperty('STITCHID');
    var spreadsheetdata = getRowsData(sheet, datarange, 1);
    var payload_pre = insertKeys(spreadsheetdata, newkey, tablename, sheet, cid, api);
    var payload = toTransit(payload_pre);
    //Logger.log("Payload Length" + spreadsheetdata.length)
    var url = 'https://pipeline-gateway.rjmetrics.com/push';
    var options = {
      'method': 'post',
      "contentType" : "application/transit+json",
      "payload": payload,
      "headers": {'Authorization': 'Bearer ' + api}
    };
    Logger.log(options)
    //var response = UrlFetchApp.fetch(url, options);
    i = i + 100;
  }
  firstrow = firstrow + 100000
  smalldoc(lastrow, lastcolumn, i, firstrow, tablename, sheet, newkey)
}

// For sending the entire document, if less than 10000 rows, or for sending the remainder of a large document after the loop of 10000 records at a time.
function smalldoc(lastrow, lastcolumn, i, firstrow, tablename, sheet, newkey){
  Logger.log('starting last rows');
  //Logger.log('rows ' + firstrow + " - " + lastrow);
  var length_left = lastrow - firstrow
  var datarange = sheet.getRange(firstrow, 1, length_left, lastcolumn);
  var spreadsheetdata = getRowsData(sheet, datarange, 1);
  var api = ScriptProperties.getProperty('STITCHTOKEN');
  var cid = ScriptProperties.getProperty('STITCHID');
  var spreadsheetdata = getRowsData(sheet, datarange, 1);
  var payload_pre = insertKeys(spreadsheetdata, newkey, tablename, sheet, cid, api);
  var payload = toTransit(payload_pre);
  Logger.log(payload);
  var url = 'https://pipeline-gateway.rjmetrics.com/push';
  var options = {
    'method': 'post',
    "contentType" : "application/transit+json",
    "payload": payload,
    "headers": {'Authorization': 'Bearer ' + api},
    "muteHttpExceptions" : true
  };
  //Logger.log(options)
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response);
  return response
}


function trackdoc(lastrow, tablename) {
 var remote = SpreadsheetApp.openById('1f33oopWLMFGtuWQlLpUrpyeScMXnRd9cGSQxKuZ51B0');
 var remote_sheet = remote.getSheets()[0];
 var cid = ScriptProperties.getProperty('STITCHID');
 var date = new Date();
 // Appends a new row with 3 columns to the bottom of the
 // spreadsheet containing the values in the array
 remote_sheet.appendRow([cid, lastrow, tablename, date ]);
}

function onInstall() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var key = Browser.inputBox("Input Stitch API Token here. Press cancel if no change.", Browser.Buttons.OK_CANCEL);
  var cid = Browser.inputBox("Input Stitch Client Id here. Look at your URL while on the Dashboard page to find your client ID. It’s the four-digit number between client and pipeline( https://app.stitchdata.com/v2/client/XXXX/pipeline/connections). Press cancel if no change.", Browser.Buttons.OK_CANCEL);
  var primaryKey = Browser.inputBox("Enter a comma separated list of the primary key(s) for this Sheet (tab). Usually this will be one column, but if multiple columns make a row unique, add more. Press cancel if no change.", Browser.Buttons.OK_CANCEL);
  if(key && key!="cancel") ScriptProperties.setProperty("STITCHTOKEN", key);
  if(cid && cid!="cancel") ScriptProperties.setProperty("STITCHID", cid);
  if(primaryKey && primaryKey!="cancel") ScriptProperties.setProperty(normalizeHeaders([sheet.getSheetName()]), primaryKey);
  auth()
}

function auth() {}

function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  var menuItems = [
    {name: 'Sync with Stitch', functionName: 'push'},
    {name: 'Setup Spreadsheet For Push', functionName: 'onInstall'}
  ];
  spreadsheet.addMenu('Stitch Import', menuItems);
  function auth() {}
  auth()
}

// getRowsData iterates row by row in the input range and returns an array of objects.
// Each object contains all the data for a given row, indexed by its normalized column name.
// Arguments:
//   - sheet: the sheet object that contains the data to be processed
//   - range: the exact range of cells where the data is stored
//   - columnHeadersRowIndex: specifies the row number where the column names are stored.
//       This argument is optional and it defaults to the row immediately above range;
// Returns an Array of objects.
function getRowsData(sheet, range, columnHeadersRowIndex) {
  columnHeadersRowIndex = columnHeadersRowIndex || range.getRowIndex() - 1;
  var numColumns = range.getLastColumn() - range.getColumn() + 1;
  var headersRange = sheet.getRange(columnHeadersRowIndex, range.getColumn(), 1, numColumns);
  var headers = headersRange.getValues()[0];
  return getObjects(range.getValues(), normalizeHeaders(headers));
}

// For every row of data in data, generates an object that contains the data. Names of
// object fields are defined in keys.
// Arguments:
//   - data: JavaScript 2d array
//   - keys: Array of Strings that define the property names for the objects to create
function getObjects(data, keys) {
  var objects = [];
  for (var i = 0; i < data.length; ++i) {
    var object = {};
    var hasData = false;
    for (var j = 0; j < data[i].length; ++j) {
      var cellData = data[i][j];
      if (isCellEmpty(cellData)) {
        object[keys[j]] = null
      }
      object[keys[j]] = cellData;
      hasData = true;
    }
    if (hasData) {
      objects.push(object);
    }
  }
  return objects;
}

// Returns an Array of normalized Strings.
// Arguments:
//   - headers: Array of Strings to normalize
function normalizeHeaders(headers) {
  var keys = [];
  for (var i = 0; i < headers.length; ++i) {
    var key = normalizeHeader(headers[i]);
    if (key.length > 0) {
      keys.push(key);
    }
  }
  return keys;
}

// Normalizes a string, by removing all non-alphanumeric characters and using mixed case
// to separate words. The output will always start with a lower case letter.
// This function is designed to produce JavaScript object property names.
// Arguments:
//   - header: string to normalize
// Examples:
//   "First Name" -> "firstName"
//   "Market Cap (millions) -> "marketCapMillions
//   "1 number at the beginning is ignored" -> "numberAtTheBeginningIsIgnored"
function normalizeHeader(header) {
  var key = "";
  var upperCase = false;
  for (var i = 0; i < header.length; ++i) {
    var letter = header[i];
    if (letter == " " && key.length > 0) {
      upperCase = true;
      continue;
    }
    if (!isAlnum(letter)){
      continue;
    }
    if (key.length == 0 && isDigit(letter)) {
      continue; // first character must be a letter
    }
    if (upperCase) {
      upperCase = false;
      key += letter.toUpperCase();
    } else {
      key += letter.toLowerCase();
    }
  }
  return key;
}

// Returns true if the cell where cellData was read from is empty.
// Arguments:
//   - cellData: string
function isCellEmpty(cellData) {
  return typeof(cellData) == "string" && cellData == "";
}

// Returns true if the character char is alphabetical, false otherwise.
function isAlnum(char) {
  return char >= 'A' && char <= 'Z' ||
    char >= 'a' && char <= 'z' ||
      char == '_' ||
        isDigit(char);
}

// Returns true if the character char is a digit, false otherwise.
function isDigit(char) {
  return char >= '0' && char <= '9';
}
