import * as http from 'http'
import * as https from 'https'

import { INestApplication } from '@nestjs/common'
import {
  ServerGrpc,
  ServerKafka,
  ServerMqtt,
  ServerNats,
  ServerRedis,
  ServerRMQ,
  ServerTCP,
} from '@nestjs/microservices'

import { defInfo, defOptions, IInfo, IOptions } from './interfaces'
import { getMicroservicesData, getApplicationData, printLog } from './utils'

const info: IInfo = defInfo

const printConnectionInfo = (nestApp: INestApplication, options: IOptions = defOptions) => {
  const ports: number[] = []

  const microservices = nestApp.getMicroservices()
  const appServer = nestApp.getHttpServer()

  microservices.forEach((service: any) => {
    const server = service['server']
    if (server instanceof ServerTCP) info.tcp = getMicroservicesData(ports, server)
    if (server instanceof ServerGrpc) info.grpc = getMicroservicesData(ports, server)
    if (server instanceof ServerKafka) info.kafka = getMicroservicesData(ports, server)
    if (server instanceof ServerNats) info.nats = getMicroservicesData(ports, server)
    if (server instanceof ServerRedis) info.redis = getMicroservicesData(ports, server)
    if (server instanceof ServerRMQ) info.rabbitmq = getMicroservicesData(ports, server)
    if (server instanceof ServerMqtt) info.mqtt = getMicroservicesData(ports, server)
  })

  if (appServer instanceof http.Server || appServer instanceof https.Server)
    info.rest = getApplicationData(ports, appServer)

  console.log('--------------------------------------------- Below is the Connection Information: ---------')

  const isNotVerbose = !options.verbose

  printLog('MQTT service', info.mqtt, isNotVerbose)
  printLog('RabbitMQ service', info.rabbitmq, isNotVerbose)
  printLog('Redis service', info.redis, isNotVerbose)
  printLog('NATS service', info.nats, isNotVerbose)
  printLog('Kafka service', info.kafka, isNotVerbose)
  printLog('gRPC service', info.grpc, isNotVerbose)
  printLog('TCP service', info.tcp, isNotVerbose)
  printLog('RESTful application', info.rest, isNotVerbose)

  const count = ports.length

  count
    ? console.log(`--------------------------------------------- Successfully listening to ${count} ports. 🥳 --------`)
    : console.log('--------------------------------------------- No ports are listening. 😡 -------------------')
}

export default printConnectionInfo
