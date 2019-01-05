const Sequelize = require('sequelize');
const uuid = require('node-uuid');

const sequelize = new Sequelize('database', 'user', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize.authenticate().then(()=>{
  console.log('Connected')
}).catch(err=>{
  console.error('Connect failed')
});

const Customer = sequelize.define('customer', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true,
    allowNull: false,
    defaultValue: uuid.v1()
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sex: {
    type: Sequelize.ENUM(['man', 'women']),
    allowNull: false
  },
  address: {
    type: Sequelize.STRING
  },
  fullAddress: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  }
},{
  getterMethods: {
    fullAddress() {
      return `${this.getDataValue('country')} ${this.getDataValue('city')} ${this.getDataValue('address')}`;
    }
  }
});

/*
Customer.sync({ force: true }).then(()=>{
  return Customer.create({
    name: 'jian',
    sex: 'man',
    address: 'haidan zhongguanchun',
    fullAddress: 'beijing',
    email: 'huangjian1820',
    phone: '15811221820',
    country: 'china',
    city: 'beijing'
  });
});
*/

module.exports = {
  Customer
};
