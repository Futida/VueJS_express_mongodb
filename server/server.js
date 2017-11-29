const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    routes = require('./routes/routes');

mongoose.connect('mongodb://localhost:27017/local', { useMongoClient: true });
mongoose.Promise = global.Promise;

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('/users', routes);
const port = 4000;
const server = app.listen(port, function() {
    console.log('Listening on port ' + port);
});