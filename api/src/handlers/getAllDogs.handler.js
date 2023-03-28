const { getAllDogs } = require("../controllers");

const getAllDogsHandler = async (req, res) => {
  const { limit, page, filter, created, weight, temp } = req.query;
  try {
    const allDogs = await getAllDogs(
      limit,
      page,
      filter,
      created,
      weight,
      temp
    );
    res.status(200).json(allDogs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getAllDogsHandler;
