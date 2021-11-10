const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { createController, updateController, readAllController, readByIdController, deleteController } = require('./controllers/motorsControllers');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post('/webmotors', createController);
app.get('/webmotors', readAllController);
app.get('/webmotors/:id', readByIdController);
app.put('/webmotors/:id', updateController);
app.delete('/webmotors/:id', deleteController);

app.listen(PORT, () => console.log('Web Motors ouvindo na porta 3000'));