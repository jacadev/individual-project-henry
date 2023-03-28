const { Dog_temperament } = require("../db");

const postTemperaments = async (dogId, temperamentId) =>
  await Dog_temperament.create({ dogId, temperamentId });

module.exports = postTemperaments;
