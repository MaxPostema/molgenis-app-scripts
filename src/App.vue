<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from './store/store'
export default {
  name: 'App',
  created () {
    store.dispatch('requestScripts')
  }
}
</script>

<style>
</style>
