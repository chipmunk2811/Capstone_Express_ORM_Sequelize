const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return luu_anh.init(sequelize, DataTypes);
}

class luu_anh extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    luu_anh_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nguoi_dung_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'nguoi_dung',
        key: 'nguoi_dung_id'
      }
    },
    hinh_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'hinh_anh',
        key: 'hinh_id'
      }
    },
    ngay_luu: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'luu_anh',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "luu_anh_id" },
        ]
      },
      {
        name: "nguoi_dung_id",
        using: "BTREE",
        fields: [
          { name: "nguoi_dung_id" },
        ]
      },
      {
        name: "hinh_id",
        using: "BTREE",
        fields: [
          { name: "hinh_id" },
        ]
      },
    ]
  });
  }
}
