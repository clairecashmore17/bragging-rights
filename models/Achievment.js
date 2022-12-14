const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Achievements extends Model {}

Achievements.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "game",
        key: "id",
      },
    },

    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "achievement",
  }
);

module.exports = Achievements;
