const initModels = require('../../models/init-models');
const sequelize = require('../../models/index');
const models = initModels(sequelize);
const fs = require('fs');
const { Op } = require("sequelize");

const uploadIMG = async (req, res) => {
    let file = req.file;
    let { nguoi_dung_id, mo_ta, ten_hinh } = req.body;
    try {
        let random_name = file.filename;
        let duong_dan = `http://localhost:8080/public/imgs/${random_name}`;
        let newIMG = { nguoi_dung_id, mo_ta, duong_dan, ten_hinh, random_name };
        await models.hinh_anh.create(newIMG);
        res.status(201).send(newIMG);
    } catch (error) {
        fs.unlinkSync(process.cwd() + "/public/imgs/" + file.filename);
        res.status(500).send("Lỗi FE " + error.message);
    }
};
const getIMG = async (req, res) => {
    try {
        const data = await models.hinh_anh.findAll();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("Lỗi FE " + error.message);
    }
};
const findIMG = async (req, res) => {
    try {
        let { keyword } = req.body;
        const data = await models.hinh_anh.findAll({ where: { ten_hinh: { [Op.substring]: keyword } } });
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("Lỗi FE " + error.message);
    }
};
const detailIMG = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await models.hinh_anh.findAll({ include: ['nguoi_dung','binh_luans'], where: { hinh_id: id } });
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("Lỗi FE " + error.message);
    }
};
const commentIMG = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await models.hinh_anh.findAll({ include: 'binh_luans', where: { hinh_id: id } });
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("Lỗi FE " + error.message);
    }
};
const saveIMG = async (req, res) => {
    try {
        const { id } = req.params;
        const { nguoi_dung_id } = req.body;
        const data = await models.luu_anh.findOne({ where: { hinh_id: id, nguoi_dung_id } });
        console.log(data)
        if (data) {
            const content = {
                statusCode: 200,
                message: "Ảnh đã được lưu",
                data: true
            }
            res.status(200).json(content);

        } else {
            const content = {
                statusCode: 200,
                message: "Ảnh chưa được lưu",
                data: false
            }
            res.status(200).json(content);
        }
    } catch (error) {
        res.status(500).send("Lỗi FE " + error.message);
    }
};
const postCommentIMG = async (req, res) => {
    try {
        const { id } = req.params;
        const { nguoi_dung_id, noi_dung } = req.body;
        const newComment = { nguoi_dung_id, noi_dung, hinh_id: id };
        const data = await models.binh_luan.create(newComment);
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send("Lỗi FE " + error.message);
    }

};
const deleteIMG = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await models.hinh_anh.findOne({ where: { hinh_id: id } })
        if (data) {
            await models.hinh_anh.destroy({ where: { hinh_id: id } })
            fs.unlinkSync(process.cwd() + "/public/imgs/" + data.random_name);
            res.send("Đã xóa hình");
        }else{
            res.status(400).send("Không có hình ảnh");
        }
    } catch (error) {
        res.status(500).send("Lỗi FE " + error.message);
    }
};
module.exports = { uploadIMG, getIMG, findIMG, detailIMG, commentIMG, saveIMG, postCommentIMG, deleteIMG };