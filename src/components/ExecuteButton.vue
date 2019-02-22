<template>
  <span v-if="loaded">
    <b-button @click.stop="execute"
              :size="size" variant="secondary"><font-awesome-icon class='mr-2' icon="play" size="lg" /> <slot></slot></b-button>
    <RunModal v-model="showModal"
              :parameters="parameters"
              :name="name"
    />
  </span>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store/store'
// @ts-ignore
import RunModal from '../components/RunModal'

export default {
  name: 'ExecuteButton',
  props: {
    parameters: Array,
    name: String,
    form: Object,
    size: {
      type: String,
      default: ''
    },
    doSave: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showModal: false,
      save: false
    }
  },
  computed: {
    ...mapGetters(['loaded'])
  },
  components: { RunModal },
  methods: {
    execute () {
      if (this.doSave) {
        console.log('dosave')
        store.dispatch('addParameters', this.form.parameters).then(() => {
          store.dispatch('editScript', this.form).then(() => {
            this.run()
          })
        })
      } else {
        console.log('run')
        this.run()
      }
    },
    run () {
      if (this.parameters.length > 0) {
        this.showModal = true
      } else {
        window.open('/scripts/' + this.name + '/start', '_blank')
      }
    }
  }
}
</script>
