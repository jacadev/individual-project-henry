require("dotenv").config();
const { API_KEY } = process.env;
const { Dog } = require("../db");
const axios = require("axios");
const {
  arrayCleaner,
  objTemplate,
  pagination,
  orderByName,
  orderByWeight,
  filterByTemp
} = require("../helpers");

const getAllDogs = async (limit, page, filter, created, weight, temp) => {
  const localDbRaw = await Dog.findAll(objTemplate);
  const localDb = arrayCleaner(localDbRaw);
  const { data } = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const apiDogs = arrayCleaner(data);

  if (created) {
    if (created.toLowerCase() === "db") return localDb;
    if (created.toLowerCase() === "api") return apiDogs;
  }

  const dbMerged = [...apiDogs, ...localDb];

  if(temp) {
    const tempFiltered = filterByTemp(temp, dbMerged)
    return tempFiltered
  }

  if (filter) {
    const nameOrdered = orderByName(filter, dbMerged);
    return nameOrdered;
  }

  if (weight) {
    const weightOrdered = orderByWeight(weight, dbMerged);
    return weightOrdered;
  }

  const paginationResult = pagination(limit, page, dbMerged);

  return paginationResult;
};

module.exports = getAllDogs;
