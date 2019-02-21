import Vue from 'vue'
import Router from 'vue-router'
import Scripts from './views/Scripts.vue'
import EditScript from './views/EditScript.vue'
import NewScript from './views/NewScript.vue'

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
      path: '/add/',
      name: 'newscript',
      component: NewScript
    },
    {
      path: '/edit/:id',
      name: 'editscript',
      component: EditScript
    }
  ]
})
