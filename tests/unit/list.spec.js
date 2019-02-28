import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ScriptList from '../../src/components/ScriptList'
import * as schemas from './test-schemas'

const localVue = createLocalVue()
localVue.use(Vuex)

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
    console.log(wrapper.vm.simpleParameters)

    expect(wrapper.vm.simpleParameters(parameters)).toEqual(['x', 'y', 'age', 'name'])
  })
})
