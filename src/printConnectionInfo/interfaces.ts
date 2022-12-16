import { TLevel } from './types'

export interface IData {
  message: string
  level: TLevel
  port?: number
}

export const defData: IData = {
  message: 'is not setup. ⚠️',
  level: 'warn',
}

export interface IInfo {
  rest: IData
  tcp: IData
  grpc: IData
  kafka: IData
  redis: IData
  nats: IData
  rabbitmq: IData
  mqtt: IData
}

export const defInfo: IInfo = {
  rest: defData,
  tcp: defData,
  grpc: defData,
  kafka: defData,
  redis: defData,
  nats: defData,
  rabbitmq: defData,
  mqtt: defData,
}

export interface IOptions {
  verbose: boolean
}

export const defOptions: IOptions = {
  verbose: true,
}
