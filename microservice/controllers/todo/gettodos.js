'use strict'

const mongoose = require('mongoose')
const { _200Message, _400Message } = require('../../common/messages/messages')
const { connectToDb } = require('../../configs/db/connectToDb')
const { TodoModel } = require('../../models/Todo')

module.exports.handler = async (event, context) => {
  // Make sure to add this so you can re-use `conn` between function calls.
  // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
  context.callbackWaitsForEmptyEventLoop = false
  let decodedUser = JSON.parse(event.requestContext.authorizer.user)
  let req = event.body
  try {
    await connectToDb()
    const skip = req.page * req.limit - req.limit
    let [data, count] = await Promise.all([
      TodoModel.find(
        {
          ...req.filters,
          userId: mongoose.Types.ObjectId(decodedUser._id),
        },
        {},
        { sort: req.sort },
      )
        .skip(skip)
        .limit(req.limit)
        .lean(),
      TodoModel.find({
        ...req.filters,
        userId: mongoose.Types.ObjectId(decodedUser._id),
      }).countDocuments(),
    ])
    return _200Message({
      data,
      count,
    })
  } catch (error) {
    return _400Message(error.message)
  }
}
