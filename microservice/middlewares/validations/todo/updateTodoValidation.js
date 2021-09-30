const { _400Message } = require('../../../common/messages/messages');
const { updateTodoSchema } = require('../../../schemas/todo');

module.exports.validator = async function (event, context) {
    try {
        await updateTodoSchema.validate(event.body);
    } catch (error) {
        context.end();
        return _400Message(error.message);
    }
};
