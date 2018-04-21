'use strict';

const memjs = require('memjs');
const Client = require('./lib/client');
let client = null;

function createClient(config) {
  if (client) {
    return client;
  }
  config.hosts = config.hosts || '';
  const hostStr = typeof config.hosts === 'string' ? config.hosts : config.hosts.join(',');
  const memClient = memjs.Client.create(hostStr, config.options);
  client = new Client(memClient);
  return client;
}

module.exports = app => {
  app.addSingleton('memcached', createClient);
};

module.exports.getMemCachedClient = () => {
  return client;
};
