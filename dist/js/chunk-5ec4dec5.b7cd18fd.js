(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ec4dec5"],{"2fa3":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n="";n="https://math4school.herokuapp.com";var r=n},"44bd":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"route_container"})},r=[],c=(a("99af"),a("c4b0")),o=a.n(c),s=a("2fa3"),u={name:"P",methods:{redirect:function(){var t=this,e=this.$route.params.id;this.axios.get(s["a"]+"/api/v1/post/"+e).then((function(e){t.$router.push("/thread/".concat(e.data.Thread.slug,"/").concat(e.data.Thread.id,"/").concat(e.data.postNumber))}))["catch"](o()(this.$store))}},beforeRouteEnter:function(t,e,a){a((function(t){return t.redirect()}))}},i=u,d=a("2877"),h=Object(d["a"])(i,n,r,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-5ec4dec5.b7cd18fd.js.map