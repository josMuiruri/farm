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

