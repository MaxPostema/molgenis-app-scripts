<template>
  <div class="container">
    <ScriptActions />
    <ScriptList />
  </div>
</template>

<script>
import ScriptActions from '../components/ScriptActions'
import ScriptList from '../components/ScriptList'

export default {
  name: 'Scripts',
  components: {
    ScriptList, ScriptActions
  }
}
</script>
