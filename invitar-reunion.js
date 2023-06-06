const Calendar = require("./src/models/Calendar");
const Meeting = require("./src/models/Meeting");
const User = require("./src/models/User")


// Crear una instancia de Calendar
const calendar = new Calendar();

const users = new User();


// Reunion a la que voy a sumar invitados
const meeting = calendar.getMeetingById(1)
// Busco por email a la persona que debo invitar
const guest = users.find('email@example.com')




const meetingInstance = new Meeting();

meetingInstance.addGuest(guest);

console.log(meetingInstance)
// // Tambien puedo eliminarlo
meetingInstance.removeGuest(guest)

console.log(meetingInstance)