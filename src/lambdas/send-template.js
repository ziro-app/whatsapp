const middy = require('@middy/core')
const jsonBodyParser = require('@middy/http-json-body-parser')
const { preflight } = require('@ziro/middleware')
const { auth } = require('@ziro/middleware')
const { errorHandler } = require('@ziro/middleware')
const { cors } = require('@ziro/middleware')
const twilioTemplates = require('../utils/twilioTemplates')
const sendTwilio = require('../utils/sendTwilio')

const sendTemplate = async event => {
  const { recipient, template_name, template_parameters } = event.body
  const body = twilioTemplates(template_name, template_parameters)
  const result = await sendTwilio(recipient, body)
  console.log('Logging result:', result)
  const response = result.status ? result.status : result
  return {
    statusCode: 200,
    body: JSON.stringify(response, null, 4)
  }
}

const handler = middy(sendTemplate)
  .use(preflight)
  .use(auth)
  .use(jsonBodyParser())
  .use(errorHandler)
  .use(cors)

module.exports = { handler }