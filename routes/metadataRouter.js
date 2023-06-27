const router = require('express').Router()
const MetadataController = require('../src/controllers/MetadataController')
const controller = new MetadataController
const validator = require('../src/middlewares/metadataValidationMiddleware')

// http://localhost:3001/metadata
router.get('/', controller.index) // /metadata
router.get('/:id', controller.show) // /metadata/:id
router.post('/', validator, controller.create) // /metadata  
router.put('/:id',controller.update) // /metadata/:id
router.delete('/:id', controller.delete) // /metadata/:id

module.exports = router