<template>
  <b-button @click.stop="execute" size="sm" variant="secondary"><font-awesome-icon class='mr-2' icon="play" size="lg" /> Run</b-button>
</template>

<script>
export default {
  name: 'ExecuteButton',
  methods: {
    execute: function (event) {
      window.location.href = '/scripts/' + this.$attrs.name + '/start'
    }
  }
}
</script>
