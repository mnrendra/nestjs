import { IData } from '../interfaces'
import setError from './setError'
import setSuccess from './setSuccess'

const getApplicationData = (ports: number[], server: any): IData => {
  const cKey = server['_connectionKey'] || ':'
  const port = Number(cKey.split(':').pop())
  if (Number.isNaN(port) || port <= 0) return setError(port)
  ports.push(port)
  return setSuccess(port)
}

export default getApplicationData
