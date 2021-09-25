const { _400Message } = require('../../../common/messages/messages')
const { createTodoSchema } = require('../../../schemas/todo')

module.exports.validator = async function (event, context) {
  try {
    await createTodoSchema.validate(event.body)
  } catch (error) {
    context.end()
    return _400Message(error.message)
  }
}
