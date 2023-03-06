const express = require('express');
const path = require('path');

const rootDirectory = require('../helpers/path');

const router = express.Router();

// defining middleware for root
router.get("/", (req, res, next) => {
    console.log("Hello from express!");
    //OBS: __dirname points to the actual folder
    res.sendFile(path.join(rootDirectory ,'views', 'shop.html'));
});

module.exports = router;