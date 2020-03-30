const sendMessage = require('../apoio/sendMessage')
const main = require('../templates/main')
require('dotenv').config()

const sendWhats = async (event) => {
    try {
        const {destinatarios, mensagem} = event.body
        if(destinatarios && mensagem){
            let envio = []
            for (const destinatario of destinatarios) {
                envio.push(await sendMessage(destinatario,mensagem))
            }
            return {
                statusCode: 200,
                body: JSON.stringify(envio)
            }
        }else{
            return {
                statusCode: 412,
                body: JSON.stringify('Body da requisição não encontrada.')
            }
        }
    }catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}

module.exports = { handler: main(sendWhats) }