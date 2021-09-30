const { _400Message } = require('../../../common/messages/messages');
const { loginSchema } = require('../../../schemas/auth');

module.exports.validator = async function (event, context) {
    try {
        await loginSchema.validate(event.body);
    } catch (error) {
        context.end();
        return _400Message(error.message);
    }
};
