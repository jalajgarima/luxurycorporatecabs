import express from 'express'

import { insertOrderToDB } from '../Controller/createOrderController.js'

const router = express.Router()

router.route('/').post(insertOrderToDB)

export default router
