const router = require('express').Router()
const MetadataController = require('../src/controllers/MetadataController')
const controller = new MetadataController

// http://localhost:3001/roles
router.get('/', controller.index) // /roles
router.get('/:id', controller.show) // /roles/:id
router.post('/', controller.create) // /roles
router.put('/:id', controller.update) // /roles/:id
router.delete('/:id', controller.delete) // /roles/:id

module.exports = router