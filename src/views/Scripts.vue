<template>
  <div class="container">
    <NewButton />
    <ScriptList />
  </div>
</template>

<script>
import NewButton from '../components/NewButton'
import ScriptList from '../components/ScriptList'

export default {
  name: 'Scripts',
  components: {
    ScriptList, NewButton
  }
}
</script>
