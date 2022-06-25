const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const storePath = path.join(
            path.dirname(require.main.filename), 
            'data', 
            'products.json'
        );
        fs.readFile(storePath, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(storePath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        const storePath = path.join(
            path.dirname(require.main.filename), 
            'data', 
            'products.json'
        );
        fs.readFile(storePath, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        })      
        
    }
}