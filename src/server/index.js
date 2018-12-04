// you probably need local server to use some fake data to test your frontend functionality

const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.listen(8080, () => console.log('Listening on port 8080!'));
