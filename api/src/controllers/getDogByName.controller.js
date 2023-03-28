require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Op } = require("sequelize");
const { Dog } = require("../db");
const { arrayCleaner, objTemplate } = require("../helpers");

const getDogByName = async (dogName) => {
  if (dogName) {
    const localDbRaw = await Dog.findAll({
      ...objTemplate,
      where: {
        name: {
          [Op.iLike]: `%${dogName}%`,
        },
      },
    });
    const localDb = arrayCleaner(localDbRaw);
    const { data } = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const apiDogs = arrayCleaner(data);
    const dbMerged = [...apiDogs, ...localDb];
    const filtered = dbMerged.filter((found) =>
      found.name.toLowerCase().includes(dogName.toLowerCase())
    );
    if (filtered.length !== 0) return filtered;
    return filtered;
  }
  throw new Error(
    "You must provide at least a name by query to perform a search"
  );
};

module.exports = getDogByName;