const express = require('express');

const app = express();

app.use(express.json());

const getAllProducts = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: products.length,
        data: {
            products
        }
    });
};

const getProduct = (req, res) => {
    const id = req.params.id * 1;
    const product = products.find(el => el.id === id);

    if (!product) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    

    res.status(200).json({
        status: 'success',
        data: {
            product
        }
    })
};

const createProduct = (req, res) => {

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

const updateProduct =  (req, res) => {
    if (req.params.id * 1 > products.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            product: 'updated product'
        }
    });
};

const deleteProduct =  (req, res) => {
    if (req.params.id * 1 > products.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    res.status(204).json({
        status: 'success',
        data: null
    });
};

app.route('/api/v1/products').get(getAllProducts).post(createProduct);

app.route('/api/v1/products/:id').get(getProduct).patch(updateProduct).delete(deleteProduct)

const port = 3000;
app.listen(port, () => {
    console.log('App running on port ${port}...');
})

