const Database = require('../Database');

class MSreplication_subscriptions extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'MSreplication_subscriptions';
        this.column = {
            "publisher": {"dataType": "nvarchar", "maxLength":"128"},"publisher_db": {"dataType": "nvarchar", "maxLength":"128"},"publication": {"dataType": "nvarchar", "maxLength":"128"},"independent_agent": {"dataType": "bit", "maxLength":"null"},"subscription_type": {"dataType": "int", "maxLength":"null"},"distribution_agent": {"dataType": "nvarchar", "maxLength":"128"},"time": {"dataType": "smalldatetime", "maxLength":"null"},"description": {"dataType": "nvarchar", "maxLength":"255"},"transaction_timestamp": {"dataType": "varbinary", "maxLength":"16"},"update_mode": {"dataType": "tinyint", "maxLength":"null"},"agent_id": {"dataType": "binary", "maxLength":"16"},"subscription_guid": {"dataType": "binary", "maxLength":"16"},"subid": {"dataType": "binary", "maxLength":"16"},"immediate_sync": {"dataType": "bit", "maxLength":"null"}
        };
    }
}

module.exports = MSreplication_subscriptions;