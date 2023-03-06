const express = require('express');
const path = require('path');

const rootDirectory = require('../helpers/path');

const router = express.Router();

// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.status(200).sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
});

// POST /admin/product
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router