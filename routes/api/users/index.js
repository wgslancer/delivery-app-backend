const express = require('express');
const userRoute = express.Router();
const userController = require('../../../control/users/index.js');

const route = () => {
  userRoute.get('/', userController.getUsers);
  userRoute.get('/:id', userController.getUser);
  userRoute.post('/', userController.postUser);
  return userRoute;
};

module.exports = route;
