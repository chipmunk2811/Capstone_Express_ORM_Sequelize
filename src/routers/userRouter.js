const express = require('express');
const { postLogin, postRegister,getCreateIMG,getSaveIMG,getUser,updateUser } = require('../controllers/user');
const { upload } = require('../utils/multer');
const userRouter = express.Router();

userRouter.post('/login',postLogin);
userRouter.post('/register',postRegister);
userRouter.get('/getUser',getUser)
userRouter.get('/getCreateIMG/:id',getCreateIMG);
userRouter.get('/getSaveIMG/:id',getSaveIMG);
userRouter.put('/updateUser/:id',upload.single('file'),updateUser)
module.exports = userRouter;