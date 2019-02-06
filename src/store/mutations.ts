// @ts-ignore
import api from '@molgenis/molgenis-api-client'
import State from '@/types/state'

export default {
  requestScripts (state: State) {
    api.get('api/v2/sys_scr_Script').then((response: any) => {
      console.log(response.items)
      state.scripts = response.items.map((script:any, index: number) => Object.assign({ }, script))
    })
  },
}
