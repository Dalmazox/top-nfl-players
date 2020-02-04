import cheerio from 'cheerio'
import BrowsingService from './BrowsingService'

export interface Player {
  rank: number
  name: string
  position: string
  team: string
}

class PlayerService {
  static async GetTop100(): Promise<Player[]> {
    const players: Player[] = []
    const url = process.env.URL
    const content = await BrowsingService.GetContent(url)

    const $ = cheerio.load(content)

    $('.tbl-content table tbody tr').each((index, item) => {
      players.push({
        rank: parseInt(item.children[0].firstChild.data),
        name: item.children[1].firstChild.data,
        position: item.children[2].firstChild.data,
        team: item.children[3].firstChild.data,
      })
    })

    return players
  }
}

export default PlayerService
