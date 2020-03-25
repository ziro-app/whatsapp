const sendMessage = require('../apoio/sendMessage')
const main = require('../templates/main')
require('dotenv').config()

const sendWhats = async () => {
    try {
        const corpo = event.body
        const {destinatario, mensagem} = corpo
        if(destinatario && mensagem){
            const enviar = sendMessage(destinatario, mensagem)
            console.log(event.body)
            return {
                statusCode: 200,
                body: JSON.stringify(enviar)
            }
        }else{
            return {
                statusCode:412,
                body: JSON.stringify({erro:404, mensagem:'Requisição feita sem destinatario ou mensagem'})
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