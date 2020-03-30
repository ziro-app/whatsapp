const sendMessage = require('../apoio/sendMessage')
const main = require('../templates/main')
require('dotenv').config()

const sendWhats = async (event) => {
    try {
        const {destinatarios, mensagem} = event.body
        if(destinatarios && mensagem){
            const envios = destinatarios.map(async destinatario => await sendMessage(destinatario,mensagem))
            console.log(envios)
            return {
                statusCode: 200,
                body: JSON.stringify(envios)
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