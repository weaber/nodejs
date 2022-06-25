const fs = require('fs');
const path = require('path');

const storePath = path.join(
    path.dirname(require.main.filename), 
    'data', 
    'products.json'
);

const getProductsFromFile = (cb) => {    
    fs.readFile(storePath, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    })      
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(storePath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });        
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}