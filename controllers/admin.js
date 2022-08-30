const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product Page',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect('/');    
}

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (editMode !== "true") {
        return res.redirect('/');
    }
    console.log(editMode);
    res.render('admin/edit-product', {
        pageTitle: 'Edit Product Page',
        path: '/admin/edit-product',
        isEditing: editMode
    });
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/admin-product-list', {
            pageTitle: 'Admin Products', 
            prods: products,
            path: '/admin/products'
        });
    });
}