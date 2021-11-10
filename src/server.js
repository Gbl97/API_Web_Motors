const express = require('express');
const bodyParser = require('body-parser');
const { createController, updateController, readAllController, readByIdController, deleteController } = require('./controllers/motorsControllers');

const app = express();

app.use(bodyParser.json());

app.post('/webmotors', createController);
app.get('/webmotors', readAllController);
app.get('/webmotors/:id', readByIdController);
app.put('/webmotors/:id', updateController);
app.delete('/webmotors/:id', deleteController);

app.listen(3000, () => console.log('Web Motors ouvindo na porta 3000'));