const db = require('../db');

const {
  getAllCustomers,
  getCustomerById,
  getCustomerByName,
  createCustomer,
  updateCustomer,
  deleteCustomer
} = db;

module.exports = {
  customer: async (ctx, next) => {
    const customers = await getAllCustomers();
    ctx.body = {
      status: 0,
      data: customers
    };
  },

  createCustomer: async (ctx, next) => {
    const customer = ctx.body;
    await createCustomer(id, customer);
    ctx.body = {
      status: 0
    };
  },

  updateCustomer: async (ctx, next) => {
    const id = ctx.params.id;
    const customer = ctx.body;
    await updateCustomer(id, customer);
    ctx.body = {
      status: 0
    };
  },

  getCustomerById: async (ctx, next) => {
    const id = ctx.params.id;
    const customer = await getCustomerById(id);
    ctx.body = {
      status: 0,
      data: customer
    };
  },

  getCustomerByName: async (ctx, next) => {
    const name = ctx.params.name;
    const customer = await getCustomerByName(name);
    ctx.body = {
      status: 0,
      data: customer
    };
  },

  deleteCustomerById: async (ctx, next) => {
    const id = ctx.params.id;
    await deleteCustomer(id);
    ctx.body = {
      status: 0
    };
  }
};