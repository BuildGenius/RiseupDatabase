var config = require('../configuration.json');
var mssql = require('mssql');

class autobot {
    autobot() {
        this.temp_config = '';
        this.rep_config = '';
        return new autobot;
    }
    async chk_number_of_repData() {
        let conn = await mssql.connect(config.DIY_ITEC);
        let querytxt = `SELECT * FROM (
            SELECT 'Master Bank' [Key], COUNT(*) numberOfdata FROM Bank
            WHERE CAST(Bank.CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'Branch Terminal ID' [Key], COUNT(*) numberOfdata FROM BranchTerminalID
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'PO Receipt' [Key], COUNT(*) numberOfdata FROM Buy
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'PO Force' [Key], COUNT(*) numberOfdata FROM BuyCancel
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'Credit Note' [Key], COUNT(*) numberOfdata FROM CreditNote
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Master Customer Group' [Key], COUNT(*) numberOfdata FROM CusGroup
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Master Customer' [key], COUNT(*) numberOfdata FROM Customer
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'Deposit' [Key], COUNT(*) numberOfdata FROM Deposit
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'EDC' [Key], COUNT(*) numberOfdata FROM EDC
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Item Movement' [Key], COUNT(*) numberOfdata FROM InventoryInOut
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Sales Order' [Key], COUNT(*) numberOfdata FROM Invoice
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'Petty Cash' [Key], COUNT(*) numberOfdata FROM PettyCash
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'PO' [Key], COUNT(*) numberOfdata FROM PO
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'PO Force' [Key], COUNT(*) numberOfdata FROM POForce
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Master Product' [Key], COUNT(*) numberOfdata FROM Product
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Recceipt Invoice' [Key], COUNT(*) numberOfdata FROM Receipt
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Cancel Receipt' [Key], COUNT(*) numberOfdata FROM ReceiptCancel
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Receipt Deposit' [Key], COUNT(*) numberOfdata FROM ReceiptDeposit
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'Stock In' [Key], COUNT(*) numberOfdata FROM SI
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Vendor' [Key], COUNT(*) numberOfdata FROM vendor
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        ) AS status_rep
        PIVOT (MAX([numberOfdata]) FOR [Key] in (
        [Master Bank]
        ,[Branch Terminal ID]
        ,[PO Receipt]
        ,[PO Force]
        ,[Credit Note]
        ,[Master Customer Group]
        ,[Master Customer]
        ,[Deposit]
        ,[EDC]
        ,[Item Movement]
        ,[Sales Order]
        ,[Petty Cash]
        ,[PO]
        ,[Master Product]
        ,[Recceipt Invoice]
        ,[Cancel Receipt]
        ,[Receipt Deposit]
        ,[Stock In],[Vendor])
        ) Pivot_rep_status`;

        let statusTable = await conn.query(querytxt);

        return statusTable.recordset[0];
    }
    async chk_number_of_tempData() {
        let conn = await mssql.connect(config.ITECToAX_TEMP);
        let querytxt = `SELECT * FROM (
            SELECT 'Master Bank' [Key], COUNT(*) numberOfdata FROM Bank
            WHERE CAST(Bank.CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'Branch Terminal ID' [Key], COUNT(*) numberOfdata FROM BranchTerminalID
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'PO Receipt' [Key], COUNT(*) numberOfdata FROM Buy
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'PO Force' [Key], COUNT(*) numberOfdata FROM BuyCancel
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'Credit Note' [Key], COUNT(*) numberOfdata FROM CreditNote
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Master Customer Group' [Key], COUNT(*) numberOfdata FROM CusGroup
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Master Customer' [key], COUNT(*) numberOfdata FROM Customer
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'Deposit' [Key], COUNT(*) numberOfdata FROM Deposit
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'EDC' [Key], COUNT(*) numberOfdata FROM EDC
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Item Movement' [Key], COUNT(*) numberOfdata FROM InventoryInOut
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Sales Order' [Key], COUNT(*) numberOfdata FROM Invoice
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'Petty Cash' [Key], COUNT(*) numberOfdata FROM PettyCash
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'PO' [Key], COUNT(*) numberOfdata FROM PO
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'PO Force' [Key], COUNT(*) numberOfdata FROM POForce
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Master Product' [Key], COUNT(*) numberOfdata FROM Product
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Recceipt Invoice' [Key], COUNT(*) numberOfdata FROM Receipt
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Cancel Receipt' [Key], COUNT(*) numberOfdata FROM ReceiptCancel
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Receipt Deposit' [Key], COUNT(*) numberOfdata FROM ReceiptDeposit
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        
            UNION ALL
        
            SELECT 'Stock In' [Key], COUNT(*) numberOfdata FROM SI
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
            
            UNION ALL
        
            SELECT 'Vendor' [Key], COUNT(*) numberOfdata FROM vendor
            WHERE CAST(CrTime as date) = CAST(DATEADD(DAY, -1, GETDATE()) as date)
        ) AS status_rep
        PIVOT (MAX([numberOfdata]) FOR [Key] in (
        [Master Bank]
        ,[Branch Terminal ID]
        ,[PO Receipt]
        ,[PO Force]
        ,[Credit Note]
        ,[Master Customer Group]
        ,[Master Customer]
        ,[Deposit]
        ,[EDC]
        ,[Item Movement]
        ,[Sales Order]
        ,[Petty Cash]
        ,[PO]
        ,[Master Product]
        ,[Recceipt Invoice]
        ,[Cancel Receipt]
        ,[Receipt Deposit]
        ,[Stock In],[Vendor])
        ) Pivot_rep_status`;

        let statusTable = await conn.query(querytxt);

        return statusTable.recordset[0];
    }
    async chk_both_data_of_TempandRep() {
        this.rep = await this.chk_number_of_repData();
        this.temp = await this.chk_number_of_tempData();
        let str = '';

        for (let i = 0;i < Object.values(this.rep).length;i++) {
            if (Object.values(this.temp)[i] !== Object.values(this.rep)[i]) {
                if (str.length == 0) {
                    let d = new Date;
                    let day = ('0' + d.getDate()).slice(-2);
                    let month = ('0' + (d.getMonth() + 1)).slice(-2);
                    let year = d.getFullYear();
                    str += 'Itec temp replicate @' + `${day}/${month}/${year}` + ' Failed!\r\n\n';
                }
                str += 'Lost ' + Object.keys(this.temp)[i] + ': ' + (Object.values(this.temp)[i] - Object.values(this.rep)[i]) + ' rows\r\n';
            } else {
                if (str.length == 0) {
                    let d = new Date;
                    let day = ('0' + d.getDate()).slice(-2);
                    let month = ('0' + (d.getMonth() + 1)).slice(-2);
                    let year = d.getFullYear();
                    str += 'Itec temp replicate @' + `${day}/${month}/${year}` + ' completed!\r\n\n';
                }
                str += 'Replicate ' + Object.keys(this.temp)[i] + ' Completed ' + Object.values(this.temp)[i].toLocaleString("en-US") + ' rows.\r\n\n';
            }
        }

        return str;
    }
}

module.exports = autobot;