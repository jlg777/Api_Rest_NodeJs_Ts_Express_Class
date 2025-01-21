import { Router } from 'express'
import { createPosteo, posteosGet } from '../controllers/posteosController'

const posteosRouter = Router()

posteosRouter.get('/', posteosGet)
posteosRouter.post('/', createPosteo)

export default posteosRouter
