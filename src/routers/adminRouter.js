const express = require('express');
const { loginAdmin } = require('../controllers/admin');
const adminRouter = express.Router();
adminRouter.post("/login",loginAdmin)
module.exports=adminRouter;