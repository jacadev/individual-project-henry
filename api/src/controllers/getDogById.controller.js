require("dotenv").config();
const { API_KEY } = process.env;
const { Dog } = require("../db");
const axios = require("axios");
const { arrayCleaner, objTemplate } = require("../helpers");

const getDogById = async (breedId, source) => {
  if (source === "api") {
    const { data } = await axios.get(
      `https://api.thedogapi.com/v1/breeds/${breedId}?api_key=${API_KEY}`
    );

    if (Object.keys(data).length > 0) {
      const dogApiImage = await axios.get(
        `https://api.thedogapi.com/v1/images/${data.reference_image_id}?api_key=${API_KEY}`
      );
      const apiObjMerged = {
        ...data,
        image: {
          url: dogApiImage.data.url,
        },
      };

      return arrayCleaner([apiObjMerged])[0];
    }
    throw new Error(`Sorry, there is no dog with the id: ${breedId}`);
  } else {
    const localDbRaw = await Dog.findByPk(breedId, objTemplate);
    const localDb = arrayCleaner([localDbRaw]);
    return localDb[0];
  }
};

module.exports = getDogById;