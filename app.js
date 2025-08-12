const express = require('express');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const bookingController = require('./controllers/bookingController');

const app = express();

// middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.post(
  '/webhook-checkout',
  express.raw({ type: 'application/json' }),
  bookingController.webhookCheckout,
);

app.use(express.json());
app.use(cookieParser());

app.use(mongoSanitize());

// Routes

app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/bookings', bookingRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`can not find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
