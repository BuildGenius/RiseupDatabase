const syncSchema = require('./bin/lib/sqlClass/sqlSchema');
const config = require('./configuration.json')['min-project'];
const config_test = require('./configuration.json').SS20220916;

(async () => {
    let schema = new syncSchema(config_test);
    await schema.syncSchema('CustTrans');
})();