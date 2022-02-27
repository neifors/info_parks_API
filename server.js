const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const parkRoutes = require('./controllers/parks');
app.use('/parks', parkRoutes);

app.get('/', (req, res) => {
   res.send('Hello there!');
});

app.post('/', (req, res) => {
   res.status(405).send('Not allowed!');
});

module.exports = app;
