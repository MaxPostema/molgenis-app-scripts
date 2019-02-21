// export const enum ReadyState { loading = 1, failed, ready }
export enum ReadyState { loading = 'loading', failed = 'failed', ready = 'ready' }

export interface State{
  scripts: any[] // Script[]
  scriptTypes: string[]
  loaded: boolean
}
/*
export interface Script{
  _href: string
  name: string
  type: Type
  generateToken: boolean
  content: string
  parameters: Parameter[]
}

export interface Parameter{
  _href: string
  name: string
}

export interface Type{
  _href: string
  name: string
}
*/
export default State
