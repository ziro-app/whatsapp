const sendMessage = require('../apoio/send-message')
const main = require('../templates/main')
require('dotenv').config()

const sendWhats = async () => {
    try {
        const corpo = event.body
        const {destinatario, mensagem} = corpo
        const enviar = sendMessage(destinatario,mensagem)
        console.log(event.queryStringParameter)
        return {
            statusCode: 200,
            body: JSON.stringify(enviar)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}

module.exports = { handler: main(sendWhats) }