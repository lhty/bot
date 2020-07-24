require("dotenv").config();

module.exports = Object.freeze({
  token: process.env.TELEGRAM_TOKEN,
  // "path": "./certs/",
  // "key": "file.key",
  // "cert": "file.crt",
  // "ca": "file.ca",
  port: 8443,
  // "domain": "domain.com",
  // "whpath": "/secret-path",
  // "admin": 123456789
});
