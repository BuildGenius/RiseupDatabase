const Database = require('../Database');

class BPC_BANKTAXWHTPRODUCTCODE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKTAXWHTPRODUCTCODE';
        this.column = {
            "PRODUCTCODE": {"dataType": "nvarchar", "maxLength":"15"},"INCOMETYPECODE": {"dataType": "nvarchar", "maxLength":"5"},"INCOMEDESCRIPTION": {"dataType": "nvarchar", "maxLength":"70"},"BANKTAXWITHHOLDCODEREFRECID": {"dataType": "bigint", "maxLength":"null"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"MODIFIEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"MODIFIEDBY": {"dataType": "nvarchar", "maxLength":"20"},"CREATEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"CREATEDBY": {"dataType": "nvarchar", "maxLength":"20"},"CREATEDTRANSACTIONID": {"dataType": "bigint", "maxLength":"null"},"SYSROWVERSIONNUMBER": {"dataType": "timestamp", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BANKTAXWHTPRODUCTCODE;