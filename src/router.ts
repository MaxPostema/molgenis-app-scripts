import Vue from 'vue'
import Router from 'vue-router'
import Scripts from './views/Scripts.vue'
import EditScript from './views/EditScript.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'scripts',
      component: Scripts
    },
    {
      path: '/edit/',
      name: 'newscript',
      component: EditScript
    },
    {
      path: '/edit/:id',
      name: 'editscript',
      component: EditScript
    },
  ],
})

