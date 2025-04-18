const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const contactRouter = require('./router/contactRouter');
const db = require('./dbConnection');

// Add middleware to parse JSON bodies
app.use(bodyParser.json());

// Use cors middleware
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/', contactRouter );

app.listen(3005);
console.log('Server is running on port 3005');