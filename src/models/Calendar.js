class Calendar {
    meetings = []
    constructor() {
      this.meetings = [];
    }
  
    
  
    getMeetingById(id) {
      return this.meetings[id];
    }
  
    
  }
  
  module.exports = Calendar;
  