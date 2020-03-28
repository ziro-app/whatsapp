const sendMessage = require('../apoio/sendMessage')
const main = require('../templates/main')
require('dotenv').config()

const sendWhats = async (event) => {
    try {
        if(event.body.destinatario && event.body.mensagem){
            const enviar = await sendMessage(event.body.destinatario, event.body.mensagem)
            console.log(enviar)
            return {
                statusCode: 200,
                body: JSON.stringify(enviar)
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