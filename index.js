const express = require('express');
const bodyParser = require('body-parser');
const songsRouter = require('./songs-router');

const app = express();
app.use(bodyParser.json());

app.use('/api', songsRouter);

app.listen(3003, () => {
    console.log('Songs Service running on port 3003');
});