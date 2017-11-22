var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var users = new Schema({
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model('users', users);