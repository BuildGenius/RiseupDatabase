CREATE PROCEDURE Incremental_push_ReceiptCancel
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'ReceiptCancel'
) ) 
BEGIN 
	INSERT INTO ReceiptCancel (
		[TransactionID],
	[ReceiptID],
	[ReceiptBranch],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) SELECT 
		[TransactionID],
	[ReceiptID],
	[ReceiptBranch],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].ReceiptCancel
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].ReceiptCancel)
END
ELSE BEGIN 
	CREATE TABLE ReceiptCancel (
		[TransactionID] int,
	[ReceiptID] int,
	[ReceiptBranch] int,
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO ReceiptCancel (
		[TransactionID],
	[ReceiptID],
	[ReceiptBranch],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) 
	SELECT 
        [TransactionID],
	[ReceiptID],
	[ReceiptBranch],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].ReceiptCancel
END