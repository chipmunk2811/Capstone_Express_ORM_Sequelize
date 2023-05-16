const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return nguoi_dung.init(sequelize, DataTypes);
}

class nguoi_dung extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    nguoi_dung_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    mat_khau: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ho_ten: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tuoi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    anh_dai_dien: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nguoi_dung',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nguoi_dung_id" },
        ]
      },
    ]
  });
  }
}
