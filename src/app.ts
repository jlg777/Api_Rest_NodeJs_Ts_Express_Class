import express, { Application, json } from 'express'
import morgan from 'morgan'
import indexRoutes from './routes/index.routes'
import posteosRouter from './routes/posteosRouter'
// const PORT = process.env.PORT ?? '3000'

class App {
  private readonly app: Application

  constructor () {
    this.app = express()
    this.config()
    this.middlewares()
    this.routes()
  }

  middlewares (): void {
    this.app.use(morgan('dev'))
    this.app.use(json())
  }

  config (): void {
    this.app.set('PORT', process.env.PORT ?? '3000')
  }

  routes (): void {
    this.app.use(indexRoutes)
    this.app.use(('/posteos'), posteosRouter)
  }

  async listen (): Promise<void> {
    const PORT: number = this.app.get('PORT') // Obtenemos el puerto configurado
    this.app.listen(PORT, () => {
      console.log(`Servidor corriendo en el http://localhost:${PORT}`)
    })
  }
}
export default App
