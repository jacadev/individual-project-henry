const { postTemperaments } = require("../controllers");

const postTemperamentsHandler = async (req, res) => {  
  const { dogId, temperamentId } = req.body;
  try {
    const tempPosted = await postTemperaments(dogId, temperamentId);
    res.status(201).json(tempPosted);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postTemperamentsHandler;
