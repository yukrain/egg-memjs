'use strict';
const mm = require('egg-mock');
const assert = require('assert');

describe('test/iflowstory.test.js', () => {
  let app;
  let ctx;

  before(() => {
    mm.env('prod');
    app = mm.app({
      cache: false,
      baseDir: 'apps/demo',
    });
    return app.ready();
  });
  after(() => app.close());
  afterEach(mm.restore);

  describe('测试memcached', () => {

    it('测试ctx.saveToCache存储和ctx.loadFromCache读取', function* () {

      ctx = app.mockContext({});
      const data = Math.random();
      yield ctx.saveToCache('test', data);
      const result = yield ctx.loadFromCache('test');
      assert(result === data);
    });

    it('测试ctx.destroyCache删除', function* () {

      ctx = app.mockContext({});
      const data = Math.random();
      yield ctx.saveToCache('test', data);
      const result = yield ctx.destroyCache('test');
      assert(result === undefined);

    });

    it('测试app.memcached.set存储和app.memcached.get读取', function* () {

      ctx = app.mockContext({});
      const data = Math.random();
      yield app.memcached.set('test', data);
      const result = yield app.memcached.get('test');
      assert(result === data);

    });


    it('测试app.memcached.del删除', function* () {

      ctx = app.mockContext({});
      const data = Math.random();
      yield app.memcached.set('test', data);
      const result = yield app.memcached.del('test');
      assert(result === undefined);

    });

  });

});
