import Vue from 'vue'
import VueRouter from "vue-router";

// 引入组件
import HOME from "../components/home/home.vue";
import HEADER from "../components/header/header.vue";
import ABOUT from "../components/about/about.vue";
import LOGIN from "../components/login/login.vue";

// 告诉 vue 使用 VueRouter
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: HOME
    },
    {
        path: '/login',
        component: LOGIN
    },
    {
        path: '/about',
        component: ABOUT
    }
]

var router = new VueRouter({
    mode: 'history',
    routes
})

export default router;



/* 
在创建的 router 对象中，如果不配置 mode，就会使用默认的 hash 模式，该模式下会将路径格式化为 #! 开头。
添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀，而且可以使用 pushState 和 replaceState 来管理记录。
关于 HTML5 history 模式的更多内容，可以参考官方文档：https://router.vuejs.org/zh-cn/essentials/history-mode.html
*/
