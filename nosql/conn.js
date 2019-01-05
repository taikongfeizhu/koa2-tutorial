const mongoose = require('mongoose');

async function connect() {
  await mongoose.connect('mongodb://localhost:27017/database', {
    useNewUrlParser: true,
    user: '',
    pass: '',
    poolSize: 10
  });
};

async function close () {
  await mongoose.connection.close();
};

const db = mongoose.connection

db.on('error', err => {
  console.error(err)
});

db.on('open', () => {
  // console.log('connect success');
});

module.exports = {
  mongoose,
  connect,
  close
};
