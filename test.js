const cron = require('node-cron');
var Database = require('./bin/lib/sqlClass/Database');
var config = require('./configuration.json').ITECToAX_REP;
var AuthenticationContext = require('adal-node').AuthenticationContext;
var axios = require('axios').default;

var authorityHostUrl = 'https://login.windows.net';
var tenant = 'e70c048e-459f-48f1-98c2-1d31a45a2ca1'; // AAD Tenant name.
var authorityUrl = authorityHostUrl + '/' + tenant;
var applicationId = '0312818f-6364-497e-8405-1f622adca15b'; // Application Id of app registered under AAD.
var clientSecret = '~.Y8Q~GXzWZDcUBPLzrV4k83zpaMx0CZ1FXKVcQ0'; // Secret generated for app. Read this environment variable.
var resource = 'https://com7-dev3c0111afab8cb777devaos.axcloud.dynamics.com/'; // URI that identifies the resource for which the token is valid.

var context = new AuthenticationContext(authorityUrl);

(async () => {
    testtxt = 'test:';
    let num = 1512;
    let counterr = 0;
    let countcplt = 0;
    getAuthentication(function (accessToken) {
        for (let i = 0;i < 1000;i++) {
            var data = JSON.stringify({
                "dimensiontype": "GroupCategory",
                "value": `${num + i}`,
                "description": `Test by postman min(${i})`
            });

            axios({
                method: "POST",
                url: resource + "api/Services/COM7_InterfaceServiceGroup/COM7_FinancialDimension/CreateFinancialDimentsion",
                headers: {
                    'Authorization': 'Bearer ' + accessToken, 
                    'Content-Type': 'application/json'
                },
                data: data
            }).then((response) => {
                console.log(response);
                if (response.data !== 'completed') {
                    counterr++;
                    console.log(`err round ${i}: ` + counterr);
                } else {
                    countcplt++;
                    console.log(`completed round ${i}: ` + countcplt);
                }
            }).catch(err => {
                console.log(err);
            });
        }
    });
})();

function getAuthentication(callback){
    context.acquireTokenWithClientCredentials(resource, applicationId, clientSecret, function(err, tokenResponse) {
        if (err) {
          console.log('well that didn\'t work: ' + err.stack);
        } else {
          callback(tokenResponse.accessToken);
        }
    });    
}