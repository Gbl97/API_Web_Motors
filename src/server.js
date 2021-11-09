const express = require('express');
const bodyParser = require('body-parser');
const { createController, updateController } = require('./controllers/motorsControllers');

const app = express();

app.use(bodyParser.json());

app.post('/webmotors', createController);
app.put('/webmotors/:id', updateController);

app.listen(3000, () => console.log('Web Motors ouvindo na porta 3000'));