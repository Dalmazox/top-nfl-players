import { Router } from 'express'
import PlayerService from './services/PlayerService'

const routes = Router()

routes.get('/', async ({ res }) => {
  const response = await PlayerService.GetTop100()

  res.json(response)
})

export default routes
