import { IData } from '../interfaces'

const setSuccess = (port: number): IData => {
  return {
    message: `is listening on port ${port}. ✅`,
    level: 'log',
    port,
  }
}

export default setSuccess
