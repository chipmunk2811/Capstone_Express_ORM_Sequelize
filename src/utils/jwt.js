const jwt = require('jsonwebtoken');
// tạo token
const generateToken = (data) => {
    // data: string, number, object, buffer => ko có tham số thứ 3, nếu có thì ko dc truyền string
    let token = jwt.sign(data, "express_orm", { algorithm: "HS256",expiresIn:"365d" });
    return token;
}

// kiểm tra token
const checkToken = (token) => {
    let data = jwt.verify(token, "express_orm");
    return data;
}

// giải mã token
const decodeToken = (token) => {
    return jwt.decode(token);
}

// Thêm token để truy cập
const privateAPI = (req, res, next) => {
    try {
        // kiểm tra token
        let { token } = req.headers;
        checkToken(token);
        next();
    } catch (err) {
        res.status(401).send("Vui lòng nhập token "+ err.message);
    }
}


module.exports = {
    generateToken,
    checkToken,
    decodeToken,
    privateAPI
}