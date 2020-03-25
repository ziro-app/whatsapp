require('dotenv').config() 
const accountSid = process.accountSid 
const authToken = process.authToken
const client = require('twilio')(accountSid, authToken)

const enviarMensagem = (numberTo,body) => {
    client.messages 
        .create({ 
            body: body, 
            from: `+${process.numero_ziro}`,       
            to: `whatsapp:+${numberTo}`
        }) 
        .then(message => console.log(message.sid)) 
        .catch(err => {console.error(err)
        })
}

module.exports = enviarMensagem