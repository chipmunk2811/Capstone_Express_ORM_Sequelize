const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return admin.init(sequelize, DataTypes);
}

class admin extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'admin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
