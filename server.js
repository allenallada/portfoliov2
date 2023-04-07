const express = require('express');
const { dirname } = require('path');
const path = require('path');
const port = process.env.PORT || 3000;
console.log(port);
const app = express();

app.listen(port, () => console.log('server started'));

app.use(express.static(path.join(__dirname, 'build')));
