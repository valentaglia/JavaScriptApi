module.exports = {
    validateCreation: function(startTime, duration) {
      if (!startTime || !duration) {
        throw new Error('Los campos startTime y duration son requeridos para crear una Meeting');
      }
    }
  };
  