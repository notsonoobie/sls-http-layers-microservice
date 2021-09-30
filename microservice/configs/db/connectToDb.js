const mongoose = require('mongoose');

let _conn = null;
const _uri = process.env.MONGO_URI;

const connectToDb = async function () {
    try {
        if (_conn == null) {
            _conn = mongoose.connect(_uri, {
                // and tell the MongoDB driver to not wait more than 5 seconds
                // before erroring out if it isn't connected
                serverSelectionTimeoutMS: 5000,
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            // `await`ing connection after assigning to the `_conn` variable
            // to avoid multiple function calls creating new connections
            await _conn;
        }
        return _conn;
    } catch (error) {
        return Promise.reject('Error connecting to DB');
    }
};

module.exports = {
    connectToDb,
};
