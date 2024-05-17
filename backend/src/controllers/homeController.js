
exports.indexFunction = async (req, res) => {
  try {
    res.render('index'); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.aboutFunction = async (req, res) => {
  try {
    res.render('about'); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
