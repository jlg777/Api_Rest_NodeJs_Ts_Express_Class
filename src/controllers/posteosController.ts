import { Request, Response } from 'express'

export function posteosGet (_req: Request, res: Response): void {
  res.send('posteos')
}
