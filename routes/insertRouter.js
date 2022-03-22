const { Router } = require('express')
const insertController = require('../controllers/insertController')

const router = Router()

router
  .route('/')
  .get(insertController.insertDataDB)

module.exports = router;