import { Request, Response } from 'express'
import app from './app'

const PORT = 3000

app.get('/', (_req: Request, res: Response) => {
  res.send('Inicio')
})

app.listen(PORT, () => {
  console.log(`Escuchando en el http://localhost:${PORT}`)
})
