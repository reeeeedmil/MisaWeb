import{a as h,t as u}from"../chunks/disclose-version.BiLInlYF.js";import{a5 as b,a6 as m,a1 as w,h as N,a7 as A,a2 as _,V as E,E as k,a8 as x,c as i,r as n,s as f,p as T,b as D}from"../chunks/runtime.WNfhi4Gc.js";import"../chunks/legacy.Br1jko_L.js";import{b as c}from"../chunks/paths.enyXbAav.js";function F(r,a,...s){var o=r,e=N,t;b(()=>{e!==(e=a())&&(t&&(A(t),t=null),t=w(()=>e(o,...s)))},m),_&&(o=E)}function v(r,a,s,o){var e=r.__attributes??(r.__attributes={});_&&(e[a]=r.getAttribute(a),r.nodeName==="LINK")||e[a]!==(e[a]=s)&&(s==null?r.removeAttribute(a):typeof s!="string"&&R(r).includes(a)?r[a]=s:r.setAttribute(a,s))}var l=new Map;function R(r){var a=l.get(r.nodeName);if(a)return a;l.set(r.nodeName,a=[]);for(var s,o=r,e=Element.prototype;e!==o;){s=x(o);for(var t in s)s[t].set&&a.push(t);o=k(o)}return a}var $=u('<header class="bg-pink-lavender h-16"><nav><ul class="flex flex-row justify-center h-16 place-content-center gap-6"><li class="my-auto"><a>Domů</a></li> <li class="my-auto"><a>Dvoutýdenní rewrite</a></li> <li class="my-auto"><a>Odpočet do vydání venciny</a></li></ul></nav></header>');function j(r){var a=$(),s=i(a),o=i(s),e=i(o),t=i(e);v(t,"href",`${c??""}/`),n(e);var p=f(e,2),g=i(p);v(g,"href",`${c??""}/odpocet/rewrite`),n(p);var d=f(p,2),y=i(d);v(y,"href",`${c??""}/odpocet/vencina`),n(d),n(o),n(s),n(a),h(r,a)}var C=u('<div class="w-screen h-screen bg-pink-orchid"><!> <!></div>');function M(r,a){T(a,!0);var s=C(),o=i(s);j(o);var e=f(o,2);F(e,()=>a.children),n(s),h(r,s),D()}export{M as component};