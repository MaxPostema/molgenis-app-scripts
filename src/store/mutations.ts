// @ts-ignore
import api from '@molgenis/molgenis-api-client'
import State from '@/types/state'

export default {
  requestScripts (state: State) {
    api.get('/api/v2/sys_scr_Script?num=10000').then((response: any) => {
      console.log(response)
      // state.meta = response.meta.map((script:any) => Object.assign({ }, script))
      state.meta = response.meta
      state.scripts = response.items.map((script:any, index: number) => Object.assign({ }, script))
    })
  },
}
