var disk = require('diskusage');
var os = require('os');
var axios = require('axios').default;
var cron = require('node-cron');
var { LineClient } = require('messaging-api-line');
var min_userid = 'Ua0c2a3546f00c92b931fe127b7d30220';
var client = new LineClient({
    "accessToken": "fDlox1shrxTaCZJnFaNl55aVNDh/M1fxAL59kJ/a3ZI3ATi5EU1fu5jKJvLRQMGB0ffLFAzhQ6uOY7Jqy2MprwtWXr7pCbJ7fTfeuZ9CNHG/nHz+4RwyfccMyXeI8gas2XJSmoEK0DE9NGC5paKeZwdB04t89/1O/w1cDnyilFU=",
    "channelSecret": "104a6fa81b58e4eb79ecc51fc0dd0230",
});

cron.schedule('1 1 9 * * * *', async function () {
    let d = new Date;
    let date = `${d.getFullYear()}-${('0' + (d.getMonth() + 1)).slice(-2)}-${('0' + d.getDate()).slice(-2)}`
    let path = os.platform() == 'win32' ? 'c:':'/';
    let diskspace = disk.checkSync(path);

    await axios.post('https://f90b-14-207-0-246.ap.ngrok.io/api/store_disk_log/lovelycat', {
        Date: date,
        diskspace: diskspace
    }).catch(err => {
        client.push(min_userid, [{
            type: 'text',
            text: err.code
        }])
    });
});
