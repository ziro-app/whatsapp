require('dotenv').config() 

const accountSid = process.env.accountSid 
const authToken = process.env.authToken 
const client = require('twilio')(accountSid, authToken) 

const enviarMensagem = async (destinatario, mensagem) => {
    try {
        return await client.messages 
            .create({ 
                body: mensagem, 
                from: `whatsapp:+${process.env.numero_ziro_sand}`,       
                to: `whatsapp:+${destinatario}` 
            })
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = enviarMensagem