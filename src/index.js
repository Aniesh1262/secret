const express = require('express');
const app = express();
const port =  3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Arithmetic Service - Hello World!');
});

app.get('/add/:num1/:num2', (req, res) => {
    res.json(Number(req.params.num1) + Number(req.params.num2));
});

app.listen(port);