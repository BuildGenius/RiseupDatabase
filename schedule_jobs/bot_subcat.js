var authentication = require('../controllers/DynamicsFOAuthenticate/Authentication');
var Credential = require('../configuration.json')['min-project'];
const SubCategory = require('../bin/lib/sqlClass/192.168.43.84-min-project/SubCategory');
const Category = require('../bin/lib/sqlClass/192.168.43.84-min-project/Category');
const derivedDimension = require('../bin/lib/sqlClass/192.168.43.84-min-project/DerivedDimension');
const axios = require('axios').default;
var mssql = require('mssql');

(async () => {
    var options = {
        clientID: '0312818f-6364-497e-8405-1f622adca15b',
        // autorityHostUrl: 'https://login.windows.net',
        clientSecret: '~.Y8Q~GXzWZDcUBPLzrV4k83zpaMx0CZ1FXKVcQ0',
        tenant: 'e70c048e-459f-48f1-98c2-1d31a45a2ca1',
        resource: 'https://com7-uat.sandbox.operations.dynamics.com/'
    };
    var auth = new authentication(options);

    auth.getContext().getToken(async (accessToken) => {
        console.log(accessToken);
        let subcat = new SubCategory(Credential);
        let cat = new Category(Credential);
        let dd = new derivedDimension(Credential);

        subcat.setLimit(10000);
        let subcatData = await subcat.select().get();
        
        cat.setLimit(10000);
        let catData = await cat.select().get();

        dd.setLimit(10000);
        let ddData = await dd.select().get();

        for (let i = 0;i < catData.length;i++) {
            await sendCategory(accessToken, catData[i]);
        }

        for (let i = 0;i < catData.length;i++) {
            await sendSubCategory(accessToken, subcatData[i]);
        }
    });
})();

async function sendCategory(accesstoken, catData) {
    await axios.post('https://com7-uat.sandbox.operations.dynamics.com/api/Services/COM7_InterfaceServiceGroup/COM7_FinancialDimension/CreateFinancialDimentsion',
    {
        "dimensiontype":"CATEGORY", 
        "value": catData.ID, 
        "description":catData.CategoryName
    }, {
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + accesstoken
        }
    }).catch((err) => {
        console.log(err);
    });
}

async function sendSubCategory(accesstoken, catData) {
    await axios.post('https://com7-uat.sandbox.operations.dynamics.com/api/Services/COM7_InterfaceServiceGroup/COM7_FinancialDimension/CreateFinancialDimentsion',
    {
        "dimensiontype":"CATEGORY", 
        "value": catData.ID, 
        "description":catData.SubCategoryName
    }, {
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + accesstoken
        }
    }).catch((err) => {
        console.log(err);
    });
}