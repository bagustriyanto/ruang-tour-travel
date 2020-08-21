const expressJwt = require('express-jwt');
const env = process.env.NODE_ENV || 'development';
const config = require('./config.json').token[env];
const { pathToRegexp } = require('path-to-regexp');

function jwt() {
  return expressJwt({
    secret: config.secret,
    audience: config.audience,
    issuer: config.issuer,
  }).unless({
    path: [
      '/api/login',
      '/shared/language',
      '/session',
      '///public/i',
      { url: pathToRegexp('/api/blog/:id'), method: 'GET' },
      { url: '/api/blog', method: 'GET' },
      { url: '/api', method: 'GET' },
      { url: '/api/registration', method: 'POST' },
      { url: '/api/destination', method: 'GET' },
      { url: pathToRegexp('/api/destination/:id'), method: 'GET' },
      { url: '/api/gallery', method: 'GET' },
      { url: pathToRegexp('/api/gallery/:id'), method: 'GET' },
      { url: '/api/package', method: 'GET' },
      { url: pathToRegexp('/api/package/:id'), method: 'GET' },
    ],
  });
}

module.exports = jwt;
