var bot = require('../controllers/autobot.controllers');
var message = require('../controllers/LineMessage/message');
var credentials = require('../configuration-line.json');
var cron = require('node-cron');
var mssql = require('mssql');
var config = require('../configuration.json')['min-project'];

cron.schedule('1 1 9 * * * *', async () => {
    let autobot = new bot;
    let str = await autobot.chk_both_data_of_TempandRep();
    let msg = new message({
        accessToken: credentials.production.accessToken,
        channelSecret: credentials.production.channelSecret
    });

    msg.sendText(credentials.production['interface ItectoAx'], str);    
});

cron.schedule('1 30 9 * * * *', async () => {
let query = `USE msdb ; 
    DECLARE @now INT = FORMAT(DATEADD(DAY, -1, GETDATE()), 'yyyyMMdd');
    
    DECLARE @job_history TABLE (
        job_id NVARCHAR(250),
        job_Name NVARCHAR(150),
        run_status INT,
        run_date INT,
        run_time INT, 
        run_duration INT,
        operator_emailed NVARCHAR(150) NULL,
        operator_netsend NVARCHAR(150) NULL,
        operator_paged NVARCHAR(150) NULL,
        retires_attempted INT,
        [server] NVARCHAR(250)
    )
    
    insert into @job_history (job_id, job_Name, run_status, run_date, run_time, run_duration, operator_emailed, operator_netsend, operator_paged, retires_attempted, [server])
    EXEC dbo.sp_help_jobhistory  
        @start_run_date = @now,
        @run_status = 1
    
    insert into @job_history (job_id, job_Name, run_status, run_date, run_time, run_duration, operator_emailed, operator_netsend, operator_paged, retires_attempted, [server])
    EXEC dbo.sp_help_jobhistory  
        @start_run_date = @now,
        @run_status = 0
    
    SELECT DISTINCT job_Name, 
    CASE 
        WHEN run_status = 0
        THEN 'failed'
        ELSE 'completed'
    END [status]
    FROM @job_history
    WHERE job_Name NOT LIKE 'sys%'
    ORDER BY [status] ASC`
        let conn = await mssql.connect(config);
        let response = await conn.query(query);
        let resData = response.recordset;
        
        let str = 'Job Agent status.\r\n';
        for (let i = 0;i < resData.length;i++) {
            str += `${resData[i].status}! ${resData[i].job_Name}\r\n`
        }

        let msg = new message({
            accessToken: credentials.accessToken,
            channelSecret: credentials.channelSecret
        });

        msg.sendText('Ua0c2a3546f00c92b931fe127b7d30220', str);
});