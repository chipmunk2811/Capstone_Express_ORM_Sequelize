const DataTypes = require("sequelize").DataTypes;
const _admin = require("./admin");
const _binh_luan = require("./binh_luan");
const _hinh_anh = require("./hinh_anh");
const _luu_anh = require("./luu_anh");
const _nguoi_dung = require("./nguoi_dung");

function initModels(sequelize) {
  const admin = _admin(sequelize, DataTypes);
  const binh_luan = _binh_luan(sequelize, DataTypes);
  const hinh_anh = _hinh_anh(sequelize, DataTypes);
  const luu_anh = _luu_anh(sequelize, DataTypes);
  const nguoi_dung = _nguoi_dung(sequelize, DataTypes);

  binh_luan.belongsTo(hinh_anh, { as: "hinh", foreignKey: "hinh_id"});
  hinh_anh.hasMany(binh_luan, { as: "binh_luans", foreignKey: "hinh_id"});
  luu_anh.belongsTo(hinh_anh, { as: "hinh", foreignKey: "hinh_id"});
  hinh_anh.hasMany(luu_anh, { as: "luu_anhs", foreignKey: "hinh_id"});
  binh_luan.belongsTo(nguoi_dung, { as: "nguoi_dung", foreignKey: "nguoi_dung_id"});
  nguoi_dung.hasMany(binh_luan, { as: "binh_luans", foreignKey: "nguoi_dung_id"});
  hinh_anh.belongsTo(nguoi_dung, { as: "nguoi_dung", foreignKey: "nguoi_dung_id"});
  nguoi_dung.hasMany(hinh_anh, { as: "hinh_anhs", foreignKey: "nguoi_dung_id"});
  luu_anh.belongsTo(nguoi_dung, { as: "nguoi_dung", foreignKey: "nguoi_dung_id"});
  nguoi_dung.hasMany(luu_anh, { as: "luu_anhs", foreignKey: "nguoi_dung_id"});

  return {
    admin,
    binh_luan,
    hinh_anh,
    luu_anh,
    nguoi_dung,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
