import express, { Application } from 'express'
import morgan from 'morgan'
import indexRoutes from './routes/index.routes'
import { posteosGet } from './controllers/posteosController'
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
  }

  config (): void {
    this.app.set('PORT', process.env.PORT ?? '3000')
  }

  routes (): void {
    this.app.use(indexRoutes)
    this.app.use(('/posteos'), posteosGet)
  }

  async listen (): Promise<void> {
    const PORT: number = this.app.get('PORT') // Obtenemos el puerto configurado
    this.app.listen(PORT, () => {
      console.log(`Servidor corriendo en el http://localhost:${PORT}`)
    })
  }
}
export default App
