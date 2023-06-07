const MentionExtractor = require('../utils/extraerMenciones');

class MentionsController {
/*     constructor() {
        this.repo = new RoleRepository
    } */
  extractMentions(req, res) {
    try {
      const message = req.body.message;
      const mentions = MentionExtractor.extract(message);
      res.json(mentions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = MentionsController;
