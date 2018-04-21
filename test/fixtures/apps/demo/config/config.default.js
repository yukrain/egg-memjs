'use strict';

module.exports = () => {
  return {
    "memcached": {
      "client": {
         "hosts": ["127.0.0.1:11211"],
        "options": {
          "failover": true
        }
      }
    },
  };
};
