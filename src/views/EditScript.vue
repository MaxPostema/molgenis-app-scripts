<template>
  <form-component
    id="example-form"
    :formFields="formFields"
    :initialFormData="formData"
    :formState="formState"
    :options="options"
    @valueChanged="onValueChanged"
    @addOptionRequest="handleAddOptionRequest">
  </form-component>
</template>

<script>
import { FormComponent, EntityToFormMapper } from '@molgenis/molgenis-ui-form'

export default {
  name: 'EditScript',
  data () {
    return {
      formFields: [],
      initialFormData: {},
      formState: {},
      options: {
        showEyeButton: true
      }
    }
  },
  methods: {
    handleAddOptionRequest (addNewItemFunction) {
      // Handle the request to add a new item here
      const item = {
        id: 'new_item',
        label: 'New Item',
        value: 'new_item'
      }

      addNewItemFunction(item)
    },

    onValueChanged (formData) {
      // Do something with the updated formData
      console.log(formData)
    }
  },
  created () {
    // Generate a form from a MOLGENIS v2 API response
    // Or create fields based on the specs (Form specifications)
    const form = EntityToFormMapper(metadata, items[0])
    this.formFields = form.formFields
    this.initialFormData = form.formData
  }
}
</script>
