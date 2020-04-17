const middy = require('@middy/core')
const jsonBodyParser = require('@middy/http-json-body-parser')
const validator = require('@middy/validator')
const httpErrorHandler = require('@middy/http-error-handler')
const { basicAuth } = require('@ziro/middleware')
const inputValidator = require('../utils/inputValidator')
const twilioTemplates = require('../utils/twilioTemplates')
const sendTwilio = require('../utils/sendTwilio')

console.log(basicAuth)

const sendTemplate = async event => {
  const { recipient, template_name, template_parameters } = event.body
  const body = twilioTemplates(template_name, template_parameters)
  const result = await sendTwilio(recipient, body)
  console.log(result)
  return {
    statusCode: 200,
    body: JSON.stringify(result.status, null, 4)
  }
}

const handler = middy(sendTemplate)
  .use(basicAuth) // authorizes request using Ziro's own token
  .use(jsonBodyParser()) // parses the request body when it's a JSON and converts it to an object
  .use(validator(inputValidator)) // validates the input
  .use(httpErrorHandler()) // handles common http errors and returns proper responses

module.exports = { handler }