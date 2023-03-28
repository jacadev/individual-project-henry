const { Dog, Temperament } = require("../db");

const postDog = async (name, life_span, temperament, weight, height, image) => {
  const newDog = await Dog.create({
    name,
    life_span,
    weight,
    height,
    image,
  });

  for (const tempName of temperament) {
    const temp = await Temperament.findOne({ where: { name: tempName } });
    if (temp) {
      await newDog.addTemperament(temp);
    }
  }

  return newDog;
};

module.exports = postDog;
