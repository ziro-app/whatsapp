require('dotenv').config() 
const accountSid = process.env.accountSid 
const authToken = process.env.authToken
const client = require('twilio')(accountSid, authToken)

const enviarMensagem = (numberTo,body) => {
    client.messages 
        .create({ 
            body: body, 
            from: `whatsapp:+${process.env.numero_ziro_sand}`,     
            to: `whatsapp:+${numberTo}`
        }) 
        .then(message => console.log(message.sid)) 
        .catch(err => {console.error(err)
        })
}

module.exports = enviarMensagem