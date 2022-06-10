const express = require('express');

const cors = require('cors');

const posts = require('./api/posts');

const bodyParser = require('body-parser')

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(posts);

app.listen(port, () =>{

    console.log(`Server is running on port: ${port}`);

});


