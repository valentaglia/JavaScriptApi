const enviarCorreo = require('../repositories/pushEmail.js');
//mail destino
x = 'testort2023@gmail.com'
//cuerpo del mail
y = 'Hola desde otro archivo js'

//Recibe dos parametros, el Mail al que se desea enviar, el texto que se quiere enviar
mail = new enviarCorreo(x, y);