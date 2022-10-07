// HOW TO USE
// ================================================================

// ROUTE
// var logger = require('./utils/logger.js')
// 
// app.get('/', function (req, res) {
//   logger.compliantUser(req)
//   res.render('index')
// })

// ================================================================

var fs = require('fs');

var logger = {
  maliciousUser: function (req) {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    let datetime = new Date();

    fs.appendFile(
      __dirname + '/../../model/logs/index.txt',
      '================' +
      '\n\tDATETIME -> ' +
      datetime +
      '\n\tIP -> ' +
      ip +
      '\n\treq.url -> ' +
      req.url +
      '\n================',
      function (err) {
        if (err) throw err;
      }
    );

    fs.appendFile(
      __dirname + '/../../model/logs/maliciousUsers.txt',
      '================' +
      '\n\tDATETIME -> ' +
      datetime +
      '\n\tIP -> ' +
      ip +
      '\n\treq.url -> ' +
      req.url +
      '\n================',
      function (err) {
        if (err) throw err;
      }
    );
  },
  compliantUser: function (req) {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    let datetime = new Date();

    fs.appendFile(
      __dirname + '/../../model/logs/index.txt',
      '================' +
      '\n\tDATETIME -> ' +
      datetime +
      '\n\tIP -> ' +
      ip +
      '\n\treq.url -> ' +
      req.url +
      '\n================',
      function (err) {
        if (err) throw err;
      }
    );

    fs.appendFile(
      __dirname + '/../../model/logs/compliantUsers.txt',
      '================' +
      '\n\tDATETIME -> ' +
      datetime +
      '\n\tIP -> ' +
      ip +
      '\n\treq.url -> ' +
      req.url +
      '\n================',
      function (err) {
        if (err) throw err;
      }
    );
  },
  lostUser: function (req) {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    let datetime = new Date();

    fs.appendFile(
      __dirname + '/../../model/logs/index.txt',
      '================' +
      '\n\tDATETIME -> ' +
      datetime +
      '\n\tIP -> ' +
      ip +
      '\n\treq.url -> ' +
      req.url +
      '\n================',
      function (err) {
        if (err) throw err;
      }
    );

    fs.appendFile(
      __dirname + '/../../model/logs/lostUsers.txt',
      '================' +
      '\n\tDATETIME -> ' +
      datetime +
      '\n\tIP -> ' +
      ip +
      '\n\treq.url -> ' +
      req.url +
      '\n================',
      function (err) {
        if (err) throw err;
      }
    );
  },
};

module.exports = logger;
