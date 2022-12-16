# [@mnrendra/nestjs](https://www.npmjs.com/package/@mnrendra/nestjs)  
NestJs' utilities to develop the NestJs projects are more helpful.  
  
## Libraries  
  
### printConnectionInfo  
Is a NestJs' `Logger` to prints all connection information.  
  
#### Usage  
  
##### 1. Install  
```
// using npm:
npm i @mnrendra/nestjs

// or using yarn:
yarn add @mnrendra/nestjs
```  
  
##### 2. Import `{ printConnectionInfo }` from `@mnrendra/nestjs` in `maint.ts` file.  
```
import { printConnectionInfo } from '@mnrendra/nestjs'

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { microserviceOptions } from './microservices.config'
```  
  
##### 3. Call `printConnectionInfo` after `NestApplication` is invoked for listening.  
```
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.connectMicroservice(microserviceOptions.TCP)
  app.connectMicroservice(microserviceOptions.GRPC)
  app.connectMicroservice(microserviceOptions.NATS)
  app.connectMicroservice(microserviceOptions.KAFKA)
  app.connectMicroservice(microserviceOptions.RABBITMQ)
  app.connectMicroservice(microserviceOptions.MQTT)
  app.connectMicroservice(microserviceOptions.REDIS)

  await app.startAllMicroservices();

  await app.listen(3000)

  // Call `printConnectionInfo` and pass `app` as an argument after the `app` is invoked for listening.
  printConnectionInfo(app)
}

bootstrap()
```  
  
##### 4. Run the app  
```
// using npm:
npm run start:dev

// or using yarn:
yarn start:dev
```  
  
##### 5. See in the terminal!  
It will produces NestJs' `Logger` like this:  
```
---------------------------------------------- Below is the Connection Information: --------
[Nest] 91552  - 12/17/2022, 1:03:18 AM     LOG [MQTT service] is listening on port 1883. ✅
[Nest] 91552  - 12/17/2022, 1:03:18 AM    WARN [RabbitMQ service] is not setup. ⚠️
[Nest] 91552  - 12/17/2022, 1:03:18 AM     LOG [Redis service] is listening on port 6379. ✅
[Nest] 91552  - 12/17/2022, 1:03:18 AM     LOG [NATS service] is listening on port 4222. ✅
[Nest] 91552  - 12/17/2022, 1:03:18 AM    WARN [Kafka service] is not setup. ⚠️
[Nest] 91552  - 12/17/2022, 1:03:18 AM    WARN [gRPC service] is not setup. ⚠️
[Nest] 91552  - 12/17/2022, 1:03:18 AM     LOG [TCP service] is listening on port 3000. ✅
[Nest] 91552  - 12/17/2022, 1:03:18 AM     LOG [RESTful application] is listening on port 3000. ✅
---------------------------------------------- Successfully listening to 5 ports. 🥳 -------
```  
  
#### Options  
  
##### # Verbose  
By default, `printConnectionInfo` will print all connections even if some connections are not setup or have an error.  
To only print listening connections, pass `{ verbose: false }` option in the second argument.  
```
printConnectionInfo(app, { verbose: false })
```  
It will only print listening connections like this:  
```
---------------------------------------------- Below is the Connection Information: --------
[Nest] 91552  - 12/17/2022, 1:03:18 AM     LOG [MQTT service] is listening on port 1883. ✅
[Nest] 91552  - 12/17/2022, 1:03:18 AM     LOG [Redis service] is listening on port 6379. ✅
[Nest] 91552  - 12/17/2022, 1:03:18 AM     LOG [NATS service] is listening on port 4222. ✅
[Nest] 91552  - 12/17/2022, 1:03:18 AM     LOG [TCP service] is listening on port 3000. ✅
[Nest] 91552  - 12/17/2022, 1:03:18 AM     LOG [RESTful application] is listening on port 3000. ✅
---------------------------------------------- Successfully listening to 5 ports. 🥳 -------
```  
  
## Author  
### [@mnrendra](https://github.com/mnrendra)  
