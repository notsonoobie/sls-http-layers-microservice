'use strict'

const mongoose = require('mongoose')
const { _200Message, _400Message } = require('../../common/messages/messages')
const { connectToDb } = require('../../configs/db/connectToDb')
const { TodoModel } = require('../../models/Todo')

module.exports.handler = async (event, context) => {
  // Make sure to add this so you can re-use `conn` between function calls.
  // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
  context.callbackWaitsForEmptyEventLoop = false
  try {
    await connectToDb()
    let todo = await TodoModel.findOneAndDelete({
      _id: mongoose.Types.ObjectId(event.pathParameters.id),
      userId: mongoose.Types.ObjectId(event.user._id),
    }).lean()
    if (!todo) throw new Error('Todo Not Found')
    return _200Message(todo)
  } catch (error) {
    context.end()
    return _400Message(error.message)
  }
}
