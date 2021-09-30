const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
    {
        todo: {
            type: mongoose.SchemaTypes.String,
            required: true,
        },
        status: {
            type: mongoose.SchemaTypes.Boolean,
            required: true,
            default: false,
        },
        userId: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            ref: 'users',
        },
    },
    {
        timestamps: true,
        strict: true,
    },
);

TodoSchema.index({
    userId: 1,
    todo: 1,
});

TodoSchema.index({
    createdAt: -1,
});

const TodoModel = mongoose.model('todo', TodoSchema);

module.exports = {
    TodoModel,
    TodoSchema,
};
