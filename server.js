const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(cors());

const htmlIndexRoute = "C:\\Users\\Isabel\\Documents\\FUTUREPROOF\\JS\\API\\My API\\templates\\index.htm"
const cssRoute = "C:\\Users\\Isabel\\Documents\\FUTUREPROOF\\JS\\API\\My API\\templates\\styles.css"

const parkRoutes = require('./controllers/parks');
app.use('/parks', parkRoutes);

app.get('/', (req, res) => {
   res.sendFile(htmlIndexRoute);
});

app.get('/styles.css', (req, res) => {
   res.sendFile(cssRoute);
 });

app.post('/', (req, res) => {
   res.status(405).send('Not allowed!');
});

module.exports = app;
