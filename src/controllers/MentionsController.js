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
    // Guardar la mención en el repositorio
    const mention = this.repo.save(req.body);
    // Responder con el resultado
    res.status(201).json(mention);
  };

  update = (req, res) => {
    // Obtener el ID de la mención a actualizar
    const { id } = req.params;
    // Actualizar la mención en el repositorio
    const mention = this.repo.update(id, req.body);
    // Responder con el resultado
    res.json(mention);
  };

  delete = (req, res) => {
    try {
      // Obtener el ID de la mención a eliminar
      const { id } = req.params;
      // Eliminar la mención del repositorio
      this.repo.deleteById(id);
      // Responder con éxito
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

module.exports = MentionsController;
