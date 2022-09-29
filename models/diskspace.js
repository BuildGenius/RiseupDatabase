var dskspaces = require('../bin/lib/sqlClass/192.168.43.84-min-project/diskspace_log').dskspcs_log;
const config = require('../configuration.json')['min-project'];

class diskspace {
    dskspcs() {
        return new diskspace;
    }
    async store (options = {
        'ID': '',
        '[server name]': '',
        '[available disk space]': '',
        '[free disk space]': '',
        '[total disk space]': '',
        'CreateAt': ''
    }) {
        let  = dskspaces(config).insert().value().save();
    }
}

module.exports = diskspace