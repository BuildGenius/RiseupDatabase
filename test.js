var mssql = require('mssql');
var config = require('./configuration.json')['min-project'];
var data_raw_config = require('./configuration.json').DATA_RAW;
var message = require('./controllers/LineMessage/message');
var credentials = require('./configuration-line.json')['line-message'].development;
var disk = require('diskusage');
var os = require('os');
var cron = require('node-cron');

// (async () => {
//   let query = `USE msdb ; 
//   DECLARE @now INT = FORMAT(GETDATE(), 'yyyyMMdd');
  
//   DECLARE @job_history TABLE (
//       job_id NVARCHAR(250),
//       job_Name NVARCHAR(150),
//       run_status INT,
//       run_date INT,
//       run_time INT, 
//       run_duration INT,
//       operator_emailed NVARCHAR(150) NULL,
//       operator_netsend NVARCHAR(150) NULL,
//       operator_paged NVARCHAR(150) NULL,
//       retires_attempted INT,
//       [server] NVARCHAR(250)
//   )
  
//   insert into @job_history (job_id, job_Name, run_status, run_date, run_time, run_duration, operator_emailed, operator_netsend, operator_paged, retires_attempted, [server])
//   EXEC dbo.sp_help_jobhistory  
//       @start_run_date = @now,
//       @run_status = 1
  
//   insert into @job_history (job_id, job_Name, run_status, run_date, run_time, run_duration, operator_emailed, operator_netsend, operator_paged, retires_attempted, [server])
//   EXEC dbo.sp_help_jobhistory  
//       @start_run_date = @now,
//       @run_status = 0
  
//   SELECT DISTINCT jobh.job_Name, 
//   CASE 
//       WHEN jobh.run_status = 0
//       THEN 'failed'
//       ELSE 'completed'
//   END [status]
//   FROM @job_history jobh
//   WHERE jobh.job_Name NOT LIKE 'sys%'
//   AND jobh.run_time = (SELECT max(run_time) FROM @job_history WHERE job_id = jobh.job_id)
//   ORDER BY [status] ASC`
//   let conn = await mssql.connect(config);
//   let response = await conn.query(query);
//   let resData = response.recordset;
  
//   let str = 'Job Agent status.\r\n';
//   for (let i = 0;i < resData.length;i++) {
//       str += `${resData[i].status}! ${resData[i].job_Name}\r\n`
//   }

//   let msg = new message({
//       accessToken: credentials.accessToken,
//       channelSecret: credentials.channelSecret
//   });

//   msg.sendText('Ua0c2a3546f00c92b931fe127b7d30220', str);
// })();

// (async () => {
//     let query = `USE msdb ; 
//     DECLARE @now INT = FORMAT(GETDATE(), 'yyyyMMdd');
    
//     DECLARE @job_history TABLE (
//         job_id NVARCHAR(250),
//         job_Name NVARCHAR(150),
//         run_status INT,
//         run_date INT,
//         run_time INT, 
//         run_duration INT,
//         operator_emailed NVARCHAR(150) NULL,
//         operator_netsend NVARCHAR(150) NULL,
//         operator_paged NVARCHAR(150) NULL,
//         retires_attempted INT,
//         [server] NVARCHAR(250)
//     )
    
//     insert into @job_history (job_id, job_Name, run_status, run_date, run_time, run_duration, operator_emailed, operator_netsend, operator_paged, retires_attempted, [server])
//     EXEC dbo.sp_help_jobhistory  
//         @start_run_date = @now,
//         @run_status = 1
    
//     insert into @job_history (job_id, job_Name, run_status, run_date, run_time, run_duration, operator_emailed, operator_netsend, operator_paged, retires_attempted, [server])
//     EXEC dbo.sp_help_jobhistory  
//         @start_run_date = @now,
//         @run_status = 0
    
//     SELECT DISTINCT jobh.job_Name, 
//     CASE 
//         WHEN jobh.run_status = 0
//         THEN 'failed'
//         ELSE 'completed'
//     END [status]
//     FROM @job_history jobh
//     WHERE jobh.job_Name NOT LIKE 'sys%'
//     AND jobh.run_time = (SELECT max(run_time) FROM @job_history WHERE job_id = jobh.job_id)
//     ORDER BY [status] ASC`
//     let conn = await mssql.connect(data_raw_config);
//     let response = await conn.query(query);
//     let resData = response.recordset;
    
//     let str = 'Job Agent status.\r\n';
//     for (let i = 0;i < resData.length;i++) {
//         str += `${resData[i].status}! ${resData[i].job_Name}\r\n`
//     }
  
//     let msg = new message({
//         accessToken: credentials.accessToken,
//         channelSecret: credentials.channelSecret
//     });
  
//     msg.sendText('Ua0c2a3546f00c92b931fe127b7d30220', str);
//   })();

(async () => {
    console.log(cron.validate('30 11 * * *'));
})();