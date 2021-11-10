const express = require('express');
const bodyParser = require('body-parser');
const { createController, updateController, readAllController, readByIdController } = require('./controllers/motorsControllers');

const app = express();

app.use(bodyParser.json());

app.post('/webmotors', createController);
app.get('/webmotors', readAllController);
app.get('/webmotors/:id', readByIdController);
app.put('/webmotors/:id', updateController);

app.listen(3000, () => console.log('Web Motors ouvindo na porta 3000'));