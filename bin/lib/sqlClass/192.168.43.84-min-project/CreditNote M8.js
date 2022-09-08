const Database = require('../Database');

class CreditNote M8 extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'CreditNote M8';
        this.column = {
            "Doc No": {"dataType": "nvarchar", "maxLength":"-1"},"CusCode": {"dataType": "nvarchar", "maxLength":"25"},"CustomerAccount": {"dataType": "nvarchar", "maxLength":"25"},"Product": {"dataType": "nvarchar", "maxLength":"-1"},"ItemNumber": {"dataType": "nvarchar", "maxLength":"-1"},"Default Dimension Value": {"dataType": "nvarchar", "maxLength":"-1"},"Return Number": {"dataType": "int", "maxLength":"null"},"Price Before VAT": {"dataType": "money", "maxLength":"null"},"Price After VAT": {"dataType": "money", "maxLength":"null"},"VAT Amount": {"dataType": "money", "maxLength":"null"},"CN Date": {"dataType": "date", "maxLength":"null"}
        };
    }
}

module.exports = CreditNote M8;