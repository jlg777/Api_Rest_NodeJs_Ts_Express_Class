import { Router } from 'express'
import { posteosGet } from '../controllers/posteosController'

const posteosRouter = Router()

posteosRouter.get('/', posteosGet)

export default posteosRouter
