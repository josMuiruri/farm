const express = require('express');

const app = express();

app.get('/api/v1/products', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: products.length,
        data: {
            products
        }
    })
})

const port = 3000;
app.listen(port, () => {
    console.log('App running on port ${port}...');
})