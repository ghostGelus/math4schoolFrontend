(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ecc89c8"],{"225f":function(t,n,o){"use strict";var a=o("63a4"),i=o.n(a);i.a},"29c3":function(t,n,o){},"2fa3":function(t,n,o){"use strict";o.d(n,"a",(function(){return i}));var a="";a="https://math4school.herokuapp.com";var i=a},"471f":function(t,n,o){"use strict";var a=o("29c3"),i=o.n(a);i.a},4795:function(t,n,o){var a=o("23e7"),i=o("da84"),e=o("342f"),s=[].slice,r=/MSIE .\./.test(e),c=function(t){return function(n,o){var a=arguments.length>2,i=a?s.call(arguments,2):void 0;return t(a?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,o)}};a({global:!0,bind:!0,forced:r},{setTimeout:c(i.setTimeout),setInterval:c(i.setInterval)})},"4e07":function(t,n,o){},5204:function(t,n,o){},5326:function(t,n,o){},"535e":function(t,n,o){"use strict";var a=o("7d62"),i=o.n(a);i.a},6307:function(t,n,o){"use strict";var a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"modal_window__overlay",class:{"modal_window--show":t.value},on:{click:function(n){return n.target!==n.currentTarget?null:t.closeModal(n)}}},[o("div",{staticClass:"modal_window",class:{"modal_window--show":t.value},style:{width:t.width||"20rem"}},[o("div",{staticClass:"modal_window__loading_overlay",class:{"modal_window__loading_overlay--show":t.loading}},[o("loading-icon")],1),t.closeButton?o("span",{staticClass:"modal_window__close",on:{click:t.closeModal}},[o("font-awesome-icon",{attrs:{icon:["fa","times"]}})],1):t._e(),o("div",{staticClass:"modal_window__main",class:{"modal_window__main--no_padding":t.noPadding}},[t._t("main")],2),t.hideFooter?t._e():o("div",{staticClass:"modal_window__footer"},[t._t("footer")],2)])])},i=[],e=o("c5af"),s={name:"ModalWindow",props:["value","width","close-button","hide-footer","no-padding","loading"],components:{LoadingIcon:e["a"]},methods:{closeModal:function(){this.$emit("input",!1)}}},r=s,c=(o("f83a"),o("2877")),u=Object(c["a"])(r,a,i,!1,null,"32ecccd0",null);n["a"]=u.exports},"63a4":function(t,n,o){},"7d62":function(t,n,o){},"80e3":function(t,n,o){"use strict";var a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"fancy_input",style:{width:t.width||"auto"}},[o("div",{staticStyle:{position:"relative",display:"inline-block"}},[o("div",{staticClass:"fancy_input__placeholder",class:{"fancy_input__placeholder--active":t.active||t.value.length,"fancy_input__placeholder--large":t.large}},[t._v(" "+t._s(t.placeholder)+" ")]),o("input",{staticClass:"fancy_input__input input",class:{"fancy_input__input--large":t.large,"fancy_input__input--error":t.error},attrs:{type:t.type||"text"},domProps:{value:t.value},on:{input:function(n){return t.updateValue(n.target.value)},focus:t.addActive,blur:t.removeActive}})]),o("error-tooltip",{attrs:{error:t.error}})],1)},i=[],e=o("e145"),s={name:"FancyInput",props:["value","placeholder","width","type","error","large"],components:{ErrorTooltip:e["a"]},data:function(){return{active:!1}},methods:{updateValue:function(t){this.$emit("input",t)},addActive:function(){this.active=!0},removeActive:function(){this.active=!1}}},r=s,c=(o("9946"),o("2877")),u=Object(c["a"])(r,a,i,!1,null,"e8a0c810",null);n["a"]=u.exports},"89db":function(t,n,o){"use strict";var a=o("5204"),i=o.n(a);i.a},"8df7":function(t,n,o){"use strict";var a=o("4e07"),i=o.n(a);i.a},"8e8d":function(t,n,o){"use strict";var a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("button",{staticClass:"button loading_button",class:{"loading_button--loading":t.loading},on:{click:function(n){return t.event("click")},keydown:function(n){return t.event("keydown")}}},[o("loading-icon",{staticClass:"loading_button__icon",attrs:{dark:t.dark}}),o("div",{staticClass:"loading_button__slot"},[t._t("default")],2)],1)},i=[],e=o("c5af"),s={name:"LoadingButton",props:["loading","dark"],components:{LoadingIcon:e["a"]},methods:{event:function(t){this.loading||this.$emit(t)}}},r=s,c=(o("8df7"),o("2877")),u=Object(c["a"])(r,a,i,!1,null,null,null);n["a"]=u.exports},9832:function(t,n,o){"use strict";var a=o("5326"),i=o.n(a);i.a},9946:function(t,n,o){"use strict";var a=o("bcc7"),i=o.n(a);i.a},b9dc:function(t,n,o){},bcc7:function(t,n,o){},c5af:function(t,n,o){"use strict";var a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"loading_icon",class:{"loading_icon--dark":t.dark}},[o("span"),o("span"),o("span")])},i=[],e={name:"LoadingIcon",props:["dark"]},s=e,r=(o("9832"),o("2877")),c=Object(r["a"])(s,a,i,!1,null,null,null);n["a"]=c.exports},e145:function(t,n,o){"use strict";var a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"error_tooltip",class:{"error_tooltip--show":t.error}},[t._v(" "+t._s(t.delayed_error)+" ")])},i=[],e=(o("4795"),{name:"ErrorTooltip",props:["error"],data:function(){return{delayed_error:this.error}},watch:{error:function(t){var n=this;t?this.delayed_error=t:setTimeout((function(){n.delayed_error=""}),205)}}}),s=e,r=(o("225f"),o("2877")),c=Object(r["a"])(s,a,i,!1,null,"6281f96c",null);n["a"]=c.exports},f4b8:function(t,n,o){"use strict";o.r(n);var a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"app"}},[o("modal-window",{staticStyle:{"z-index":"100"},attrs:{width:"25rem","no-padding":!0},model:{value:t.showAjaxErrorsModal,callback:function(n){t.showAjaxErrorsModal=n},expression:"showAjaxErrorsModal"}},[o("div",{attrs:{slot:"main"},slot:"main"},t._l(this.$store.state.ajaxErrors,(function(n){return o("p",{key:n,staticStyle:{margin:"1rem"}},[t._v(t._s(n))])})),0),o("button",{ref:"ajaxErrorsModalButton",staticClass:"button button--modal",attrs:{slot:"footer"},on:{click:function(n){t.showAjaxErrorsModal=!1}},slot:"footer"},[t._v(" OK ")])]),o("modal-window",{attrs:{"no-padding":!0,"hide-footer":!0},on:{input:t.closeAccountModal},model:{value:t.showAccountModal,callback:function(n){t.showAccountModal=n},expression:"showAccountModal"}},[o("tab-view",{attrs:{slot:"main",tabs:["Авторизация"],padding:"true"},slot:"main",model:{value:t.showAccountTab,callback:function(n){t.showAccountTab=n},expression:"showAccountTab"}},[o("template",{slot:"Авторизация"},[o("form",{on:{submit:function(n){return n.preventDefault(),t.doLogin(n)}}},[o("fancy-input",{attrs:{error:t.login.errors.username,placeholder:"Логин",width:"100%"},model:{value:t.login.username,callback:function(n){t.$set(t.login,"username",n)},expression:"login.username"}}),o("fancy-input",{attrs:{error:t.login.errors.hash,placeholder:"Пароль",type:"password",width:"100%"},model:{value:t.login.password,callback:function(n){t.$set(t.login,"password",n)},expression:"login.password"}}),o("div",{staticStyle:{"margin-top":"0.5rem"}},[o("loading-button",{staticClass:"button button--green button--margin",attrs:{loading:t.login.loading},on:{click:t.doLogin}},[o("font-awesome-icon",{staticStyle:{"margin-right":"0.25rem"},attrs:{icon:["fa","unlock-alt"]}}),t._v(" Войти ")],1),o("div",{staticClass:"button button--borderless",on:{click:t.closeAccountModal}},[t._v(" Отмена ")])],1)],1)])],2)],1),o("header",{staticClass:"header"},[o("div",{staticClass:"header__group"},[o("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v(t._s(t.name))])],1),o("div",{staticClass:"header__group",class:{"header__group--show":t.showMenu}},[t.$store.state.username?[o("notification-button"),t.$store.state.admin?o("router-link",{staticClass:"button button--thin_text",attrs:{to:"/admin"}},[t._v(" Панель администратора ")]):t._e(),o("router-link",{staticClass:"button button--thin_text",attrs:{to:"/settings"}},[t._v(" Настройки пользователя ")]),o("loading-button",{staticClass:"button--thin_text",attrs:{loading:t.loadingLogout},on:{click:t.logout}},[t._v(" Выход ")])]:[o("div",{staticClass:"button button--thin_text",on:{click:function(n){return t.showAccountModalTab(0)}}},[t._v(" Войти ")])]],2),o("div",{staticClass:"header__overlay",class:{"header__overlay--show":t.showMenu},on:{click:t.toggleMenu}}),o("span",{staticClass:"header__menu_button",on:{click:t.toggleMenu}},[o("font-awesome-icon",{attrs:{icon:["fa","bars"]}})],1)]),o("not-found",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.show404Page,expression:"$store.state.show404Page"}]}),o("transition",{attrs:{name:"fade"}},[o("router-view",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.show404Page,expression:"!$store.state.show404Page"}]})],1)],1)},i=[],e=(o("b0c0"),o("498a"),o("6307")),s=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"tab_view"},[o("div",{staticClass:"tab_view__tabs",class:{"tab_view__tabs--small_tabs":t.smallTabs,"tab_view__tabs--transparent":t.transparent}},t._l(t.tabs,(function(n,a){return o("div",{key:"tab-"+a,staticClass:"tab_view__tab",class:{"tab_view__tab--selected":t.tabIndex===a,"tab_view__tab--selected_small_tabs":t.tabIndex===a&&t.smallTabs,"tab_view__tab--selected_transparent":t.tabIndex===a&&t.transparent,"tab_view__tab--small_tabs":t.smallTabs,"tab_view__tab--transparent":t.transparent},on:{click:function(n){return t.changeTab(a)}}},[t._v(" "+t._s(n)+" ")])})),0),o("div",{staticClass:"tab_view__content",class:{"tab_view__content--padding":t.padding,"tab_view__content--transparent":t.transparent}},[t._t(t.currentTab)],2)])},r=[],c={name:"TabView",props:["tabs","value","padding","small-tabs","transparent"],methods:{changeTab:function(t){this.$emit("input",t)}},computed:{tabIndex:function(){return this.value},currentTab:function(){return this.tabs[this.tabIndex]}}},u=c,l=(o("535e"),o("2877")),d=Object(l["a"])(u,s,r,!1,null,"f4728206",null),_=d.exports,h=o("80e3"),f=o("8e8d"),m=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"notification_button"},[o("div",{staticClass:"notification_button__overlay",class:{"notification_button__overlay--show":t.showMenu},on:{click:function(n){return t.setShowMenu(!1)}}}),o("button",{staticClass:"button notification_button__button",class:{"notification_button__button--shake":t.shake},on:{click:function(n){return t.setShowMenu(!t.showMenu)}}},[o("font-awesome-icon",{staticClass:"notification_button__button__icon",attrs:{icon:["far","bell"]}}),o("span",{staticClass:"notification_button__button__count",class:{"notification_button__button__count--none":!t.unreadCount,"notification_button__button__count--two_figure":t.unreadCount>9,"notification_button__button__count--three_figure":t.unreadCount>99}},[t._v(t._s(t.unreadCountText))])],1),o("div",{staticClass:"notification_button__menu_group",class:{"notification_button__menu_group--show":t.showMenu}},[o("div",{staticClass:"notification_button__triangle"}),o("div",{staticClass:"notification_button__menu"},[t._l(t.postNotifications,(function(n,a){return o("div",{key:"notification-"+a,staticClass:"notification_button__menu__item",class:{"notification_button__menu__item--uninteracted":!n.interacted,"notification_button__menu__item--no_border":a>2},on:{click:function(o){return t.click(n)}}},[o("div",{staticClass:"notification_button__menu__item__header"},["mention"===n.type?o("span",[t._v("New mention")]):"reply"===n.type?o("span",[t._v("Reply to your post")]):t._e(),o("span",[o("span",{staticClass:"notification_button__menu__item__header__date"},[t._v(t._s(t._f("formatDate")(n.createdAt)))]),o("span",{staticClass:"notification_button__menu__item__header__close",on:{click:function(o){return o.stopPropagation(),t.deleteNotification(n.id)}}},[t._v("×")])])]),o("div",[t.isYouOrDeleted(n.PostNotification.User)?o("span",[t._v(" "+t._s(n.PostNotification.User?"You":"[deleted]")+" ")]):o("span",{staticClass:"notification_button__menu__item__link"},[t._v(" "+t._s(n.PostNotification.User.username)+" ")]),t._v(' wrote "'+t._s(t._f("truncate")(t._f("stripTags")(n.PostNotification.Post.content),50))+'" ')])])})),t.notifications.length?t._e():o("div",{staticClass:"notification_button__menu__empty"},[o("span",[t._v(t._s(t.emojis[t.emojiIndex%6]))]),t._v(" No notifications ")])],2)])])},p=[],g=(o("4de4"),o("4160"),o("a434"),o("159b"),o("4795"),o("c4b0")),v=o.n(g),b=o("2fa3"),w={name:"NotificationButton",data:function(){return{unreadCount:0,notifications:[],showMenu:!1,shake:!1,emojis:["😢","🤷","😘","😒","😔","💩"],emojiIndex:Math.round(5*Math.random())}},computed:{unreadCountText:function(){return this.unreadCount>99?"99+":this.unreadCount},postNotifications:function(){return this.notifications.filter((function(t){return t.PostNotification.Post}))}},methods:{isYouOrDeleted:function(t){return!t||t.username===this.$store.state.username},setShowMenu:function(t){var n=this;this.showMenu=t,t?this.resetUnreadCount():setTimeout((function(){n.emojiIndex++}),200)},getIndexById:function(t){var n;return this.notifications.forEach((function(o,a){o.id===t&&(n=a)})),n},getNotifications:function(){var t=this;this.axios.get(b["a"]+"/api/v1/notification").then((function(n){t.notifications=n.data.Notifications,t.unreadCount=n.data.unreadCount}))["catch"](v()(this.$store))},resetUnreadCount:function(){var t=this;this.axios.put(b["a"]+"/api/v1/notification").then((function(){t.unreadCount=0}))["catch"](v()(this.$store))},deleteNotification:function(t){var n=this,o=this.getIndexById(t);this.axios["delete"](b["a"]+"/api/v1/notification/"+t).then((function(){n.notifications.splice(o,1)}))["catch"](v()(this.$store))},setInteracted:function(t){var n=this,o=this.getIndexById(t),a=this.notifications[o];this.axios.put(b["a"]+"/api/v1/notification/"+t).then((function(){n.$set(n.notifications,o,Object.assign(a,{interacted:!0}))}))["catch"](v()(this.$store))},click:function(t){t.interacted||this.setInteracted(t.id),("mention"===t.type||"reply"===t.type||"reply"===t.type)&&this.$router.push("/p/"+t.PostNotification.Post.id),this.setShowMenu(!1)}},created:function(){var t=this;this.$socket.on("notification",(function(n){t.unreadCount++,t.notifications.unshift(n),t.shake=!0,setTimeout((function(){t.shake=!1}),1e3)}))},watch:{"$store.state.username":"getNotifications"}},C=w,$=(o("471f"),Object(l["a"])(C,m,p,!1,null,"82ebf474",null)),x=$.exports,y=o("1b9a"),k={name:"app",components:{ModalWindow:e["a"],TabView:_,FancyInput:h["a"],LoadingButton:f["a"],NotificationButton:x,NotFound:y["a"]},data:function(){return{signup:{username:"",password:"",confirmPassword:"",loading:!1,errors:{username:"",hash:"",confirmPassword:""}},login:{username:"",password:"",loading:!1,errors:{username:"",hash:""}},loadingLogout:!1,showMenu:!1,ajaxErrorHandler:v()(this.$store)}},computed:{name:function(){return this.$store.state.meta.name},showAccountModal:{get:function(){return this.$store.state.accountModal},set:function(t){this.$store.commit("setAccountModalState",t)}},showAjaxErrorsModal:{get:function(){return this.$store.state.ajaxErrorsModal},set:function(t){this.$store.commit("setAjaxErrorsModalState",t)}},showAccountTab:{get:function(){return this.$store.state.accountTabs},set:function(t){this.$store.commit("setAccountTabs",t)}},categories:function(){return this.$store.state.meta.categories}},methods:{showAccountModalTab:function(t){this.toggleMenu(),this.showAccountModal=!0,this.showAccountTab=t},toggleMenu:function(){this.showMenu=!this.showMenu},logout:function(){var t=this;this.toggleMenu(),this.loadingLogout=!0,this.axios.post(b["a"]+"/api/v1/user/"+this.$store.state.username+"/logout").then((function(n){t.loadingLogout=!1,t.$store.commit("setUsername",""),t.$store.commit("setAdmin",n.data.admin),t.$router.push("/")}))["catch"]((function(){t.loadingLogout=!1,t.axios.post(b["a"]+"/api/v1/user/"+t.$store.state.username+"/logout").then((function(n){t.loadingLogout=!1,t.$store.commit("setUsername",""),t.$store.commit("setAdmin",n.data.admin),t.$router.push("/")}))}))},clearSignup:function(){this.signup.username="",this.signup.password="",this.signup.confirmPassword="",this.$store.commit("setToken",null)},clearSignupErrors:function(){this.signup.errors.username="",this.signup.errors.hash="",this.signup.errors.confirmPassword=""},clearLogin:function(){this.login.username="",this.login.password=""},clearLoginErrors:function(){this.login.errors.username="",this.login.errors.hash=""},closeAccountModal:function(){this.showAccountModal=!1,this.clearLogin(),this.clearSignup(),this.clearLoginErrors(),this.clearSignupErrors()},createAccount:function(){var t=this;this.clearSignupErrors();var n={username:this.signup.username,password:this.signup.password};this.$store.state.token&&(n.admin=!0,n.token=this.$store.state.token),this.signup.password!==this.signup.confirmPassword?this.signup.errors.confirmPassword="Passwords must match":(this.signup.loading=!0,this.axios.post(b["a"]+"/api/v1/user",n).then((function(n){t.signup.loading=!1,t.$store.commit("setUsername",n.data.username),t.$store.commit("setAdmin",n.data.admin),t.closeAccountModal()}))["catch"]((function(n){t.signup.loading=!1,t.ajaxErrorHandler(n,(function(n){var o=n.path;void 0!==t.signup.errors[o]&&void 0!==t.signup.errors[o]&&(t.signup.errors[o]=n.message)}))})))},doLogin:function(){var t=this;this.clearSignupErrors(),this.login.username.trim().length?(this.login.loading=!0,this.axios.post(b["a"]+"/api/v1/user/".concat(this.login.username,"/login"),{password:this.login.password}).then((function(n){t.login.loading=!1,t.$store.commit("setUsername",n.data.username),t.$store.commit("setAdmin",n.data.admin),t.closeAccountModal(),t.$router.push("/admin/contacts")}))["catch"]((function(n){t.login.loading=!1,t.ajaxErrorHandler(n,(function(n){var o=n.path;void 0!==t.signup.errors[o]&&void 0!==t.signup.errors[o]&&(t.signup.errors[o]=n.message)}))}))):this.login.errors.username="Username must not be blank"}},created:function(){var t=this;this.axios.get(b["a"]+"/api/v1/category").then((function(n){t.$store.commit("addCategories",n.data),t.$store.dispatch("setTitle","Авторизация")}))["catch"](this.ajaxErrorHandler)},watch:{$route:function(){this.showMenu=!1},"$store.state.ajaxErrorsModal":function(t){t&&this.$refs.ajaxErrorsModalButton.focus()}}},M=k,A=(o("89db"),Object(l["a"])(M,a,i,!1,null,null,null));n["default"]=A.exports},f83a:function(t,n,o){"use strict";var a=o("b9dc"),i=o.n(a);i.a}}]);
//# sourceMappingURL=chunk-3ecc89c8.1a62b4a2.js.map