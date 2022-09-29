var base = require('./base.controllers');
var diskspaces = require('./performances/diskspaces');
var dskspaces = require('../models/diskspace');

class Apis extends base {
    constructor(params) {
        super(params);
        this.Convertor = new diskspaces();
    }

    async Store_diskspaces() {
        let dskspace = new dskspaces;
        // console.log(this.query('serverName'), this.data('diskspace'));
        let response = await dskspace.store({
            '[server name]': this.query('serverName'),
            '[available disk space]': this.data('diskspace').available,
            '[free disk space]': this.data('diskspace').free,
            '[total disk space]': this.data('diskspace').total,
            '[CreateAt]': this.data('Date')
        });

        return response;
    }
}

module.exports = Apis;
