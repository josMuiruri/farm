const { default: mongoose } = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'A product name should not exceed 50 characters '],
    minlength: [5, 'A product name should not be less than 5 characters '],
  },
  slug: String,
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  ratingsAverage: {
    type: Number,
    default: 2.5,
    max: [5, 'rating must be below or equal to 5'],
    min: [1, 'rating must be above or equal 1.0'],
    set: (val) => Math.round(val * 10) / 10,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price'],
  },
  description: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },

  productTimeSold: {
    type: Date,
    // required: [true, 'The time when a product was sold must be present'],
  },
  salesInMonth: {
    type: String,
    default: 0,
  },
});
