// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'
import { type Region } from '../constants/regions'

const MATCH_ENDPOINT = (id: string) => `lol/match/v3/matches/${id}`

const getMatchById = (region: Region, id: string, key: string) =>
  getRiotQuery(region, MATCH_ENDPOINT(id), key)

export default (region: Region, key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) => getMatchById(region, id, key)))
)
