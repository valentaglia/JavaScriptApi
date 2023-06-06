let data = {
    de : "cosme-fulanito",
    para : "hermano-funalito",
    asunto : "Saludo",
    cuerpo : "Hola, ¿Como estas?"
}

let archivo = './Purchase-Email.txt'

let mensaje = appMailer.template(archivo, data)

console.log(mensaje)
