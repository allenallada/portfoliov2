const express = require('express');
const { dirname } = require('path');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.listen(3000, () => console.log('server started'));
