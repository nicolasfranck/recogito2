!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ActivityStats",[],e):"object"==typeof exports?exports.ActivityStats=e():t.ActivityStats=e()}(window,function(){return function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],p=0,f=[];p<i.length;p++)s=i[p],a[s]&&f.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(u&&u(e);f.length;)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={0:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window.webpackJsonpActivityStats=window.webpackJsonpActivityStats||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;return o.push([510,1]),n()}({325:function(t,e,n){var r=n(326);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(39)(r,a);r.locals&&(t.exports=r.locals)},326:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".inner.summary-stats {\n  min-height: 180px;\n  padding: 20px; }\n  .inner.summary-stats td {\n    padding: 2px;\n    line-height: 19px;\n    font-size: 14px; }\n  .inner.summary-stats td:first-child {\n    font-size: 19px;\n    text-align: right; }\n  .inner.summary-stats td:last-child {\n    position: relative;\n    top: 2px; }\n  .inner.summary-stats #annotations-by-category {\n    position: absolute;\n    top: 15px;\n    right: 30px; }\n",""])},328:function(t,e,n){var r=n(329);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(39)(r,a);r.locals&&(t.exports=r.locals)},329:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".inner.contributors-chart {\n  height: 190px; }\n  .inner.contributors-chart td {\n    padding: 0 4px; }\n  .inner.contributors-chart td:first-child, .inner.contributors-chart td:last-child {\n    text-align: right; }\n  .inner.contributors-chart .meter {\n    height: 10px;\n    width: 400px;\n    margin-top: 2px; }\n  .inner.contributors-chart .bar {\n    background-color: #4483c4; }\n",""])},504:function(t,e,n){var r=n(505);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(39)(r,a);r.locals&&(t.exports=r.locals)},505:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".inner.timeline {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 35px 0 20px 0; }\n  .inner.timeline .recharts-wrapper {\n    margin: 0 auto; }\n  .inner.timeline svg {\n    font-family: PTSansNarrow;\n    font-size: 13px;\n    shape-rendering: crispEdges; }\n    .inner.timeline svg .recharts-layer {\n      shape-rendering: geometricPrecision; }\n",""])},507:function(t,e,n){var r={"./af":140,"./af.js":140,"./ar":141,"./ar-dz":142,"./ar-dz.js":142,"./ar-kw":143,"./ar-kw.js":143,"./ar-ly":144,"./ar-ly.js":144,"./ar-ma":145,"./ar-ma.js":145,"./ar-sa":146,"./ar-sa.js":146,"./ar-tn":147,"./ar-tn.js":147,"./ar.js":141,"./az":148,"./az.js":148,"./be":149,"./be.js":149,"./bg":150,"./bg.js":150,"./bm":151,"./bm.js":151,"./bn":152,"./bn.js":152,"./bo":153,"./bo.js":153,"./br":154,"./br.js":154,"./bs":155,"./bs.js":155,"./ca":156,"./ca.js":156,"./cs":157,"./cs.js":157,"./cv":158,"./cv.js":158,"./cy":159,"./cy.js":159,"./da":160,"./da.js":160,"./de":161,"./de-at":162,"./de-at.js":162,"./de-ch":163,"./de-ch.js":163,"./de.js":161,"./dv":164,"./dv.js":164,"./el":165,"./el.js":165,"./en-SG":166,"./en-SG.js":166,"./en-au":167,"./en-au.js":167,"./en-ca":168,"./en-ca.js":168,"./en-gb":169,"./en-gb.js":169,"./en-ie":170,"./en-ie.js":170,"./en-il":171,"./en-il.js":171,"./en-nz":172,"./en-nz.js":172,"./eo":173,"./eo.js":173,"./es":174,"./es-do":175,"./es-do.js":175,"./es-us":176,"./es-us.js":176,"./es.js":174,"./et":177,"./et.js":177,"./eu":178,"./eu.js":178,"./fa":179,"./fa.js":179,"./fi":180,"./fi.js":180,"./fo":181,"./fo.js":181,"./fr":182,"./fr-ca":183,"./fr-ca.js":183,"./fr-ch":184,"./fr-ch.js":184,"./fr.js":182,"./fy":185,"./fy.js":185,"./ga":186,"./ga.js":186,"./gd":187,"./gd.js":187,"./gl":188,"./gl.js":188,"./gom-latn":189,"./gom-latn.js":189,"./gu":190,"./gu.js":190,"./he":191,"./he.js":191,"./hi":192,"./hi.js":192,"./hr":193,"./hr.js":193,"./hu":194,"./hu.js":194,"./hy-am":195,"./hy-am.js":195,"./id":196,"./id.js":196,"./is":197,"./is.js":197,"./it":198,"./it-ch":199,"./it-ch.js":199,"./it.js":198,"./ja":200,"./ja.js":200,"./jv":201,"./jv.js":201,"./ka":202,"./ka.js":202,"./kk":203,"./kk.js":203,"./km":204,"./km.js":204,"./kn":205,"./kn.js":205,"./ko":206,"./ko.js":206,"./ku":207,"./ku.js":207,"./ky":208,"./ky.js":208,"./lb":209,"./lb.js":209,"./lo":210,"./lo.js":210,"./lt":211,"./lt.js":211,"./lv":212,"./lv.js":212,"./me":213,"./me.js":213,"./mi":214,"./mi.js":214,"./mk":215,"./mk.js":215,"./ml":216,"./ml.js":216,"./mn":217,"./mn.js":217,"./mr":218,"./mr.js":218,"./ms":219,"./ms-my":220,"./ms-my.js":220,"./ms.js":219,"./mt":221,"./mt.js":221,"./my":222,"./my.js":222,"./nb":223,"./nb.js":223,"./ne":224,"./ne.js":224,"./nl":225,"./nl-be":226,"./nl-be.js":226,"./nl.js":225,"./nn":227,"./nn.js":227,"./pa-in":228,"./pa-in.js":228,"./pl":229,"./pl.js":229,"./pt":230,"./pt-br":231,"./pt-br.js":231,"./pt.js":230,"./ro":232,"./ro.js":232,"./ru":233,"./ru.js":233,"./sd":234,"./sd.js":234,"./se":235,"./se.js":235,"./si":236,"./si.js":236,"./sk":237,"./sk.js":237,"./sl":238,"./sl.js":238,"./sq":239,"./sq.js":239,"./sr":240,"./sr-cyrl":241,"./sr-cyrl.js":241,"./sr.js":240,"./ss":242,"./ss.js":242,"./sv":243,"./sv.js":243,"./sw":244,"./sw.js":244,"./ta":245,"./ta.js":245,"./te":246,"./te.js":246,"./tet":247,"./tet.js":247,"./tg":248,"./tg.js":248,"./th":249,"./th.js":249,"./tl-ph":250,"./tl-ph.js":250,"./tlh":251,"./tlh.js":251,"./tr":252,"./tr.js":252,"./tzl":253,"./tzl.js":253,"./tzm":254,"./tzm-latn":255,"./tzm-latn.js":255,"./tzm.js":254,"./ug-cn":256,"./ug-cn.js":256,"./uk":257,"./uk.js":257,"./ur":258,"./ur.js":258,"./uz":259,"./uz-latn":260,"./uz-latn.js":260,"./uz.js":259,"./vi":261,"./vi.js":261,"./x-pseudo":262,"./x-pseudo.js":262,"./yo":263,"./yo.js":263,"./zh-cn":264,"./zh-cn.js":264,"./zh-hk":265,"./zh-hk.js":265,"./zh-tw":266,"./zh-tw.js":266};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=507},508:function(t,e,n){var r=n(509);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(39)(r,a);r.locals&&(t.exports=r.locals)},509:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".panel {\n  display: inline-block;\n  max-width: 100% !important;\n  margin-right: 1%;\n  margin-bottom: 15px; }\n\n.panel.w2 {\n  width: 16.6%; }\n\n.panel.w3 {\n  width: 25%; }\n\n.panel.w4 {\n  width: 32%; }\n\n.panel.w5 {\n  width: 41.6%; }\n\n.panel.w6 {\n  width: 50%; }\n\n.panel.w7 {\n  width: 58.3%; }\n\n.panel.w8 {\n  width: 65%; }\n\n.panel.w12 {\n  width: 98.2%; }\n\n.content {\n  max-width: 1400px;\n  min-width: 960px; }\n\n.inner {\n  position: relative; }\n\n.inner .loading-mask {\n  background-color: rgba(255, 255, 255, 0.85);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n  .inner .loading-mask .spinner {\n    position: absolute;\n    bottom: 50%;\n    left: 48%;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    line-height: 20px;\n    border: 3px solid rgba(68, 131, 196, 0.3);\n    border-top: 3px solid #4483c4;\n    border-radius: 50%;\n    -webkit-animation: spin 1s infinite linear;\n    animation: spin 1s infinite linear; }\n\n@-moz-keyframes spin {\n  100% {\n    -moz-transform: rotate(360deg); } }\n\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n",""])},510:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),o=n(51),s=n.n(o),i=n(80),l=n.n(i),c=n(267),u=n(52),p=n.n(u);class f{constructor(t){this._a=t}getBodiesOfType(t){return Array.isArray(t)?this._a.bodies.filter(e=>t.includes(e.type)):this._a.bodies.filter(e=>e.type===t)}getCategoryBodies(){return this.getBodiesOfType(["PLACE","PERSON","EVENT"])}getTags(){return this.getBodiesOfType("TAG")}getComments(){return this.getBodiesOfType("COMMENT")}}n(325);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=["#57c17b","#6f87d8","#bc51bc","#afafaf"],v=function(t){return a.a.createElement(p.a,{thousandSeparator:!0,displayType:"text",value:t.value})},E=function(t){function e(){var t,n,r,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return r=this,n=!(a=(t=y(e)).call.apply(t,[this].concat(s)))||"object"!==m(a)&&"function"!=typeof a?h(r):a,b(h(n),"state",{computing:!0,tags:null,comments:null,relations:null,contributors:null,bodiesByType:{}}),n}var n,o,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,r["Component"]),n=e,(o=[{key:"componentWillReceiveProps",value:function(t){this.props.annotations!=t.annotations&&this.recompute(t.annotations)}},{key:"recompute",value:function(t){var e=this;new Promise(function(e){e({tags:function(t){return t.reduce((t,e)=>t+new f(e).getTags().length,0)}(t),comments:function(t){return t.reduce((t,e)=>t+new f(e).getComments().length,0)}(t),relations:function(t){return t.reduce((t,e)=>e.relations?t+e.relations.length:t,0)}(t),contributors:function(t){return t.reduce((t,e)=>{const n=new Set([...t,...e.contributors]);return Array.from(n)},[])}(t).length,bodiesByType:function(t){const e={PLACE:0,PERSON:0,EVENT:0,NONE:0};return t.forEach(t=>{const n=new f(t).getCategoryBodies();n.length>0?n.forEach(t=>{e[t.type]++}):e.NONE++}),[["Places",e.PLACE],["People",e.PERSON],["Events",e.EVENT],["Uncategorized",e.NONE]]}(t)})}).then(function(t){return e.setState(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){b(t,e,n[e])})}return t}({},t,{computing:!1}))})}},{key:"render",value:function(){return a.a.createElement("div",{className:"panel w4"},a.a.createElement("h2",null,"Summary"),a.a.createElement("div",{className:"inner summary-stats"},a.a.createElement("div",null,a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(v,{value:this.props.annotations.length})),a.a.createElement("td",null,"Annotations")),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(v,{value:this.state.tags})),a.a.createElement("td",null,"Tags")),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(v,{value:this.state.comments})),a.a.createElement("td",null,"Comments")),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(v,{value:this.state.relations})),a.a.createElement("td",null,"Relations")),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(v,{value:this.state.contributors})),a.a.createElement("td",null,"Contributors"))))),a.a.createElement(c.a,{id:"annotations-by-category",width:"140px",height:"140px",legend:!1,colors:g,data:this.state.bodiesByType}),this.state.computing&&a.a.createElement("div",{className:"loading-mask"},a.a.createElement("div",{className:"spinner"}))))}}])&&d(n.prototype,o),s&&d(n,s),e}();n(328);function w(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var x=function(t){var e=Math.max.apply(Math,w(t.editsPerUser.map(function(t){return t[1]}))),n=t.editsPerUser.map(function(t){return a.a.createElement("tr",{key:t[0]},a.a.createElement("td",null,t[0]),a.a.createElement("td",null,a.a.createElement("div",{className:"meter"},a.a.createElement("div",{className:"bar rounded",style:{width:"".concat(100*t[1]/e,"%")}}))),a.a.createElement("td",null,a.a.createElement(p.a,{thousandSeparator:!0,displayType:"text",value:t[1]})," Edits"))});return a.a.createElement("div",{className:"panel w8"},a.a.createElement("h2",null,"Contributors"),a.a.createElement("div",{className:"inner contributors-chart"},a.a.createElement("table",null,a.a.createElement("tbody",null,n))))},O=n(24),k=(n(504),["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]),S=function(t){var e=t.history.map(function(t){return{date:(e=new Date(t[0]),n=e.getDate(),r=e.getMonth(),"".concat(k[r]," ").concat(n)),value:t[1]};var e,n,r});return a.a.createElement("div",{className:"panel w12"},a.a.createElement("h2",null,"Activity over time"),a.a.createElement("div",{className:"inner timeline"},a.a.createElement(O.b,{data:e,width:940,height:180},a.a.createElement(O.c,{strokeDasharray:"3 3"}),a.a.createElement(O.e,{dataKey:"date"}),a.a.createElement(O.f,null),a.a.createElement(O.d,null),a.a.createElement(O.a,{type:"monotone",dataKey:"value",stroke:"#4483c4",fill:"#4483c4"}))))};n(506),n(508);function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function N(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var A=function(t){function e(){var t,n,r,a,o,s,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return r=this,n=!(a=(t=_(e)).call.apply(t,[this].concat(c)))||"object"!==P(a)&&"function"!=typeof a?N(r):a,o=N(n),s="state",i={document:n.props.config.document||"oflmsfz9augu6l",annotations:[],editsPerUser:[],editHistory:[]},s in o?Object.defineProperty(o,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[s]=i,n}var n,o,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(e,r["Component"]),n=e,(o=[{key:"componentDidMount",value:function(){var t=this;l.a.get("/api/document/".concat(this.state.document,"/annotations")).then(function(e){return t.setState({annotations:e.data})}),l.a.get("/api/document/".concat(this.state.document,"/contributions")).then(function(e){var n=e.data.by_user.map(function(t){return[t.username,t.value]}),r=e.data.contribution_history;t.setState({editsPerUser:n,editHistory:r})})}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,{annotations:this.state.annotations}),a.a.createElement(x,{editsPerUser:this.state.editsPerUser}),a.a.createElement(S,{history:this.state.editHistory}))}}])&&z(n.prototype,o),s&&z(n,s),e}();n.d(e,"init",function(){return C});var C=function(t){s.a.render(a.a.createElement(A,{config:t}),document.getElementById(t.id))}}})});