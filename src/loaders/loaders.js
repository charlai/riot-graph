// @flow
export type Loaders = {|
  champion: Object,
  championMastery: Object,
  item: Object,
  leaguePositions: Object,
  map: Object,
  match: Object,
  matchList: (start: number, count: number) => Object,
  summoner: Object,
  summonerByName: Object,
  summonerSpell: Object,
|}
