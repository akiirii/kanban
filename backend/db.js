var locallydb = require('locallydb');
var db = new locallydb(__dirname + '/../db');
module.exports = db;
