const Database = require('../Database');

class BPC_ASSETFIXEDASSETSERIALNUMSTAGING extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_ASSETFIXEDASSETSERIALNUMSTAGING';
        this.column = {
            "DEFINITIONGROUP": {"dataType": "nvarchar", "maxLength":"60"},"EXECUTIONID": {"dataType": "nvarchar", "maxLength":"90"},"ISSELECTED": {"dataType": "int", "maxLength":"null"},"TRANSFERSTATUS": {"dataType": "int", "maxLength":"null"},"ASSETID": {"dataType": "nvarchar", "maxLength":"20"},"SERIALNUM": {"dataType": "nvarchar", "maxLength":"25"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_ASSETFIXEDASSETSERIALNUMSTAGING;