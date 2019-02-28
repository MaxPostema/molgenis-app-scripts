<template>
  <div class="navigator-actions">
    <b-button size="sm" variant="secondary" @click="createNewScript">New script</b-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'ScriptList',
  computed: {
    ...mapGetters(['scripts'])
  },
  components: {},
  methods: {
    test () {
      return 4
    },
    simpleParameters (parameters) {
      return parameters.map((parameter) => { return parameter.name })
    },
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
</style>
