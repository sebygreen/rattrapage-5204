const express = require('express');
const bodyParser = require('body-parser');

// routes
const weather = require('./routes/weather');

// express init
const app = express();

// body-parser init
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// general route
app.get('/', (req, res) => {
    res.send('Server home');
});

// weather route init
app.use('/weather', weather);

// re-route all non-existent to not found
app.use('*', (req, res) => {
    res.status(404).send('Not found');
});

app.listen(3030, () => {
    console.log('Server started on port http://localhost:3030');
});