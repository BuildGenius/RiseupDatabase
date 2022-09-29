var authentication = require('../controllers/DynamicsFOAuthenticate/Authentication');
var mssql = require('mssql');

(async () => {
    var options = {
        clientID: '0312818f-6364-497e-8405-1f622adca15b',
        // autorityHostUrl: 'https://login.windows.net',
        clientSecret: '~.Y8Q~GXzWZDcUBPLzrV4k83zpaMx0CZ1FXKVcQ0',
        tenant: 'e70c048e-459f-48f1-98c2-1d31a45a2ca1',
        resource: 'https://com7-dev3c0111afab8cb777devaos.axcloud.dynamics.com/'
    };
    var auth = new authentication(options);

    auth.getContext().getToken((accessToken) => {
        console.log(accessToken);
    });
})();