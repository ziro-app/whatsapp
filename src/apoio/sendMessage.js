require('dotenv').config() 

const accountSid = process.env.accountSid 
const authToken = process.env.authToken 
const client = require('twilio')(accountSid, authToken) 

const enviarMensagem = (destinatario, mensagem) => {
    client.messages 
        .create({ 
            body: mensagem, 
            from: `whatsapp:+${process.env.numero_ziro_sand}`,       
            to: `whatsapp:+${destinatario}` 
        }) 
        .then(message => console.log(message.sid)) 
        .done()
}

module.exports = enviarMensagem