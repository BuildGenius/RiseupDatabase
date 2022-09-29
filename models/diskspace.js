var dskspaces = require('../bin/lib/sqlClass/192.168.43.84-min-project/diskspace_log');
const config = require('../configuration.json')['min-project'];

class diskspace {
    dskspcs() {
        return new diskspace;
    }
    async store (options) {
        let log = new dskspaces(config);
        let response = await log.insert().values(options).save();
    
        return response.length > 0 ? {'status': true, data: response}:{'status': false, data: response};
    }
}

module.exports = diskspace