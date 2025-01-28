const express = require('express');
const morgan = require('morgan');

const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;