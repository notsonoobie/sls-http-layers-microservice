'use strict'

const { _201Message, _400Message } = require('../../common/messages/messages')
const { connectToDb } = require('../../configs/db/connectToDb')
const { TodoModel } = require('../../models/Todo')

module.exports.handler = async (event, context) => {
  // Make sure to add this so you can re-use `conn` between function calls.
  // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
  context.callbackWaitsForEmptyEventLoop = false
  let decodedUser = JSON.parse(event.requestContext.authorizer.user)
  let req = { ...event.body, userId: decodedUser._id }
  try {
    await connectToDb()
    let todo = await TodoModel.create(req).then((res) => res.toObject())
    return _201Message(todo)
  } catch (error) {
    return _400Message(error.message)
  }
}
