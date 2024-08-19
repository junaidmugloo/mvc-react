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


exports.categoryFunction = async (req, res) => {
  try {
    res.render('category');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.subcategoryFunction = async (req, res) => {
  try {
    res.render('subcategory');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.productattributeFunction = async (req, res) => {
  try {
    res.render('productattribute');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.editattributeFunction = async (req, res) => {
  try {
    res.render('editattribute');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.productlistFunction = async (req, res) => {
  try {
    res.render('productlist');
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