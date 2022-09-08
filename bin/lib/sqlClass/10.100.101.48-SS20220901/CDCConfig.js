const Database = require('../Database');

class CDCConfig extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'CDCConfig';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"TemplateName": {"dataType": "varchar", "maxLength":"100"},"SettlementDate": {"dataType": "varchar", "maxLength":"10"},"SettlementDateFormat": {"dataType": "varchar", "maxLength":"50"},"SettlementDateSeparator": {"dataType": "varchar", "maxLength":"10"},"BankID": {"dataType": "int", "maxLength":"null"},"TerminalID": {"dataType": "varchar", "maxLength":"20"},"TIDSecond": {"dataType": "varchar", "maxLength":"20"},"CreditCardType": {"dataType": "varchar", "maxLength":"10"},"TranDate": {"dataType": "varchar", "maxLength":"10"},"TranDateFormat": {"dataType": "varchar", "maxLength":"50"},"TranDateSeparator": {"dataType": "varchar", "maxLength":"10"},"TranAmount": {"dataType": "varchar", "maxLength":"10"},"Commission": {"dataType": "varchar", "maxLength":"10"},"ChargeAmount": {"dataType": "varchar", "maxLength":"10"},"VAT": {"dataType": "varchar", "maxLength":"10"},"CreditAmount": {"dataType": "varchar", "maxLength":"10"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = CDCConfig;