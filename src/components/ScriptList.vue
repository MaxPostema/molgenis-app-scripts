<template>
  <b-table
    :hover="true"
    :items="scripts.items"
    :fields="fields"
    :filter="filter"
    class="text-left"
    @row-clicked="editScript"
    show-empty>
    <template
      slot="edit"
      slot-scope="data">
      <b-button :name="data.item.name" size="sm" variant="secondary">
        <font-awesome-icon icon="edit" size="lg" />
      </b-button>
    </template>
    <template
      slot="remove"
      slot-scope="data">
      <RemoveButton :name="data.item.name" />
    </template>
    <template
      slot="selected"
      slot-scope="data">
      <b-form-checkbox
        :checked="data.item.selected"
        @click.native.stop
        @change="toggleSelected(data.item, $event)">
      </b-form-checkbox>
    </template>
    <template
      slot="name"
      slot-scope="data">
      {{ data.item.name }} <b-badge>{{ data.item.type.name }} </b-badge>
    </template>
    <template
      slot="parameters"
      slot-scope="data">
      <span v-for="(parameter, key) in data.item.parameters" :key="`parameter-${key}`"><span v-if="key!=0">,</span> {{ parameter.name }}</span>
    </template>
    <template
      slot="execute"
      slot-scope="data">
      <ExecuteButton v-if="loaded" size="sm" :parameters="simpleParameters(data.item.parameters)" :name="data.item.name">Run</ExecuteButton>
    </template>
  </b-table>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { ReadyState } from '@/types/state'
import ExecuteButton from '../components/ExecuteButton'
import RemoveButton from './RemoveButton'

export default Vue.extend({
  name: 'ScriptList',
  data () {
    return {
      fields: {
        edit: {
          label: '',
          'class': 'compact align-middle'
        },
        remove: {
          label: '',
          'class': 'compact align-middle'
        },
        name: {
          label: 'Name',
          sortable: true,
          'class': 'align-middle'
        },
        parameters: {
          label: 'Parameters',
          sortable: false,
          'class': 'align-middle'
        },
        resultFileExtension: {
          label: 'Result file extension',
          sortable: false,
          'class': 'compact align-middle'
        },
        execute: {
          label: '',
          sortable: false,
          'class': 'compact'
        }
      },
      hover: true,
      filter: null
    }
  },
  computed: {
    ...mapGetters(['scripts', 'loaded'])
  },
  components: { ExecuteButton, RemoveButton },
  methods: {
    editScript (record) {
      this.$router.push({ name: 'editscript', params: { id: record.name } })
    },
    simpleParameters (parameters) {
      return parameters.map((parameter) => { return parameter.name })
    }
  }
})
</script>

<style scoped>
  >>> .compact {
    width: 1px;
    white-space: nowrap;
  }
  >>> tr {
    cursor: pointer;
  }
  >>> .badge{
    bottom: 1px;
    position: relative;
  }
</style>
