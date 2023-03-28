const { getDogByName } = require('../controllers');

const getDogByNameHandler = async (req, res) => {
  const { q } = req.query;
  try {
    const dogByName = await getDogByName(q);
    res.status(200).json(dogByName);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getDogByNameHandler;