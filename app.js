const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('users middleware', req.originalUrl);
    res.send('<p>This is a /users page</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware', req.originalUrl);
    res.send('<p>This is a / page</p>');    
});

app.listen(3000);
