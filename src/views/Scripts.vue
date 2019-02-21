<template>
  <div class="container">
    <ScriptActions />
    <ScriptList />
  </div>
</template>

<script lang="ts">
// @ts-ignore
import ScriptActions from '../components/ScriptActions'
// @ts-ignore
import ScriptList from '../components/ScriptList'

export default {
  name: 'Scripts',
  components: {
    ScriptList, ScriptActions
  }
}
</script>
