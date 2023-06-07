const express = require('express');
const MentionsController = require('../controllers/MentionsController');
const router = express.Router();
const controller = new MentionsController();

router.post('/extract', controller.extractMentions);

module.exports = router;
