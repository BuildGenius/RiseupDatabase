const Database = require('../Database');

class STOCK_INVENTTRANS extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'STOCK_INVENTTRANS';
        this.column = {
            
        };
    }
}

module.exports = STOCK_INVENTTRANS;