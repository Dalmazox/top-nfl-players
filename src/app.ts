import express, { Application } from 'express'
import routes from './routes'

class App {
  express: Application

  constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  private routes(): void {
    this.express.use(routes)
  }

  private middlewares(): void {
    this.express.use(express.json())
  }
}

export default new App().express
