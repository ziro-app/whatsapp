const inputValidator = ({
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        recipient: { type: 'string', minLength: 11, maxLength: 13, pattern: '[0-9]+' },
        template_name: { type: 'string' },
        template_parameters: { type: 'object' }
      },
      required: ['recipient', 'template_name', 'template_parameters']
    }
  }
})

module.exports = inputValidator