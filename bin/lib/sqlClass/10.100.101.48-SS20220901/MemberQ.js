const Database = require('../Database');

class MemberQ extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'MemberQ';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Detail": {"dataType": "varchar", "maxLength":"300"},"MaxPoint": {"dataType": "int", "maxLength":"null"},"CalPoint": {"dataType": "int", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = MemberQ;