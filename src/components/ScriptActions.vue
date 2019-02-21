<template>
  <div class="navigator-actions">
    <b-button size="sm" variant="secondary" @click="createNewScript">New script</b-button>
  </div>
</template>

<script>
import Vue from 'vue'
import store from '../store/store'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'ScriptList',
  computed: {
    ...mapGetters(['scripts'])
  },
  components: {},
  methods: {
    createNewScript () {
      this.$router.push({ name: 'newscript' })
    }
  }
})
</script>

<style scoped>
  .navigator-actions{
    margin-bottom: 2rem;
  }
  .button-last {
    margin-right: 1rem;
  }
</style>
