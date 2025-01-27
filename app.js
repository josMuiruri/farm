const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/v1/products', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: products.length,
        data: {
            products
        }
    })
})

app.get('/api/v1/products/:id', (req, res) => {
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
})

app.post('api/v1/products', (req, res) => {

    const newId = products[products.length - 1].id + 1;
    const newProduct = Object.assign({ id: newId}, req.body);

    products.push(newProduct);
    res.status(201).json({
        status: 'success',
        data: {
            product: newProduct
        }
    })
})

const port = 3000;
app.listen(port, () => {
    console.log('App running on port ${port}...');
})

