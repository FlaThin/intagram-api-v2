const express = require('express');

const cors = require('cors');

const posts = require('./api/posts');

const bodyParser = require('body-parser')

require('dotenv').config();

const app = express();

const port = 3000 || process.env.PORT;

app.use(cors({ origin: process.env.REMOTE_CLIENT_APP, credentials: true }));

app.use(bodyParser.json());

app.use('/', posts);

app.listen(port, () =>{

    console.log(`Server is running on port: ${port}`);

});


