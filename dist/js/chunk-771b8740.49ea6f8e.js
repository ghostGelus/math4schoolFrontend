(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-771b8740"],{"0a6c":function(t,e,n){},"0dc4":function(t,e,n){},2341:function(t,e,n){"use strict";var o=n("0a6c"),s=n.n(o);s.a},"39d7":function(t,e,n){},5016:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("menu-tooltip",{staticClass:"select_button",class:{"select_button--touch":!t.touchDisabled},model:{value:t.menuOpen,callback:function(e){t.menuOpen=e},expression:"menuOpen"}},[n("template",{slot:"button"},[t.options.length?n("div",{staticClass:"button button--thin_text",class:{"select_button__button--selected":t.menuOpen},on:{click:function(e){t.menuOpen=!0}}},[t._v(" "+t._s(t.options[t.selectedIndex].name)+" "),n("font-awesome-icon",{staticClass:"button__icon select_button__icon",attrs:{icon:["fa","chevron-down"],"fixed-width":""}})],1):n("div",{staticClass:"button"},[t._v(" No options ")])]),n("template",{slot:"menu"},t._l(t.options,(function(e,o){return n("div",{key:"select-button-option-"+e.name+o,staticClass:"select_button__option",class:{"select_button__option--disabled":e.disabled,"select_button__option--selected":o===t.selectedIndex&&!e.disabled},on:{click:function(n){return t.select(o,e.disabled)}}},[t._v(" "+t._s(e.name)+" ")])})),0)],2)},s=[],i=(n("4160"),n("159b"),n("6fab")),a={name:"SelectButton",props:["options","value","name","touch-disabled"],components:{MenuTooltip:i["a"]},methods:{select:function(t,e){e||(this.selectedIndex=t,this.menuOpen=!1,this.$emit("input",this.options[t].value))},getIndexFromValue:function(){var t=0,e=this;return null!==this.value&&this.options.forEach((function(n,o){n.value===e.value&&(t=o)})),t}},data:function(){return{selectedIndex:this.getIndexFromValue(),menuOpen:!1}},watch:{value:function(){this.selectedIndex=this.getIndexFromValue()}}},r=a,c=(n("2341"),n("2877")),l=Object(c["a"])(r,o,s,!1,null,"5c300c04",null);e["a"]=l.exports},"5fc9":function(t,e,n){},"6dfc":function(t,e,n){"use strict";var o=n("5fc9"),s=n.n(o);s.a},"6e0b":function(t,e,n){"use strict";var o=n("39d7"),s=n.n(o);s.a},"6fab":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu_tooltip",class:{"menu_tooltip--touch":!t.touchDisabled}},[n("div",{staticClass:"menu_tooltip__overlay",class:{"menu_tooltip__overlay--show":t.value},on:{click:function(e){return t.$emit("input",!1)}}}),t._t("button"),n("div",{staticClass:"menu_tooltip__menu",class:{"menu_tooltip__menu--show":t.value},style:{top:t.top,width:t.width}},[n("div",{staticClass:"menu_tooltip__menu__inner"},[t._t("menu")],2)])],2)},s=[],i={name:"MenuTooltip",props:["value","top","width","touch-disabled"]},a=i,r=(n("6e0b"),n("2877")),c=Object(r["a"])(a,o,s,!1,null,"5bd61e2c",null);e["a"]=c.exports},"7db0":function(t,e,n){"use strict";var o=n("23e7"),s=n("b727").find,i=n("44d2"),a=n("ae40"),r="find",c=!0,l=a(r);r in[]&&Array(1)[r]((function(){c=!1})),o({target:"Array",proto:!0,forced:c||!l},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i(r)},"84a2":function(t,e,n){(function(e){var n="Expected a function",o=NaN,s="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,h=u||d||Function("return this")(),f=Object.prototype,p=f.toString,_=Math.max,m=Math.min,v=function(){return h.Date.now()};function g(t,e,o){var s,i,a,r,c,l,u=0,d=!1,h=!1,f=!0;if("function"!=typeof t)throw new TypeError(n);function p(e){var n=s,o=i;return s=i=void 0,u=e,r=t.apply(o,n),r}function g(t){return u=t,c=setTimeout(w,e),d?p(t):r}function b(t){var n=t-l,o=t-u,s=e-n;return h?m(s,a-o):s}function C(t){var n=t-l,o=t-u;return void 0===l||n>=e||n<0||h&&o>=a}function w(){var t=v();if(C(t))return x(t);c=setTimeout(w,b(t))}function x(t){return c=void 0,f&&s?p(t):(s=i=void 0,r)}function $(){void 0!==c&&clearTimeout(c),u=0,s=l=i=c=void 0}function O(){return void 0===c?r:x(v())}function k(){var t=v(),n=C(t);if(s=arguments,i=this,l=t,n){if(void 0===c)return g(l);if(h)return c=setTimeout(w,e),p(l)}return void 0===c&&(c=setTimeout(w,e)),r}return e=T(e)||0,y(o)&&(d=!!o.leading,h="maxWait"in o,a=h?_(T(o.maxWait)||0,e):a,f="trailing"in o?!!o.trailing:f),k.cancel=$,k.flush=O,k}function b(t,e,o){var s=!0,i=!0;if("function"!=typeof t)throw new TypeError(n);return y(o)&&(s="leading"in o?!!o.leading:s,i="trailing"in o?!!o.trailing:i),g(t,e,{leading:s,maxWait:e,trailing:i})}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function C(t){return!!t&&"object"==typeof t}function w(t){return"symbol"==typeof t||C(t)&&p.call(t)==s}function T(t){if("number"==typeof t)return t;if(w(t))return o;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=r.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):a.test(t)?o:+t}t.exports=b}).call(this,n("c8ba"))},8674:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroll_load"},[t._t("default")],2)},s=[],i=n("84a2"),a=n.n(i),r={name:"ScrollLoad",props:["loading","query-selector","padding-bottom","padding-top"],computed:{element:function(){return this.querySelector?document.querySelector(this.querySelector):null}},methods:{onScroll:a()((function(){var t,e,n=this.paddingBottom||300,o=this.paddingTop||150;this.loading||(this.element?(t=Math.floor(this.element.scrollTop+this.element.getBoundingClientRect().height+n-this.element.scrollHeight),e=o-this.element.scrollTop):(t=window.innerHeight+window.pageYOffset+n-document.body.scrollHeight,e=o-document.body.scrollTop),t>0?this.$emit("loadNext"):e>0&&this.$emit("loadPrevious"))}))},mounted:function(){(this.element||window).addEventListener("scroll",this.onScroll)},destroyed:function(){(this.element||window).removeEventListener("scroll",this.onScroll)}},c=r,l=n("2877"),u=Object(l["a"])(c,o,s,!1,null,null,null);e["a"]=u.exports},"9c38":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"route_container"},[t.$store.state.meta.showDescription&&t.$store.state.meta.description?n("div",{staticClass:"forum_description"},[t._v(" "+t._s(t.$store.state.meta.description)+" ")]):t._e(),n("div",{staticClass:"thread_sorting"},[n("select-options",{staticClass:"thread_sorting__filter",attrs:{options:t.filterOptions},model:{value:t.selectedFilterOption,callback:function(e){t.selectedFilterOption=e},expression:"selectedFilterOption"}}),n("div",{staticClass:"thread_sorting__add_and_categories"},[n("select-button",{attrs:{options:t.categories},model:{value:t.selectedCategory,callback:function(e){t.selectedCategory=e},expression:"selectedCategory"}}),n("router-link",{staticClass:"button button--blue",attrs:{to:"/thread/new"}},[t._v(" "+t._s(t.postNewThreadText)+" ")])],1)],1),n("div",{staticClass:"threads_main"},[n("div",{staticClass:"threads_main__side_bar"},[n("div",{staticClass:"threads_main__side_bar__title"},[t._v(" categories ")]),t._l(t.categories,(function(e,o){return n("router-link",{key:"category-link-"+o,staticClass:"threads_main__side_bar__menu_item",class:{"threads_main__side_bar__menu_item--selected":e.value===t.selectedCategory},attrs:{to:"/category/"+e.value}},[n("span",{staticClass:"threads_main__side_bar__menu_item__border",style:{"background-color":e.color}}),n("span",{staticClass:"threads_main__side_bar__menu_item__text",style:{color:e.value===t.selectedCategory?e.color:void 0}},[t._v(t._s(e.name))])])}))],2),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.threads?t.filteredThreads.length?n("scroll-load",{key:"threads",staticClass:"threads_main__threads",attrs:{loading:t.loading},on:{loadNext:t.getThreads}},[t.loadingNewer?t._l(t.newThreads,(function(t){return n("thread-display-placeholder",{key:"placeholder-upper-"+t})})):t._e(),t._l(t.filteredThreads,(function(t){return n("thread-display",{key:"thread-display-"+t.id,attrs:{thread:t}})})),t.loading?t._l(t.nextThreadsCount,(function(t){return n("thread-display-placeholder",{key:"placeholder-lower-"+t})})):t._e()],2):n("div",{key:"no threads",staticClass:"threads_main__threads overlay_message"},[n("font-awesome-icon",{attrs:{icon:["fa","exclamation-circle"]}}),t._v(" No threads or posts. ")],1):n("div",{key:"loading",staticClass:"threads_main__threads"},[n("thread-display-placeholder")],1)],1)],1)])},s=[],i=(n("4de4"),n("7db0"),n("4160"),n("d81d"),n("4e82"),n("0d03"),n("b0c0"),n("ac1f"),n("1276"),n("159b"),n("2909")),a=n("8674"),r=n("ce34"),c=n("9870"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select_options"},t._l(t.options,(function(e,o){return n("button",{key:"select-option-"+o,staticClass:"button button--thin_text",class:{"button--lightblue":e.value===t.value},on:{click:function(n){return t.select(e.value)}}},[t._v(" "+t._s(e.name)+" ")])})),0)},u=[],d={name:"SelectOptions",props:["value","options"],methods:{select:function(t){this.$emit("input",t)}}},h=d,f=(n("6dfc"),n("2877")),p=Object(f["a"])(h,l,u,!1,null,"4f643ceb",null),_=p.exports,m=n("5016"),v=n("c4b0"),g=n.n(v),b=n("bd28"),y={name:"index",components:{ScrollLoad:a["a"],ThreadDisplay:r["a"],ThreadDisplayPlaceholder:c["a"],SelectOptions:_,SelectButton:m["a"]},data:function(){return{filterOptions:[{name:"New",value:"NEW"},{name:"Most active",value:"MOST_ACTIVE"},{name:"No replies",value:"NO_REPLIES"}],selectedFilterOption:"NEW",nextURL:"",nextThreadsCount:0,loading:!1,threads:null,newThreads:0,loadingNewer:!1}},computed:{filteredThreads:function(){var t=this,e={},n=this.selectedFilterOption;return this.$store.state.meta.categories.forEach((function(t){e[t.value]=t.name})),this.threads.filter((function(e){return e.Category.value===t.selectedCategory||"ALL"===t.selectedCategory})).map((function(t){var n=Object.assign({},t);return n.category=e[t.Category.value],n})).sort((function(t,e){if("NEW"===n){var o=new Date(t.Posts[0].createdAt),s=new Date(e.Posts[0].createdAt);return s-o}if("MOST_ACTIVE"===n)return e.postsCount-t.postsCount})).filter((function(t){return!("NO_REPLIES"===n&&t.postsCount-1)}))},categories:function(){return this.$store.getters.alphabetizedCategories},selectedCategory:{set:function(t){var e=this.categories.find((function(e){return e.value===t}));this.$store.dispatch("setTitle",e?e.name:""),this.$store.commit("setSelectedCategory",t)},get:function(){return this.$store.state.category.selectedCategory}},postNewThreadText:function(){return this.$store.state.username?"Post new thread":"Login to post"}},methods:{navigateToThread:function(t,e){this.$router.push("/thread/"+t+"/"+e)},getThreads:function(t){var e=this;if(null!==this.nextURL||t){var n="/api/v1/category/"+this.selectedCategory;t||(n=this.nextURL||n),this.loading=!0,this.axios.get(n).then((function(n){var o;(e.loading=!1,t)?e.threads=n.data.Threads:(o=e.threads).push.apply(o,Object(i["a"])(n.data.Threads));e.nextURL=n.data.meta.nextURL,e.nextThreadsCount=n.data.meta.nextThreadsCount}))["catch"]((function(t){e.loading=!1,g()(e.$store)(t)}))}},getNewerThreads:function(){var t=this;this.loadingNewer=!0,this.axios.get("/api/v1/category/"+this.selectedCategory+"?limit="+this.newThreads).then((function(e){var n;t.loadingNewer=!1,t.newThreads=0,(n=t.threads).unshift.apply(n,Object(i["a"])(e.data.Threads))}))["catch"]((function(e){t.loadingNewer=!1,g()(t.$store)(e)}))}},watch:{selectedCategory:function(t){this.$router.push("/category/"+t.toLowerCase())},$route:function(){this.selectedCategory=this.$route.path.split("/")[2].toUpperCase(),this.newThreads=0,this.getThreads(!0)}},created:function(){var t=this;this.selectedCategory=this.$route.path.split("/")[2].toUpperCase(),this.getThreads(!0),this.$socket.emit("join","index"),this.$socket.on("new thread",(function(e){e.value!==t.selectedCategory&&"ALL"!=t.selectedCategory||t.newThreads++})),this.$route.query.token&&(this.$store.commit("setToken",this.$route.query.token),this.$store.commit("setAccountTabs",0),this.$store.commit("setAccountModalState",!0)),Object(b["a"])("index")},destroyed:function(){this.$socket.emit("leave","index"),this.$socket.off("new thread")}},C=y,w=(n("c813"),Object(f["a"])(C,o,s,!1,null,"158be30a",null));e["default"]=w.exports},c813:function(t,e,n){"use strict";var o=n("0dc4"),s=n.n(o);s.a}}]);
//# sourceMappingURL=chunk-771b8740.49ea6f8e.js.map