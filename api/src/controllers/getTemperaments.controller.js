require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Temperament } = require("../db");

const getTemperaments = async () => {
  const { data } = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  let temperaments = [];
  data.map((elm) => {
    if (typeof elm.temperament === "string") {
      let aux = elm.temperament.split(", ");
      temperaments = [...temperaments, ...aux];
    }
  });
  const filtered = [...new Set(temperaments)];
  let aux = [];
  filtered.map((elm) => aux.push({ name: elm }));

  const isEmpty = await Temperament.findAll();
  if (isEmpty.length === 0) await Temperament.bulkCreate(aux);

  if (filtered.length > 0) return filtered;
  throw new Error("Sorry, something went wrong");
};

module.exports = getTemperaments;
