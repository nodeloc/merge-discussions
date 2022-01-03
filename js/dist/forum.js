module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=23)}([function(t,e){t.exports=flarum.core.compat["forum/app"]},,function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e,r){t.exports=r(22)},function(t,e){t.exports=flarum.core.compat["common/helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e){t.exports=flarum.core.compat["forum/utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["forum/components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},function(t,e){t.exports=flarum.core.compat["forum/components/PostStream"]},function(t,e){t.exports=flarum.core.compat["forum/states/PostStreamState"]},function(t,e){t.exports=flarum.core.compat["forum/states/GlobalSearchState"]},function(t,e){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,e){t.exports=flarum.core.compat["common/utils/classList"]},function(t,e){t.exports=flarum.core.compat["forum/components/Search"]},function(t,e){t.exports=flarum.core.compat["common/utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["forum/components/EventPost"]},function(t,e){t.exports=flarum.core.compat["common/helpers/punctuateSeries"]},function(t,e){t.exports=flarum.core.compat["forum/components/Notification"]},function(t,e){t.exports=flarum.core.compat["forum/components/NotificationGrid"]},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function a(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),s=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var a=w(s,r);if(a){if(a===f)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,s),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f={};function l(){}function m(){}function d(){}var h={};a(h,o,(function(){return this}));var p=Object.getPrototypeOf,g=p&&p(p(N([])));g&&g!==e&&r.call(g,o)&&(h=g);var v=d.prototype=l.prototype=Object.create(h);function y(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,i){function s(){return new e((function(n,s){!function n(o,i,s,a){var c=u(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(l).then((function(t){f.value=t,s(f)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}(o,i,n,s)}))}return n=n?n.then(s,s):s()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=d,a(v,"constructor",d),a(d,"constructor",m),m.displayName=a(d,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a(t,s,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(b.prototype),a(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var s=new b(c(e,r,n,o),i);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},y(v),a(v,s,"Generator"),a(v,o,(function(){return this})),a(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(3),s=r(6),a=r.n(s),c=r(2),u=r.n(c),f=r(7),l=r.n(f);function d(t,e,r,n,o,i,s){try{var a=t[i](s),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){d(i,n,o,s,a,"next",t)}function a(t){d(i,n,o,s,a,"throw",t)}s(void 0)}))}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,p(t,e)}var v=r(4),y=r.n(v),b=r(8),w=r.n(b),x=r(9),_=r.n(x),L=r(10),N=r.n(L),P=r(11),E=r.n(P),S=r(12),O=r.n(S),j=r(13),k=r.n(j),M=r(14),D=r.n(M),F=r(15),T=r.n(F),G=r(16),R=r.n(G),B=r(17),C=r.n(B),I=r(5),q=r.n(I),A=function(){function t(t,e){this.results=new Map,this.onSelect=t,this.ignore=e}var e=t.prototype;return e.search=function(t){var e=this;t=t.toLowerCase();var r=o.a.forum.attribute("fof-merge-discussions.search_limit")||4;this.results.set(t,[]);var n={filter:{q:t},page:{limit:r}},i=Number(t);return Number.isNaN(i)||i===this.ignore?o.a.store.find("discussions",n).then((function(r){e.results.set(t,r.filter((function(t){return t.id()!==e.ignore})))})):o.a.store.find("discussions",i).then((function(r){e.results.set(t,[r])})).catch((function(){return[]}))},e.view=function(t){var e=this;return t=t.toLowerCase(),[(this.results.get(t)||[]).map((function(r){return m("li",{className:"DiscussionSearchResult","data-index":"discussions"+r.id()},m("a",{onclick:function(){return e.onSelect(r)}},m("div",{className:"DiscussionSearchResult-title"},m("i",null,q()(r.id(),t))," ~ ",q()(r.title(),t))))}))]},t}(),U=function(t){function e(){return t.apply(this,arguments)||this}g(e,t);var r=e.prototype;return r.view=function(){this.hasFocus=!0;var e=t.prototype.view.call(this);return e.attrs.className="MergeDiscussions-Search "+(this.state.getValue()&&"open")+" "+e.attrs.className.replace(/(focused|open)/g,""),e},r.sourceItems=function(){var t=new C.a;return t.add("discussions",new A(this.attrs.onSelect,this.attrs.ignore)),t},e}(R.a),H=function(t){function e(){return t.apply(this,arguments)||this}g(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.discussion=this.attrs.discussion,this.type=D()("target"),this.merging=[],this.results=[],this.preview=null,this.loadingPreview=!1,this.search=new k.a},r.title=function(){return o.a.translator.trans("fof-merge-discussions.forum.modal.title")},r.className=function(){return"FoFMergeDiscussionsModal Modal--large"},r.content=function(){var t=this;return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},["target","from"].map((function(e){return m("div",null,m("input",{type:"radio",id:"type_"+e,checked:t.type()===e,onclick:t.changeType.bind(t,e)})," ",m("label",{htmlFor:"type_"+e},o.a.translator.trans("fof-merge-discussions.forum.modal.type_"+e+"_label")))}))),m("p",{className:"help"},o.a.translator.trans("fof-merge-discussions.forum.modal.type_"+this.type()+"_help_text",{title:this.discussion.title()})),m("div",{className:T()("FormGroup",this.disabled()&&"hidden")},m(U,{state:this.search,onSelect:this.select.bind(this),ignore:this.discussion.id()})),m("div",{className:"Form-group MergeDiscussions-Discussions"},m("ul",null,this.merging.map((function(e){return m("li",null,m("i",{className:"fas fa-trash DeleteEntry-Button",onclick:function(){return t.remove(e)}})," ",m("a",{href:o.a.forum.attribute("baseUrl")+"/d/"+e.id(),target:"_blank"},m("i",null,e.id())," ~ ",e.title()))})))),m("div",{className:"Form-group MergeDiscussions-Preview"},m(u.a,{className:"Button Button--danger",onclick:this.loadPreview.bind(this),loading:this.loadingPreview,disabled:!this.discussion||!this.merging.length},o.a.translator.trans("fof-merge-discussions.forum.modal.load_preview_button")),this.preview&&m("div",{className:"MergeDiscussions-PostStream"},m("div",{className:"Hero"},m("h2",null,"target"===this.type()?this.discussion.title():this.merging[0].title())),m(E.a,{stream:this.preview,discussion:this.preview.discussion,onPositionChange:function(){}}))),m("div",{className:"Form-group"},m(u.a,{className:"Button Button--primary Button--block",type:"submit",onclick:this.submit.bind(this),loading:this.loading,disabled:!this.discussion||!this.merging.length},o.a.translator.trans("fof-merge-discussions.forum.modal.submit_button")))))},r.disabled=function(){return"from"===this.type()&&0!==this.merging.length},r.select=function(t){t&&t.id()===this.discussion.id()||this.merging.includes(t)||this.disabled()||(this.merging.push(t),delete this.preview)},r.remove=function(t){delete this.preview,this.merging.splice(this.merging.indexOf(this.merging.filter((function(e){return e.id()===t.id()}))[0]),1)},r.changeType=function(t){this.type(t),this.merging.length>1&&(this.merging=[])},r.loadPreview=function(){var t=this;return this.loadingPreview=!0,o.a.request(this.getRequestData("GET")).then((function(e){var r=1;e.included&&e.included.map(o.a.store.pushObject.bind(o.a.store)),e.data.relationships.posts.data.map((function(t){return o.a.store.getById("posts",t.id)})).sort((function(t,e){return t.createdAt()-e.createdAt()})).forEach((function(t,n){t.number(r++),e.data.relationships.posts.data[n]={type:"posts",id:t.id()}}));var n=o.a.store.createRecord(e.data.type,e.data);n.payload=e,t.loadingPreview=!1;var i=n.posts();t.preview=new O.a(n,i),m.redraw()})).catch((function(){return t.loadingPreview=!1}))},r.submit=function(t){var e=this;return t.preventDefault(),this.loading=!0,o.a.request(this.getRequestData()).then(h(y.a.mark((function t(){var r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r="target"===e.type()?e.discussion:e.merging[0],!o.a.current.matches(w.a)){t.next=12;break}if("target"!==e.type()){t.next=9;break}return t.next=5,o.a.store.find("discussions",r.id());case 5:return t.next=7,o.a.current.get("stream").update();case 7:t.next=10;break;case 9:m.route.set(o.a.route.discussion(r));case 10:t.next=15;break;case 12:if(!o.a.current.matches(_.a)){t.next=15;break}return t.next=15,o.a.store.find("discussions",r.id());case 15:"target"===e.type()?e.merging.forEach((function(t){return o.a.discussions.removeDiscussion(t)})):o.a.discussions.removeDiscussion(e.discussion),o.a.modal.close();case 17:case"end":return t.stop()}}),t)})))).catch(console.error).then(this.loaded.bind(this))},r.getRequestData=function(t){void 0===t&&(t="POST");var e="target"===this.type(),r=e?this.discussion.apiEndpoint():this.merging[0].apiEndpoint(),n=e?this.merging.map((function(t){return t.id()})):this.discussion.id();return{method:t,url:""+o.a.forum.attribute("apiUrl")+r+"/merge",params:{ids:n},body:{ids:n},errorHandler:this.onerror.bind(this)}},e}(N.a),Y=r(18),z=r.n(Y),K=r(19),V=r.n(K),J=function(t){function e(){return t.apply(this,arguments)||this}g(e,t);var r=e.prototype;return r.icon=function(){return"fas fa-code-branch fa-flip-vertical"},r.descriptionKey=function(){return"fof-merge-discussions.forum.post.merged"},r.descriptionData=function(){var t=this.attrs.post.content();return Array.isArray(t.titles)&&(t.titles=V()(t.titles).join("")),t},e}(z.a),Q=r(20),W=function(t){function e(){return t.apply(this,arguments)||this}g(e,t);var r=e.prototype;return r.icon=function(){return"fas fa-code-branch fa-flip-vertical"},r.href=function(){var t=this.attrs.notification.subject();return o.a.route.discussion(t)},r.content=function(){var t=this.attrs.notification,e=t.fromUser(),r=t.content().merged_title;return o.a.translator.trans("fof-merge-discussions.forum.notification.discussion_merged",{user:e,oldTitle:r})},e}(r.n(Q).a),X=r(21),Z=r.n(X),$=function(){o.a.notificationComponents.discussionMerged=W,Object(i.extend)(Z.a.prototype,"notificationTypes",(function(t){t.add("discussionMerged",{name:"discussionMerged",icon:"fas fa-code-branch fa-flip-vertical",label:o.a.translator.trans("fof-merge-discussions.forum.notification.preferences.discussion_merged")})}))};o.a.initializers.add("fof/merge-discussions",(function(){o.a.store.models.discussions.prototype.canMerge=a.a.attribute("canMerge"),o.a.postComponents.discussionMerged=J,Object(i.extend)(l.a,"moderationControls",(function(t,e){e.canMerge()&&t.add("fof-merge",u.a.component({icon:"fas fa-code-branch fa-flip-vertical",onclick:function(){return o.a.modal.show(H,{discussion:e})}},o.a.translator.trans("fof-merge-discussions.forum.discussion.merge")))})),$()}))}]);
//# sourceMappingURL=forum.js.map