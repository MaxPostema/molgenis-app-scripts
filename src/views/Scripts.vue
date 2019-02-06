<template>
  <div class="container">
    <ModalDeleteScript />
    <ScriptActions />
    <ScriptList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// @ts-ignore
import ScriptActions from '../components/ScriptActions'
// @ts-ignore
import ScriptList from '../components/ScriptList'
// @ts-ignore
import ModalDeleteScript from '../components/ModalDeleteScript'

@Component({
  components: {
    ScriptList, ScriptActions, ModalDeleteScript
  }
})
export default class Scripts extends Vue {}
</script>
