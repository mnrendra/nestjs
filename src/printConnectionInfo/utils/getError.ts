import { LevelEnum } from '../enums'
import { TLevel } from '../types'

const getError = (level: TLevel, { name, port }: any): any => {
  if (level === LevelEnum.ERROR) {
    const error = new Error(`${name} port is ${port} and this is invalid port. Please check your bootstrap config!`)
    error.name = 'InvalidPort'
    return error
  }
  return null
}

export default getError
