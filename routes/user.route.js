var express= require('express');
var jwt= require('jsonwebtoken');
var userRouter=express.Router();

var UserController = require('../controllers/user.controller');

var AuthConfig= require('../middlewares/auth.middleware');

// http://localhost:9017/user/register
userRouter.post('/register',UserController.registerUser);

userRouter.post('/login',UserController.loginUser);

userRouter.post('/checkusername',UserController.checkUsername);

userRouter.post('/changePassword',AuthConfig.authMiddleware,UserController.changePassword);

module.exports=userRouter;
