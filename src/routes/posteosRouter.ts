import { Router } from 'express'
import { createPosteo, getPosteoId, posteosGet } from '../controllers/posteosController'

const posteosRouter = Router()

posteosRouter.get('/', posteosGet)
posteosRouter.post('/', createPosteo)
posteosRouter.get('/:id', getPosteoId)

export default posteosRouter
