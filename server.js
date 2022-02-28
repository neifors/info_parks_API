const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(cors());

const htmlIndexRoute = "C:\\Users\\Isabel\\Documents\\FUTUREPROOF\\JS\\API\\My API\\template\\index.htm"

const parkRoutes = require('./controllers/parks');
app.use('/parks', parkRoutes);

app.get('/', (req, res) => {
   res.sendFile(htmlIndexRoute);
});

app.post('/', (req, res) => {
   res.status(405).send('Not allowed!');
});

module.exports = app;
