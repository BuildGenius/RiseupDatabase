var base = require('./base.controllers');
var diskspaces = require('./performances/diskspaces');
var dskspaces = require('../models/diskspace').dskspcs;

class Apis extends base {
    constructor(params) {
        super(params);
        this.Convertor = new diskspaces();
    }

    diskspaces() {
        console.log(this.Data);
        // dskspaces().store();
    }
}

module.exports = Apis;
