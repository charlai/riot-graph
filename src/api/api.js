// @flow
import request from 'request-promise'
import limiter from './limiter'
import logger from '../logger'
import { API_HOST } from '../constants/hosts'
import { type Region } from '../constants/regions'
import config from '../../config.json'

const X_RIOT_TOKEN_HEADER = 'X-Riot-Token'

export default function (region: Region, url: string, key: string = config.API.KEY,
  rateLimited: boolean = true) {
  const uri = `${API_HOST(region)}/${url}`

  const options = {
    uri,
    headers: {
      [X_RIOT_TOKEN_HEADER]: key,
    },
    json: true,
  }

  logger.debug({
    uri,
  })

  if (!rateLimited) {
    return request(options)
  }

  return limiter.req(options)
    .catch((err: Error) => {
      throw new Error(`url: [${uri}] error: [${err.message}]`)
    })
}
