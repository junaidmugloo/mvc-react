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
exports.limitedstockFunction = async (req, res) => {
  try {
    res.render('limitedstock');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.addnewproductFunction = async (req, res) => {
  try {
    res.render('addnewproduct');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.bulkimportFunction = async (req, res) => {
  try {
    res.render('bulkimport');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.bulkexportFunction = async (req, res) => {
  try {
    res.render('bulkexport');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.messageFunction = async (req, res) => {
  try {
    res.render('message');
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
exports.newSaleFunction = async (req, res) => {
  try {
    res.render('newSale');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.ordersFunction = async (req, res) => {
  try {
    res.render('orders');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.customerListFunction = async (req, res) => {
  try {
    res.render('customerList');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.addFundFunction = async (req, res) => {
  try {
    res.render('addFund');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.reportFunction = async (req, res) => {
  try {
    res.render('report');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.walletBonusSetupFunction = async (req, res) => {
  try {
    res.render('walletBonusSetup');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.report2Function = async (req, res) => {
  try {
    res.render('report2');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.productreviewsFunction = async (req, res) => {
  try {
    res.render('productreviews');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.subscribedEmailsFunction = async (req, res) => {
  try {
    res.render('subscribedEmails');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deliveryManListFunction = async (req, res) => {
  try {
    res.render('deliveryManList');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.addNewDeliveryManFunction = async (req, res) => {
  try {
    res.render('addNewDeliveryMan');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.newJoiningRequestFunction = async (req, res) => {
  try {
    res.render('newJoiningRequest');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deliveryManReviewsFunction = async (req, res) => {
  try {
    res.render('deliveryManReviews');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.employeeRoleSetupFunction = async (req, res) => {
  try {
    res.render('employeeRoleSetup');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.employeeListFunction = async (req, res) => {
  try {
    res.render('employeeList');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.addNewEmployeeFunction = async (req, res) => {
  try {
    res.render('addNewEmployee');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
