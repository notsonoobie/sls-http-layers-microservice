const { verifyToken } = require('../common/auth/jwthelpers')
const { _401Message } = require('../common/messages/messages')

const authGuard = async function (event, context) {
  try {
    const [bearer, token] = event.headers.Authorization?.split(' ')
    if (bearer === 'Bearer' && token) {
      const user = verifyToken(token)
      event.user = user
      event.token = token
    } else {
      throw new Error()
    }
  } catch (error) {
    context.end()
    return _401Message()
  }
}

module.exports = {
  authGuard,
}
