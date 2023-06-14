const Meet = require('../models/Meet');
const Factory = require('../factories/MeetFactory');
const Repository = require('./Repository');

class MeetRepository extends Repository {
  file = './examples/meets.json';
    all() {
        let meet = this.read();
        return meet;
    }
    byId(id) {
        if (isNaN(id)) {
            throw new Error('Se esperaba id numerico')
        }

        let meet = this.findById(id)

        if (meet === undefined) {
            throw new Error('El Meet no se encontro')
        }

        return Factory.make(meet)
    }
    addGuest(meetId, guest) {
        if (isNaN(meetId)) {
          throw new Error('Se esperaba un ID numérico');
        }
    
        let meet = this.byId(meetId);
        
    
        if (meet == null) {
          throw new Error('No se encontró la reunión');
        }
    
        

        meet.addGuest(guest);
    
        this.save(meet);
    
        return meet;
      }
      


    create(meet) {
        if (meet instanceof Meet) {
            this.save({
                date: meet.getDate(),
                time: meet.getTime(),
                duration: meet.getDuration(),
                guests: meet.getGuests()
            })

            return;
        }

        throw new Error('Se requiere una instancia de Meet')
    }
}

module.exports = MeetRepository