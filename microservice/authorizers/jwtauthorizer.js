const { verifyToken } = require('../common/auth/jwthelpers')
const { buildIAMPolicy } = require('../common/utils/awsutils')

module.exports.authorizer = async (event, context) => {
  try {
    console.log('EVENT FROM AUTHORIZER', event, context)
    const [bearer, token] = event.authorizationToken?.split(' ')
    if (bearer === 'Bearer' && token) {
      const user = verifyToken(token)
      return context.succeed(
        buildIAMPolicy(user._id, 'Allow', event.methodArn, {
          user: JSON.stringify(user),
        }),
      )
    }
    // return context.fail('Unauthorized') // Doesn't work on production - @see https://medium.com/asked-io/serverless-custom-authorizer-issues-on-aws-57a40176f63f
    return context.succeed(buildIAMPolicy('user', 'Deny', event.methodArn))
  } catch (error) {
    console.log(error, '>>>')
    // return context.fail('Unauthorized')
    return context.succeed(buildIAMPolicy('user', 'Deny', event.methodArn))
  }
}
