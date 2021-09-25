'use strict'

const { UserModel } = require('../../models/User')
const { connectToDb } = require('../../configs/db/connectToDb')
const { _201Message, _400Message } = require('../../common/messages/messages')

module.exports.handler = async (event, context) => {
  // Make sure to add this so you can re-use `conn` between function calls.
  // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
  context.callbackWaitsForEmptyEventLoop = false
  let user = event.user
  try {
    await connectToDb()
    user = await UserModel.findById(user._id).lean()
    return _201Message(user)
  } catch (error) {
    context.end()
    return _400Message()
  }
}
