// Archivo: MentionsController.js

const MentionRepository = require('../repositories/MentionRepository');
const extraerMenciones = require('../utils/extraerMenciones');

class MentionsController {
  constructor() {
    this.repo = new MentionRepository();
  }

  extractMentions = (req, res) => {
    try {
      const message = req.body.message;
      const mentions = extraerMenciones(message);
      res.json(mentions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  index = (req, res) => {
    try {
      const mentions = this.repo.all();
      res.json(mentions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  create = (req, res) => {
    try {
      const mention = this.repo.save(req.body);
      res.status(201).json(mention);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  update = (req, res) => {
    try {
      const { id } = req.params;
      const mention = this.repo.update(id, req.body);
      res.json(mention);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  delete = (req, res) => {
    try {
      const { id } = req.params;
      this.repo.deleteById(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

module.exports = MentionsController;
