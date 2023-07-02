const Factory = require('../factories/MeetingFactory')

class Meeting {
    constructor(startTime, duration) {
        this.#startTime = startTime;
        this.#duration = duration;
        this.#endTime = null;
        this.#link = null;
        this.#guests = [];
        this.#id = Factory.generateMeetingId();
    }

    getId() {
        return this.#id;
    }

    getGuests() {
        return this.#guests;
    }

    addGuest(guest) {
        this.#guests.push(guest);
    }

    removeGuest(guest) {
        const index = this.#guests.indexOf(guest);
        if (index !== -1) {
            this.#guests.splice(index, 1);
        }
    }

    setGuests(guests) {
        this.#guests = guests;
    }

    getLink() {
        return this.#link;
    }

    generateLink() {
        const meetingId = this.getId();
        const path = this.path;
        this.link = new URL(`https://localhost:8080${path}/${meetingId}`);
        return this.link
    }

    setLink(link) {
        this.#link = link;
    }

    getStartTime() {
        return this.#startTime;
    }

    getEndTime() {
        return this.#endTime;
    }

    setEndTime(endTime) {
        this.#endTime = endTime;
    }

    getDuration() {
        return this.#duration;
    }
}

module.exports = Meeting
