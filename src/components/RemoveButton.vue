<template>
  <div>
    <b-button @click.stop="modalShow = !modalShow" size="sm" variant="danger">
        <font-awesome-icon icon="trash" size="lg" />
      </b-button>
      <b-modal v-model="modalShow"
               title="Confirm Deletion"
               ok-title="Delete"
               ok-variant="danger"
               @ok="remove">
        <p class="my-4">Are you sure you want to remove this script?</p>
      </b-modal>
  </div>
</template>

<script>
import store from '../store/store'
export default {
  name: 'RemoveButton',
  data () {
    return {
      modalShow: false
    }
  },
  computed: {
    getName () {
      return this.$attrs.name
    }
  },
  methods: {
    remove () {
      store.dispatch('removeScript', this.getName)
    }
  }
}
</script>
