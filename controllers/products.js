const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product Page',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');    
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop', {
            pageTitle: 'The Shop', 
            prods: products,
            path: '/'
        });
    });
};