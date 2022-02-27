const express = require('express');
const router = express.Router();

const Park = require('../models/parks');

router.get('/', (req, res) => {
   const parksData = Park.all;
   res.send(parksData);
});

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
