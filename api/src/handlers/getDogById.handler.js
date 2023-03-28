const { getDogById } = require('../controllers');

const getDogByIdHandler = async (req, res) => {
  const { breed_id } = req.params;
  const source = isNaN(breed_id) ? 'db' : 'api';
  try {
    const dogById = await getDogById(breed_id, source);
    res.status(200).json(dogById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getDogByIdHandler;