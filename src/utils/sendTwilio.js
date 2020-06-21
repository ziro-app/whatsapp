require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilio = require('twilio')

const sendTwilio = async (recipient, body) => {
    try {
        const client = new twilio(accountSid, authToken)
        return await client.messages.create({
            body,
            from: `whatsapp:+${process.env.TWILIO_NUMBER_ZIRO}`,
            to: `whatsapp:+${recipient}`
        })
    } catch (error) {
        console.log('Error Log:', error)
        throw { statusCode: error.status || 400, body: error }
    }
}

module.exports = sendTwilio