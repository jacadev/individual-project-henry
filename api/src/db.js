const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const models = require("./models");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`,
  { logging: false, native: false }
);

for (const model in models) models[model](sequelize);
for (key in sequelize.models) {
  sequelize.models[key.charAt(0).toUpperCase() + key.slice(1)] =
    sequelize.models[key];
  delete sequelize.models[key];
}

const { Dog, Temperament, Dog_temperament } = sequelize.models;

Dog.belongsToMany(Temperament, { through: Dog_temperament });
Temperament.belongsToMany(Dog, { through: Dog_temperament });

module.exports = { ...sequelize.models, sequelize };
