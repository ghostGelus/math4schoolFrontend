import NProgress from 'nprogress'
import io from 'socket.io-client'

window.onload = () => {
	let div = document.createElement('div');
	div.innerHTML =
		`<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/default.min.css">`;

    document.head.append(...div.children);
}

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import vuetify from '@/plugins/vuetify'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import axios from 'axios'
import VueAxios from 'vue-axios'

import linkExpander from './assets/js/linkExpander'

import App from './App'
import store from './store/index'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faComment } from '@fortawesome/free-regular-svg-icons'
import {
	faBars, faPlus, faGrin, faLink, faCode,
	faTimes, faUnlockAlt, faReply, faHome, faTh,
	faExclamationCircle, faUserCircle, faThumbsUp,
	faComments, faUser, faCog, faLock, faCloudUploadAlt,
	faSearch, faChevronDown, faSortAmountUp, faSortAmountDown,
	faCheck, faQuoteRight, faMinus, faCaretUp, faCaretDown,
	faHeart, faFire, faUsers, faChartLine
} from '@fortawesome/free-solid-svg-icons'

library.add(
	faBars, faPlus, faGrin, faLink, faCode,
	faTimes, faBell, faUnlockAlt, faReply, faHome,
	faTh, faExclamationCircle, faUserCircle, faThumbsUp,
	faComments, faUser, faCog, faLock, faCloudUploadAlt,
	faSearch, faChevronDown, faSortAmountUp, faSortAmountDown,
	faComment, faCheck, faQuoteRight, faMinus, faCaretUp, faCaretDown,
	faHeart, faFire, faUsers, faChartLine
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const Home = () => import('./components/routes/Home')
const Index = () => import('./components/routes/Index')
const P = () => import('./components/routes/P')
const Start = () => import('./components/routes/Start')
const Thread = () => import('./components/routes/Thread')
const ThreadNew = () => import('./components/routes/ThreadNew')

const ContactUs = () => import('./components/routes/ContactUs')

const Search = () => import('./components/routes/Search')
const SearchUsersThreads = () => import('./components/routes/SearchUsersThreads')

const User = () => import('./components/routes/User')
const UserPosts = () => import('./components/routes/UserPosts')
const UserThreads = () => import('./components/routes/UserThreads')

const Settings = () => import('./components/routes/Settings')
const SettingsGeneral = () => import('./components/routes/SettingsGeneral')
const SettingsAccount = () => import('./components/routes/SettingsAccount')

const AdminAuthorization = () => import('./components/AdminAuthorization')
const Admin = () => import('./components/routes/Admin')
const AdminContacts = () => import('./components/routes/AdminContacts')
const AdminContact = () => import('./components/AdminContact')
const AdminUsers = () => import('./components/routes/AdminUsers')

import NotFound from './components/routes/NotFound'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(linkExpander)
Vue.use(Vuetify, {
  iconfont: 'fortawesome'
})
Vue.use(Toast);

Vue.use({
	install (Vue) {
		Vue.prototype.$socket = io(process.env.NODE_ENV === 'production' ? '' : "http://localhost:3000");
	}
})


const router = new VueRouter({
	routes: [
		{ path: '/', component: Home },
		{ path: '/category/:category', component: Index },
		{ path: '/p/:id', component: P },
		{ path: '/contact-us', component: ContactUs},
		{ path: '/start', component: Start },
		{ path: '/thread/:slug/:id', component: Thread },
		{ path: '/thread/:slug/:id/:post_number', name: 'thread-post', component: Thread },
		{ path: '/thread/new', component: ThreadNew },
		{ path: '/search/:q', component: Search },
		{ path: '/search/users/:q', component: SearchUsersThreads, name: 'search/users' },
		{ path: '/search/threads/:q', component: SearchUsersThreads, name: 'search/threads' },
		{ path: '/user/:username', redirect: '/user/:username/posts', component: User, children: [
			{ path: 'posts', component: UserPosts },
			{ path: 'threads', component: UserThreads }
		] },
		{ path: '/settings', redirect: '/settings/general', component: Settings, children: [
			{ path: 'general', component: SettingsGeneral },
			{ path: 'account', component: SettingsAccount }
		] },
		{ path: '/admin/login', component: AdminAuthorization},
		{ path: '/admin', redirect: '/admin/contacts', component: Admin, children: [
			{ path: 'users', component: AdminUsers },
			{ path: 'contacts', component: AdminContacts},
			{ path: 'contacts/:id', name:'adminContact', component: AdminContact}
		] },
		{ path: '*', component: NotFound }
	]
})

router.beforeEach((to, from, next) => {
	router.app.$store.commit('set404Page', false)

	//Do not change progress bar when scrolling through posts on a thread
	if(
		(to.name !== 'thread-post' && from.name !== 'thread-post') &&
		(!to.params.id || to.params.id !== from.params.id)
	) {
		NProgress.start()
	}

	next()
})
router.afterEach(() => {
	NProgress.done()
})

Vue.filter('formatDate', function (value) {
	if (value.length <= 10) {
        return value
      }
      return `${value.substring(0, 10)}`
});

Vue.filter('stripTags', function (value) {
	let doc = new DOMParser().parseFromString(value, 'text/html')
	return doc.body.textContent || ''
});

Vue.filter('shortenContent', function (value) {
	if (value.length <= 30) {
        return value
      }
      return `${value.substring(0, 30)}...`
});

Vue.filter('truncate', function (value, length) {
	if(value.length <= length) {
		return value
	} else {
		return value.slice(0, length) + '…'
	}
});
Vue.filter('truncateMid', function (value, length) {
	if(value.length <= length) {
		return value
	} else {
		let firstLen = Math.round(length/2);
		let secondLen = length - firstLen;

		return value.slice(0, firstLen) + '…' + value.slice(value.length-secondLen, value.length)
	}
});

let Root = new Vue({
	vuetify,
	store,
	router,
	render: h => h(App)
}).$mount('#app');


let cookieDict = document.cookie
	.split(';')
	.map(a => a.split('=').map(a => a.trim()) )
	.map(a => {
		let k = a[0], v = a[1]
		return { [k] : v }
	})
	.reduce((combinedObj, o) => {
		let key = Object.keys(o)[0]
		combinedObj[key] = o[key]

		return combinedObj
	}, {})

if(cookieDict.username) Root.$store.commit('setUsername', cookieDict.username)
if(cookieDict.admin === 'false') {
	Root.$store.commit('setAdmin', false)
} else if(cookieDict.admin === 'true') {
	Root.$store.commit('setAdmin', true)
}
