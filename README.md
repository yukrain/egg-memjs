# egg-memjs

一个基于memjs的egg插件
The egg memjs plugin.

你可以直接通过egg的context对象来操作缓存
You can get/set/delete in the egg's context object directly.

## 安装
```
$ npm i egg-memjs --save
```



## 开启插件
```javascript
// {app_root}/config/plugin.js
exports.memjs = {
  enable: true,
  package: 'egg-memjs'
};
```

## 配置
```javascript
// {app_root}/config/config.default.js 
exports.memjs = {
  "client": {
    "hosts": ['10.0.1.1:11211'],  // The memcached cluster list.
    "options":{
      // The options hash may contain the options:
      //
      // * `retries` - the number of times to retry an operation in lieu of failures
      // (default 2)
      // * `expires` - the default expiration in seconds to use (default 0 - never
      // expire). If `expires` is greater than 30 days (60 x 60 x 24 x 30), it is
      // treated as a UNIX time (number of seconds since January 1, 1970).
      // * `logger` - a logger object that responds to `log(string)` method calls.
      // * `failover` - whether to failover to next server. Defaults to false.
      // * `failoverTime` - how much to wait until retring a failed server. Default
      //                    is 60 seconds.
      //
      //   ~~~~
      //     log(msg1[, msg2[, msg3[...]]])
      //   ~~~~
      //
      //   Defaults to `console`.
      //
      // Or options for the servers including:
      // * `username` and `password` for fallback SASL authentication credentials.
      // * `timeout` in seconds to determine failure for operations. Default is 0.5
      //             seconds.
      // * 'conntimeout' in seconds to connection failure. Default is twice the value
      //                 of `timeout`.
      // * `keepAlive` whether to enable keep-alive functionality. Defaults to false.
      // * `keepAliveDelay` in seconds to the initial delay before the first keepalive
      //                    probe is sent on an idle socket. Defaults is 30 seconds.
    }
  }
};
```
#### 设置缓存：`[Promise] ctx.saveToCache(key, value, expires)` 
key: 键名，字符串
value: 键值
expires: 过期时间  

#### 加载缓存：`[Promise] ctx.loadFromCache(key)`
key: 键名，字符串 

#### 清除缓存：`[Promise] ctx.destroyCache(key)`   
key: 键名，字符串 