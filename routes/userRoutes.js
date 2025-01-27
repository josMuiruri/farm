const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUsers)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = router;