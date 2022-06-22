const products = [];

module.exports = class Product {
    constructor(title) {
        this._title = title;
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}