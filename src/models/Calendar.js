const Repository = require('../repositories/CalendarRepository')
class Calendar {
    meetings = []
    constructor() {
      this.meetings = [];
    }
    
    getMeeting(id){
      return Repository.byId(id);
  }
  
  }
  
  module.exports = Calendar;
  