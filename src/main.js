/*webpack入口文件*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import home from './components/home.vue'
import noteList from './components/noteList.vue'
import editNote from './components/editNote.vue'
import addNote from './components/addNote.vue'
import categoryList from './components/categoryList.vue'

Vue.use(VueRouter)

var router = new VueRouter();
//定义路由规则
router.map ({
	'/home': {
		component: home
	},
	'/noteList': {
		component: noteList
	},
	'/editNote': {
		component: editNote
	},
	'/addNote': {
		component: addNote
	},
	'/categoryList': {
		component: categoryList
	}
})
//为路由定义全局重定向规则，将任意未匹配路径重定向到/home页面
router.redirect({
	'*': '/home'
})
//挂载根组件
router.start(App, '#app')
