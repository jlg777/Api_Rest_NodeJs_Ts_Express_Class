import { Router } from 'express'
import { createPosteo, deletePosteoId, getPosteoId, posteosGet } from '../controllers/posteosController'

const posteosRouter = Router()

posteosRouter.get('/', posteosGet)
posteosRouter.post('/', createPosteo)
posteosRouter.get('/:id', getPosteoId)
posteosRouter.delete('/:id', deletePosteoId)

export default posteosRouter
