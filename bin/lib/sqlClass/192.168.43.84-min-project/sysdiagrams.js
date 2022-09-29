const Database = require('../Database');

class sysdiagrams extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'sysdiagrams';
        this.column = {
            "name": {"dataType": "nvarchar", "maxLength":"128"},"principal_id": {"dataType": "int", "maxLength":"null"},"diagram_id": {"dataType": "int", "maxLength":"null"},"version": {"dataType": "int", "maxLength":"null"},"definition": {"dataType": "varbinary", "maxLength":"-1"}
        };
    }
}

module.exports = sysdiagrams;