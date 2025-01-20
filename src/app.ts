import express, { Application } from 'express'
import morgan from 'morgan'
// const PORT = process.env.PORT ?? '3000'

class App {
  private readonly app: Application

  constructor () {
    this.app = express()
    this.config()
    this.middlewares()
  }

  middlewares (): void {
    this.app.use(morgan('dev'))
  }

  config (): void {
    this.app.set('PORT', process.env.PORT ?? '3000')
  }

  listen (): void {
    const PORT: number = this.app.get('PORT') // Obtenemos el puerto configurado
    this.app.listen(PORT, () => {
      console.log(`Servidor corriendo en el http://localhost:${PORT}`)
    })
  }
}
export default App
