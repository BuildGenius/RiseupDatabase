const syncSchema = require('../bin/lib/sqlClass/sqlSchema');
const config = require('../configuration.json')['min-project'];
const config_test = require('../configuration.json');

(async () => {
    let schema = new syncSchema(config);
    await schema.syncSchema('diskspace_log');
})();