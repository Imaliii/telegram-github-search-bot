'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var token = '7183275754:AAH1PFnOvi6-H6ZaOY0RrDGARNEKm1hmk7Q';
var github = {
  version: '3.0.0',
  // optional
  debug: true,
  protocol: 'https',
  host: 'api.github.com',
  pathPrefix: '',
  timeout: 5000,
  headers: {
    'user-agent': 'Telegram Github Search Bot'
  }
};

exports.default = {
  token: token,
  github: github
};
module.exports = exports['default'];
//# sourceMappingURL=config.js.map
