CREATE PROCEDURE Incremental_push_CusGroup
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'CusGroup'
) ) 
BEGIN 
	INSERT INTO CusGroup (
		[TransactionID],
	[ID],
	[Name],
	[Detail],
	[Comment],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) SELECT 
		[TransactionID],
	[ID],
	[Name],
	[Detail],
	[Comment],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].CusGroup
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].CusGroup)
END
ELSE BEGIN 
	CREATE TABLE CusGroup (
		[TransactionID] int,
	[ID] int,
	[Name] varchar(200),
	[Detail] varchar(300),
	[Comment] varchar(300),
	[Status] int,
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO CusGroup (
		[TransactionID],
	[ID],
	[Name],
	[Detail],
	[Comment],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) 
	SELECT 
        [TransactionID],
	[ID],
	[Name],
	[Detail],
	[Comment],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].CusGroup
END