const CustomerController = require('../controller/customer');

module.exports = (router) => {

  router.get( '/customer', CustomerController.customer );

  router.get( '/customer/:id', CustomerController.getCustomerById);

  router.get( '/customer/name/:name', CustomerController.getCustomerByName);

  router.post( '/customer', CustomerController.createCustomer );

  router.put( '/customer/:id', CustomerController.updateCustomer );

  router.delete( '/customer/:id', CustomerController.deleteCustomerById);

};
