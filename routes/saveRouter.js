const { Router } = require('express')
const saveController = require('../controllers/saveController')

const router = Router()

router
  .route('/')
  .post(saveController.saveForm)

module.exports = router;