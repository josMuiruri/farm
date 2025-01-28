exports.checkID = (req, res, next, val) => {
    console.log(`Product id is: ${val}`);
    
    if (req.params.id * 1 > products.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    next();
};

exports.getAllProducts = (req, res) => {

    res.status(200).json({
        status: 'success',
        results: products.length,
        data: {
            products
        }
    });
};

exports.getProduct = (req, res) => {
    const id = req.params.id * 1;
    const product = products.find(el => el.id === id);

    res.status(200).json({
        status: 'success',
        data: {
            product
        }
    })
};

exports.createProduct = (req, res) => {

    const newId = products[products.length - 1].id + 1;
    const newProduct = Object.assign({ id: newId}, req.body);

    products.push(newProduct);
    res.status(201).json({
        status: 'success',
        data: {
            product: newProduct
        }
    });
};
exports.updateProduct =  (req, res) => {
    
    res.status(200).json({
        status: 'success',
        data: {
            product: 'updated product'
        }
    });
};

exports.deleteProduct =  (req, res) => {
    
    res.status(204).json({
        status: 'success',
        data: null
    });
};