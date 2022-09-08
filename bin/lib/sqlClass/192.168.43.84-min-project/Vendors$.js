const Database = require('../Database');

class Vendors$ extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Vendors$';
        this.column = {
            "VENDORORGANIZATIONNAME": {"dataType": "nvarchar", "maxLength":"255"},"VENDORSEARCHNAME": {"dataType": "nvarchar", "maxLength":"255"},"BPC_TAX_VATID": {"dataType": "nvarchar", "maxLength":"255"},"BPC_TAX_WHTID": {"dataType": "nvarchar", "maxLength":"255"}
        };
    }
}

module.exports = Vendors$;