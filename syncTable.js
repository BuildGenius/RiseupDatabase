const syncSchema = require('./bin/lib/sqlClass/sqlSchema');
const config = require('./configuration.json')['min-project'];

(async () => {
    let schema = new syncSchema(config);
    await schema.syncSchema('term');
})();