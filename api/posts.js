const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

require('dotenv').config();

router.use(bodyParser.json());

// instagram
const Instagram = require('instagram-web-api');

const FileCookieStore = require('tough-cookie-filestore2');

const cookieStore = new FileCookieStore('../cookies.json');

router.get('/api/posts', (req, res) => {
    res.send(JSON.stringify({success: true}));
});

router.post('/api/posts', (req, res) => {

    const { name, limit } = req.body;

    const { apikey } = req.headers;

    if (process.env.API_KEY == apikey) {

        const { USER_NAME: username, PASS: pass } = process.env;

        const client = new Instagram({
            username: username,
            password: pass,
            cookieStore
        });

        (async () => {

            try {

                await client.login();

                let result = await client.getPhotosByUsername({ username: name, limit });

                result = JSON.stringify(result);

                res.status(200).send(result);

            } catch (err) {

                console.log(err);

            }

        })()

    }


});

module.exports = router;