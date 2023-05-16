const initModels = require('../../models/init-models');
const sequelize = require('../../models/index');
const models = initModels(sequelize);
const brcypt = require('bcrypt');
const fs = require('fs')
const postLogin = async (req, res) => {
   try {
      const { email, mat_khau } = req.body;
      const data = await models.nguoi_dung.findOne({ where: { email } });
      if (data) {
         let checkPass = brcypt.compareSync(mat_khau, data.mat_khau);
         if (checkPass) {
            res.send(data).status(201);
         } else {
            res.status(400).send("Mật khẩu không đúng");
         }
      } else {
         res.status(400).send("Email không tồn tại");
      }
   } catch (error) {
      res.status(500).send("LỖI FE" + error.message);
   }
};

const postRegister = async (req, res) => {
   try {
      const { email, mat_khau, ho_ten, tuoi } = req.body;
      const data = await models.nguoi_dung.findOne({ where: { email } });
      if (!data) {
         const newData = { email, ho_ten, tuoi, mat_khau: brcypt.hashSync(mat_khau, 10) };
         await models.nguoi_dung.create(newData);
         res.status(200).send(newData);
      } else {
         res.status(400).send("Email đã tồn tại");
      }
   } catch (error) {
      res.status(500).send("Lỗi FE " + error.message);
   }
};
const getUser = async (req, res) => {
   try {
      const data = await models.nguoi_dung.findAll();
      res.status(200).send(data);
   } catch (error) {
      res.status(500).send("Lỗi FE " + error.message);
   }
}
const getCreateIMG = async (req, res) => {
   try {
      const { id } = req.params;
      const data = await models.nguoi_dung.findAll({ include: 'hinh_anhs', where: { nguoi_dung_id: id } });
      res.status(200).send(data);

   } catch (error) {
      res.status(500).send("Lỗi FE " + error.message);
   }
};
const getSaveIMG = async (req, res) => {
   try {
      const { id } = req.params;
      const data = await models.nguoi_dung.findAll({ include: 'luu_anhs', where: { nguoi_dung_id: id } });
      if (data) {
         res.status(200).send(data)
      } else {
         res.status(400).send("Không có data")
      }
   } catch (error) {
      res.status(500).send("Lỗi FE " + error.message);
   }
};
const updateUser = async (req, res) => {
   try {
      let message;
      const { id } = req.params;
      const { ho_ten, tuoi } = req.body;
      let file = req.file;
      const data = await models.nguoi_dung.findOne({ where: { nguoi_dung_id: id } });
      if (file) {
         let duong_dan = `/public/imgs/${file.filename}`;
         if (data.anh_dai_dien) {
            fs.unlinkSync(process.cwd() + data.anh_dai_dien);
            await models.nguoi_dung.update({ anh_dai_dien: duong_dan }, { where: { nguoi_dung_id: id } });
            message = 'Đã cập nhật thông tin';
         } else {
            await models.nguoi_dung.update({ anh_dai_dien: duong_dan }, { where: { nguoi_dung_id: id } });
            message = 'Đã cập nhật thông tin';
         }
      }
      if (ho_ten) {
         await models.nguoi_dung.update({ ho_ten }, { where: { nguoi_dung_id: id } });
         message = 'Đã cập nhật thông tin';
      }
      if (tuoi) {
         await models.nguoi_dung.update({tuoi}, { where: { nguoi_dung_id: id } });
         message = 'Đã cập nhật thông tin';
      }
      res.status(201).send(message);
   } catch (error) {
      res.status(500).send("Lỗi FE " + error.message);
   }
}
module.exports = { postLogin, postRegister, getCreateIMG, getSaveIMG, getUser, updateUser }