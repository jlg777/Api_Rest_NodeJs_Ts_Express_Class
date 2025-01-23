import { Router } from 'express'
import { createPosteo, deletePosteoId, getPosteoId, posteosGet, updatePosteoiD } from '../controllers/posteosController'

const posteosRouter = Router()

posteosRouter.get('/', posteosGet)
posteosRouter.post('/', createPosteo)
posteosRouter.get('/:id', getPosteoId)
posteosRouter.delete('/:id', deletePosteoId)
posteosRouter.put('/:id', updatePosteoiD)

export default posteosRouter
