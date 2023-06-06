const EventsRepository = require('./repositories/EventRepository')
const EventFactory = require('./factories/EventFactory')

class Calendar{
    getCalendar(){
        const repo = new EventsRepository
        const events = repo.getAllEvents()
        return events;
    }
}
