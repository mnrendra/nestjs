import { Logger } from '@nestjs/common'
import { LevelEnum } from '../enums'
import { IData } from '../interfaces'
import getError from './getError'

const printLog = (name: string, { message, level, port }: IData, isNotVerbose: boolean) => {
  const error = getError(level, { name, port })
  if (error) Logger.error(message, error, name)
  else {
    if (level === LevelEnum.LOG) Logger.log(message, name)
    else if (level === LevelEnum.WARN && !isNotVerbose) Logger.warn(message, name)
  }
}

export default printLog
