const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/database', {
  useNewUrlParser: true,
  user: '',
  pass: '',
  poolSize: 10
});

const db = mongoose.connection;

db.on('error', err => {
  console.error(err)
});

db.on('open', () => {
  // we are connected
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    unique: true
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Category = mongoose.model('Category', categorySchema);

const category = new Category({
  name: 'test',
  description: 'test category'
});

category.save(error => {
  if (error) {
    console.error(error)
    return
  }
  console.log('saved')
});

Category.create({
  name: 'test2',
  description: 'test category1'
}, (error, category) => {
  if (error) {
    console.error(error)
  } else {
    console.log(category)
  }
});

Category.remove({
  name: 'test'
}).then((res) => {
  console.log(res)
});

Category.where('createdAt')
 .lt(new Date())
 .select('name, description')
 .sort({createdAt: 1})
 .limit(10)
 .exec((err, res) => {
   console.log(res);
 });

Category.find({
  name: /^t/
}).then(res => {
  console.log(res)
}).catch(err => {
});
