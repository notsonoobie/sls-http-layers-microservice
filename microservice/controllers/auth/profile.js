'use strict';

const { UserModel } = require('../../models/User');
const { connectToDb } = require('../../configs/db/connectToDb');
const { _201Message, _400Message } = require('../../common/messages/messages');

module.exports.handler = async (event, context) => {
    // Make sure to add this so you can re-use `conn` between function calls.
    // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
    context.callbackWaitsForEmptyEventLoop = false;
    let decodedUser = JSON.parse(event.requestContext.authorizer.user);
    try {
        await connectToDb();
        let user = await UserModel.findById(decodedUser._id).lean();
        return _201Message(user);
    } catch (error) {
        return _400Message();
    }
};
