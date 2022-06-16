const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/add-product', (req, res, next) => {
    res.send(`
    <form action="/product" method="POST">
      <input type="text" name="title">
      <button type="Submit">Add product</button>
    </form>
    `);
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    fs.appendFile('products.txt', JSON.stringify(req.body), () => {});
    res.redirect('/');    
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express</h1>');    
});

app.listen(3000);
