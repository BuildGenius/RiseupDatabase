var mssql = require('mssql');
var config = require('./configuration.json')['min-project'];
var message = require('./controllers/LineMessage/message');
var credentials = require('./configuration-line.json').development;
var disk = require('diskusage');
var os = require('os');

(async () => {
    let path = os.platform() === 'win32' ? 'c:':'/';

    disk.check(path, function(err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log('Available for user ' + (info.available * 0.000000001).toFixed(2) + ' Gb');
          console.log('free for user ' + (info.free * 0.000000001).toFixed(2) + ' Gb');
          console.log('Total for user ' + (info.total * 0.000000001).toFixed(2) + ' Gb');
        }
    });
})();