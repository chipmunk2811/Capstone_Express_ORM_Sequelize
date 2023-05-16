const initModels = require('../../models/init-models');
const sequelize = require('../../models/index');
const { generateToken } = require('../../utils/jwt');
const models = initModels(sequelize);
const loginAdmin = async (req, res) => {
    try {
        let { user, password } = req.body;
        let checkUser = await models.admin.findOne({ where: { user } });
        if (checkUser) {
            if (password == checkUser.password) {
                let token = generateToken(checkUser.dataValues);
                res.status(201).send(token);
            } else {
                res.status(400).send("Password không đúng");
            }
        } else {
            res.status(400).send("User không tồn tại");
        }
    } catch (error) {
        res.status(500).send("Lỗi FE " + error.message)
    }
};
module.exports = { loginAdmin };