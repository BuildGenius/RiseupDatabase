const Database = require('../Database');

class MSsubscription_agents extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'MSsubscription_agents';
        this.column = {
            "id": {"dataType": "int", "maxLength":"null"},"publisher": {"dataType": "nvarchar", "maxLength":"128"},"publisher_db": {"dataType": "nvarchar", "maxLength":"128"},"publication": {"dataType": "nvarchar", "maxLength":"128"},"subscription_type": {"dataType": "int", "maxLength":"null"},"queue_id": {"dataType": "nvarchar", "maxLength":"128"},"update_mode": {"dataType": "tinyint", "maxLength":"null"},"failover_mode": {"dataType": "bit", "maxLength":"null"},"spid": {"dataType": "int", "maxLength":"null"},"login_time": {"dataType": "datetime", "maxLength":"null"},"allow_subscription_copy": {"dataType": "bit", "maxLength":"null"},"attach_state": {"dataType": "int", "maxLength":"null"},"attach_version": {"dataType": "binary", "maxLength":"16"},"last_sync_status": {"dataType": "int", "maxLength":"null"},"last_sync_summary": {"dataType": "nvarchar", "maxLength":"128"},"last_sync_time": {"dataType": "datetime", "maxLength":"null"},"queue_server": {"dataType": "nvarchar", "maxLength":"128"}
        };
    }
}

module.exports = MSsubscription_agents;