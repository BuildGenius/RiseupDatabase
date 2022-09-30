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
    async getAvailableSpace(serverName) {
        let log = new dskspaces(config);
        log.setLimit(1);
        let response = await log.select('[available disk space]').where('[server name]', serverName).desc('ID').get();

        return response;
    }
    async getTotalSpace(serverName) {
        let log = new dskspaces(config);
        log.setLimit(1);
        let response = await log.select('[total disk space]').where('[server name]', serverName).desc('ID').get();

        return response;
    }
    async getdailyDataSize(serverName) {
        let log = new dskspaces(config);
        let response = await log.run(`EXEC [avgDatasize] @serverName = '${serverName}'`);

        return response.recordset;
    }
}

module.exports = diskspace