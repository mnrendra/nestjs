import { IData } from '../interfaces'
import setError from './setError'
import setSuccess from './setSuccess'

const getMicroservicesData = (ports: number[], server: any): IData => {
  const opt = server['options'] || {}
  const port = Number(opt['port'])
  if (Number.isNaN(port) || port <= 0) return setError(port)
  ports.push(port)
  return setSuccess(port)
}

export default getMicroservicesData
