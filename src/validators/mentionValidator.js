module.exports = {
    mentionValidator: function (name) {
      if (typeof name !== "string" || name.trim() === "") {
        throw new Error('Se esperaba un nombre en formato de texto');
      }
  
      const nameMinLength = 1;
      const nameMaxLength = 100;
  
      if (name.length < nameMinLength) {
        throw new Error(`El nombre debe tener al menos ${nameMinLength} caracteres`);
      }
  
      if (name.length > nameMaxLength) {
        throw new Error(`El nombre debe tener como máximo ${nameMaxLength} caracteres`);
      }
  
      if (!name.includes("@")) {
        throw new Error("El nombre debe contener al menos una mención con '@'");
      }
    }
  };
  