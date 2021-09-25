const { _400Message } = require('../../../common/messages/messages')
const { globalFilterSchema } = require('../../../schemas/global')

module.exports.validator = async function (event, context) {
  try {
    await globalFilterSchema.validate(event.body)
  } catch (error) {
    context.end()
    return _400Message(error.message)
  }
}
