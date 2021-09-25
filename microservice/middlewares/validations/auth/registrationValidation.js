const { _400Message } = require('../../../common/messages/messages')
const { registrationSchema } = require('../../../schemas/auth')

module.exports.validator = async function (event, context) {
  try {
    await registrationSchema.validate(event.body)
  } catch (error) {
    context.end()
    return _400Message(error.message)
  }
}
