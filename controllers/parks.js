const express = require('express');
const router = express.Router();

const Park = require('../models/parks');

router.get('/', (req, res) => {
   const parksData = Park.all;
   res.send(parksData);
});


module.exports = router;
