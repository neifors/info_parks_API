const express = require('express');
const router = express.Router();

const Park = require('../models/parks');

// Returning a list which each element is an object Park (raw)
router.get('/', (req, res) => {
   const parksData = Park.all;
   res.send(parksData);
});

// Render a '.ejs' file to show a list of all the parks (just name) into an html
/* router.get('/', (req, res) => {
   const parksData = Park.all;
   res.render('list.ejs', { parks : parksData})
}) */

router.get('/:name/', (req,res) => {
   const parkName = req.params.name;
   const parks = Park.findByName(parkName);
   res.send(parks)
});

router.get('/city/:city', (req,res) => {
   const cityName = req.params.city;
   const parks = Park.findByCity(cityName);
   res.send(parks)
});

module.exports = router;
