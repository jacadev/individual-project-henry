const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "dog_temperament",
    {
      dogId: {
        field: "dog_id",
        type: DataTypes.STRING,
        allowNull: false,
      },
      temperamentId: {
        field: "temperament_id",
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
