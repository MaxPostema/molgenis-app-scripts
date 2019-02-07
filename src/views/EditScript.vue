<template>
  <div class="container">
    <form-component
      v-if="meta.hasOwnProperty('attributes') && formFields"
      id="example-form"
      :formFields="formFields"
      :initialFormData="initialFormData"
      :formState="formState"
      :options="options"
      @valueChanged="onValueChanged"
      @addOptionRequest="handleAddOptionRequest">
    </form-component>
  </div>
</template>

<script>
import { FormComponent, EntityToFormMapper } from '@molgenis/molgenis-ui-form'
import { mapGetters } from 'vuex'

export default {
  name: 'EditScript',
  data () {
    return {
      id: '',
      formFields: [],
      initialFormData: {},
      formState: {},
      options: {
        showEyeButton: true
      }
    }
  },
  computed: {
    ...mapGetters(['meta', 'scripts'])
  },
  methods: {
    handleAddOptionRequest (addNewItemFunction) {
      // Handle the request to add a new item here
      /*
      const item = {
        id: 'new_item',
        label: 'New Item',
        value: 'new_item'
      }

      addNewItemFunction(item)
      */
      console.log(addNewItemFunction)
    },
    onValueChanged (formData) {
      // Do something with the updated formData
      console.log(formData)
    }
  },
  created () {
    this.id = this.$route.params.id;
  },
  beforeUpdate () {
    let scriptData = []
    if (this.scripts.length > 0) {
      scriptData = this.scripts[parseInt(this.id)]
    }
    const form = EntityToFormMapper.generateForm(this.meta, scriptData)
    this.formFields = form.formFields
    this.initialFormData = form.formData
  },
  components: {
    FormComponent
  }
}
</script>
