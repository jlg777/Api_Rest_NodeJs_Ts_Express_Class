import { Router } from 'express'
import { indexWelcome } from '../controllers/indexController'

const indexRoutes = Router()

indexRoutes.route('/').get(indexWelcome)

export default indexRoutes
