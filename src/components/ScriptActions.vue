// @flow
<template>
  <div class="navigator-actions">
    <b-dropdown size="sm" variant="secondary" text="New script">
      <b-dropdown-item-button>New script</b-dropdown-item-button>
      <b-dropdown-item-button>New parameter</b-dropdown-item-button>
    </b-dropdown>
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
    test () {
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
