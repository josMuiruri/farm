const express = require('express');
const morgan = require('morgan');

const app = express();

// middlewares
app.use(morgan('dev'))
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

// Routes


const productRouter = express.Router();
const userRouter = express.Router();

productRouter.route('/').get(getAllProducts).post(createProduct);

productRouter.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

userRouter.route('/').get(getAllUsers).post(createUser);

userRouter.route('/:id').get(getUsers).patch(updateUser).delete(deleteUser);

app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})

