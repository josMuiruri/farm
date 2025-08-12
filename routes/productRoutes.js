const express = require('express');
const productController = require('./../controllers/productController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/top-10-cheapest')
  .get(productController.aliasTopProducts, productController.getAllProducts);

router.route('/product-stats').get(productController.getProductStats);

router
  .route('/')
  .get(productController.getAllProducts)
  .post(
    authController.protect,
    authController.restrictPro('admin'),
    productController.createProduct,
  );

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(
    authController.protect,
    authController.restrictPro('admin'),
    productController.updateProduct,
  )
  .delete(
    authController.protect,
    authController.restrictPro('admin'),
    productController.deleteProduct,
  );

module.exports = router;
