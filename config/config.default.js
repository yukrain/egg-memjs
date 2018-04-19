'use strict';

const path = require('path');

module.exports = antx => {
  return {
    memjs: {
      default:{
        "hosts": ['127.0.0.1:11211'],
        "options": {
          failover: false
        }
      } 
    },
  };
};
