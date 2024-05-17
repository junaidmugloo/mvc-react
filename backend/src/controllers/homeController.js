const User = require('../models/user');


exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};








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

exports.loginFunction = async (req, res) => {
  try {
    res.render('login'); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};