const express = require('express');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoute');

const anamneseRoute = require('./routes/anmneseRoute');

const perguntasRoute = require('./routes/perguntasRoute');

const errorController = require('./controllers/errorController');

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/auth', authRoutes);

app.use('/anamneses', anamneseRoute);

app.use('/perguntas', perguntasRoute);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`Listening on port ${ports}`));