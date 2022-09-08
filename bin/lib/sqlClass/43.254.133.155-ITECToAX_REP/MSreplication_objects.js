const Database = require('../Database');

class MSreplication_objects extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'MSreplication_objects';
        this.column = {
            "publisher": {"dataType": "nvarchar", "maxLength":"128"},"publisher_db": {"dataType": "nvarchar", "maxLength":"128"},"publication": {"dataType": "nvarchar", "maxLength":"128"},"object_name": {"dataType": "nvarchar", "maxLength":"128"},"object_type": {"dataType": "char", "maxLength":"2"},"article": {"dataType": "nvarchar", "maxLength":"128"}
        };
    }
}

module.exports = MSreplication_objects;