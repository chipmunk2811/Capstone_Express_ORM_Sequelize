const express = require('express');
const rootRouter = express.Router();
const userRouter = require('./userRouter');
const imgRouter = require('./imgRouter');
rootRouter.use("/user",userRouter);
rootRouter.use("/img",imgRouter);
module.exports=rootRouter;