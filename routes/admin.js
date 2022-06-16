const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`
    <form action="/product" method="POST">
      <input type="text" name="title">
      <button type="Submit">Add product</button>
    </form>
    `);
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    fs.appendFile('products.txt', JSON.stringify(req.body), () => {});
    res.redirect('/');    
});

module.exports = router;
