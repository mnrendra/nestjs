import { IData } from '../interfaces'

const setError = (port: number): IData => {
  return {
    message: 'port is invalid! ❌',
    level: 'error',
    port,
  }
}

export default setError
