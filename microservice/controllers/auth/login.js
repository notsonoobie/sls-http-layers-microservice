'use strict';

const { UserModel } = require('../../models/User');
const { connectToDb } = require('../../configs/db/connectToDb');
const { _201Message, _400Message } = require('../../common/messages/messages');
const { generateToken } = require('../../common/auth/jwthelpers');
const { verifyPassword } = require('../../common/auth/hashinghelpers');

module.exports.handler = async (event, context) => {
    // Make sure to add this so you can re-use `conn` between function calls.
    // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
    context.callbackWaitsForEmptyEventLoop = false;
    let req = event.body;
    try {
        await connectToDb();
        let user = await UserModel.findOne({ email: req.email })
            .select('+password')
            .lean();
        await verifyPassword(req.password, user.password);
        delete user.password;
        const token = generateToken(user);
        return _201Message({
            ...user,
            token,
        });
    } catch (error) {
        return _400Message(error.message);
    }
};
