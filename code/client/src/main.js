import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
Vue.use(VueRouter)

import App from './App.vue'
import LoginPage from './login/LoginPage.vue'
import SignupPage from './login/SignupPage.vue'
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: App },
        { path: '/login', component: LoginPage },
        {
            path: '/logout',
            beforeEnter: (to, from, next) => {
                console.log('slm')
                store.dispatch('logoff')
                next('/login')
            }
        },
        { path: '/signup', component: SignupPage },
    ]
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/']
    const accountPages = ['/login', '/signup'];
    const nonAuthRequired = accountPages.includes(to.path)
    const authRequired = !(publicPages + accountPages).includes(to.path);
    console.log(store.state.isLoggedIn)
    const loggedIn = store.state.isLoggedIn

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    if (nonAuthRequired && loggedIn && from != '/logoff') {
        return next('/');
    }

    next();
})

sync(store, router)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')