const express = require('express');
const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add Product Page'});
});

router.post('/product', (req, res, next) => {
    // console.log(req.body);
    fs.appendFile('products.txt', JSON.stringify(req.body), () => {});
    res.redirect('/');    
});

module.exports = router;
