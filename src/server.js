const express = require('express');
const bodyParser = require('body-parser');
const { createController } = require('./controllers/motorsControllers');

const app = express();

app.use(bodyParser.json());

app.post('/webmotors', createController);

app.listen(3000, () => console.log('Web Motors ouvindo na porta 3000'));