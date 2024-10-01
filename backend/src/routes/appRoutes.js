const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

//Home Routing 
router.get('/', homeController.indexFunction);
router.get('/category', homeController.categoryFunction);
router.get('/subcategory', homeController.subcategoryFunction);
router.get('/productattribute', homeController.productattributeFunction);
router.get('/editattribute', homeController.editattributeFunction);
router.get('/productlist', homeController.productlistFunction);
router.get('/limitedstock', homeController.limitedstockFunction);
router.get('/addnewproduct', homeController.addnewproductFunction);
router.get('/bulkimport', homeController.bulkimportFunction);
router.get('/bulkexport', homeController.bulkexportFunction);
router.get('/message', homeController.messageFunction);
router.get('/login', homeController.loginFunction);
router.get('/users', homeController.getAllUser);
router.post('/users', homeController.createUser);
router.get('/newSale', homeController.newSaleFunction);
router.get('/orders', homeController.ordersFunction);
router.get('/customerList', homeController.customerListFunction);
router.get('/addFund', homeController.addFundFunction);
router.get('/report', homeController.reportFunction);
router.get('/walletBonusSetup', homeController.walletBonusSetupFunction);
router.get('/report2', homeController.report2Function);
router.get('/productreviews', homeController.productreviewsFunction);
router.get('/subscribedEmails', homeController.subscribedEmailsFunction);
router.get('/deliveryManList', homeController.deliveryManListFunction);
router.get('/addNewDeliveryMan', homeController.addNewDeliveryManFunction);
router.get('/newJoiningRequest', homeController.newJoiningRequestFunction);
router.get('/deliveryManReviews', homeController.deliveryManReviewsFunction);
router.get('/employeeRoleSetup', homeController.employeeRoleSetupFunction);
router.get('/employeeList', homeController.employeeListFunction);
router.get('/addNewEmployee', homeController.addNewEmployeeFunction);






// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;