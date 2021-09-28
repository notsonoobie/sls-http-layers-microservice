'use strict'

const { UserModel } = require('../../models/User')
const { logger } = require('logging')
const { connectToDb } = require('../../configs/db/connectToDb')
const { _201Message, _400Message } = require('../../common/messages/messages')
const { generateToken } = require('../../common/auth/jwthelpers')
const { hashPassword } = require('../../common/auth/hashinghelpers')

module.exports.handler = async (event, context) => {
  // Make sure to add this so you can re-use `conn` between function calls.
  // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
  context.callbackWaitsForEmptyEventLoop = false
  let req = event.body
  try {
    logger('>>>>>>>>>>>>>>>>>>>>>>>>>>>> CALLING LOGGER FROM REGISTER')
    await connectToDb()
    const hashedPassword = await hashPassword(req.password)
    req.password = hashedPassword
    let user = await UserModel.create(req).then((res) => res.toObject())
    delete user.password
    const token = generateToken(user)
    return _201Message({
      ...user,
      token,
    })
  } catch (error) {
    return _400Message(error.message)
  }
}
