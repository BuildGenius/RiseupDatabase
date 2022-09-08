const Database = require('../Database');

class term extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'term';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"TermName": {"dataType": "nvarchar", "maxLength":"75"},"Description": {"dataType": "text", "maxLength":"2147483647"},"ParentNode": {"dataType": "int", "maxLength":"null"},"DEEP": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = term;