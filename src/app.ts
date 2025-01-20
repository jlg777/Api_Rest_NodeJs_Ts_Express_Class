import express, { Application } from 'express'
const PORT = process.env.PORT ?? '3000'

class App {
  app: Application

  constructor () {
    this.app = express()
  }

  listen (): void {
    this.app.listen(3000, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`)
    })
  }
}
export default App
