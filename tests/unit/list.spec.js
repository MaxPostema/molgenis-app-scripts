import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ScriptList from '../../src/components/ScriptList'
import RemoveButton from '../../src/components/RemoveButton'
import * as schemas from './test-schemas'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

describe('Components/ScriptList.vue', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      scripts: jest.fn().mockReturnValue(schemas.Script),
      loaded: jest.fn().mockReturnValue(true)
    }
    store = new Vuex.Store({
      getters
    })
  })

  it('simpleParameters simplifies api item parameter list', () => {
    const wrapper = shallowMount(ScriptList, {
      store,
      localVue,
      stubs: ['b-table']
    })
    const parameters = schemas.Script.items[3].parameters
    expect(wrapper.vm.simpleParameters(parameters)).toEqual(['x', 'y', 'age', 'name'])
  })
})

describe('Components/RemoveButton.vue', () => {
  let store = jest.fn()

  it('Opens dialog on click', (done) => {
    const wrapper = shallowMount(RemoveButton, {
      localVue,
      stubs: ['font-awesome-icon']
    })
    expect(wrapper.vm.$data.modalShow).toBeFalsy()
    console.log('--------')
    console.log(wrapper.html())

    wrapper.find('.remove').trigger('click')

    // localVue.nextTick(() => {
    setTimeout(function() {
      expect(wrapper.vm.$data.modalShow).toBeTruthy()
      done()
    },500)
    // })

  })
/*
  it('Mutates store on remove click', () => {
    const wrapper = shallowMount(RemoveButton, {
      store,
      localVue,
      stubs: ['font-awesome-icon']
    })
  })
  */
})
