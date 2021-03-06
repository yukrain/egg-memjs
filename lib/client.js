'use strict';
class Client {
  constructor(mem) {
    this.mem = mem;
  }

  /**
   * Get the value according to the key
   * @param {String} key
   * @return {*Promise}
   */
  get(key) {
    return new Promise((resolve, reject) => {
      this.mem.get(key, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  }


  /**
   *
   * @param {*String} key
   * @param {*String} value
   * @param {*Seconds} expires Optional. Will be 24 hours if undefined.
   */
  set(key, value, expires) {
    if (typeof expires === 'undefined') {
      expires = 3600 * 24;
    }

    return new Promise((resolve, reject) => {
      this.mem.set(key, JSON.stringify(value), { expires }, (err, data) => {
        if (err) {
          err.key = key;
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  /**
   * Delete the key/value in memcached.
   * @param {*String} key
   */
  del(key) {
    return new Promise((resolve, reject) => {
      this.mem.delete(key, err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = Client;
