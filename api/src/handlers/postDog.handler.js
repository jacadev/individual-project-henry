const { postDog } = require("../controllers");

const postDogHandler = async (req, res) => {
  const {
    name,
    life_span,
    temperament,
    weight,
    height,
    image,
  } = req.body;
  try {
    const dogPosted = await postDog(
      name,
      life_span,
      temperament,
      weight,
      height,
      image
    );
    res.status(201).json(dogPosted);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postDogHandler;
