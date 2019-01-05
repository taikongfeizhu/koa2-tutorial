const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient(6380, '127.0.0.1');
const hgetallAsync = promisify(client.hgetall).bind(client);

const store = {
  get: async (key, maxAge) => {
    return await hgetallAsync(key);
  },

  set: async (key, sess, maxAge) => {
    client.hmset(key, sess);
  },

  destroy: (key) => {
    client.hdel(key);
  }
};

client.on('error', (err) => {
  console.log(`Error ${err}`);
});

module.exports = {
  client,
  store
};
