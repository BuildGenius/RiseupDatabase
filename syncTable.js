const syncSchema = require('./bin/lib/sqlClass/sqlSchema');
const config = require('./configuration.json')['min-project'];
const config_test = require('./configuration.json');

(async () => {
    let schema = new syncSchema(config['D365_20220831']);
    await schema.syncSchema('CUSTINVOICEJOUR');
})();