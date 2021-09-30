const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: mongoose.SchemaTypes.String,
            required: true,
            unique: true,
        },
        password: {
            type: mongoose.SchemaTypes.String,
            required: true,
            select: false,
        },
        name: {
            type: mongoose.SchemaTypes.String,
            required: true,
        },
    },
    {
        timestamps: true,
        strict: true,
    },
);

UserSchema.post('save', function (error, doc, next) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        next(new Error('Email already exists.'));
    } else {
        next();
    }
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = {
    UserModel,
    UserSchema,
};
