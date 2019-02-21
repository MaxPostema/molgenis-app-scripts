<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '../node_modules/@molgenis/molgenis-ui-form/dist/static/css/molgenis-ui-form.css'
import store from './store/store'

export default {
  name: 'App',
  created () {
    store.dispatch('requestScripts').catch(reason => {
      window.location.href = '/login'
    })
  }
}
</script>

<style>
</style>
