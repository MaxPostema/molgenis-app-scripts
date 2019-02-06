export interface State{
  scripts: any //Script[]
}

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

export default State
