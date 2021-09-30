'use strict';

const mongoose = require('mongoose');
const { _200Message, _400Message } = require('../../common/messages/messages');
const { connectToDb } = require('../../configs/db/connectToDb');
const { TodoModel } = require('../../models/Todo');

module.exports.handler = async (event, context) => {
    // Make sure to add this so you can re-use `conn` between function calls.
    // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
    context.callbackWaitsForEmptyEventLoop = false;
    let decodedUser = JSON.parse(event.requestContext.authorizer.user);
    let req = event.body;
    let todoId = event.pathParameters.id;
    try {
        await connectToDb();
        let todo = await TodoModel.findOneAndUpdate(
            {
                _id: mongoose.Types.ObjectId(todoId),
                userId: mongoose.Types.ObjectId(decodedUser._id),
            },
            {
                $set: req,
            },
            {
                new: true,
            },
        ).lean();
        if (!todo) throw new Error('Todo Not Found');
        return _200Message(todo);
    } catch (error) {
        return _400Message(error.message);
    }
};
