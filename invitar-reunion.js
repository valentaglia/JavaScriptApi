const Calendar = require("./src/models/Calendar");
const Meeting = require("./src/models/Meeting");
const User = require("./src/models/User")


// Crear una instancia de Calendar
const calendar = new Calendar();

const users = new User();


// Agregar reuniones al calendario
// const meeting1 = { id: 1, startTime: '2023-05-16 08:30:00', endTime: '2023-05-16 09:00:00', duration: 30 };
// const meeting2 = { id: 2, startTime: '2023-05-16 08:30:00', endTime: '2023-05-16 09:00:00',  duration: 30 };

// calendar.addMeeting(1, meeting1);


// calendar.addMeeting(2, meeting2);

// console.log(calendar);


// Reunion a la que voy a sumar invitados
const meeting = calendar.getMeetingById(1)
// Busco por email a la persona que debo invitar
const guest = users.find('email@example.com')




// // Lo agrego a la reunion

// const guest1 = {id: 1, email: "aguskryss@gmail.com"}

const meetingInstance = new Meeting();

meetingInstance.addGuest(guest);

console.log(meetingInstance)
// // Tambien puedo eliminarlo
meetingInstance.removeGuest(guest)

console.log(meetingInstance)