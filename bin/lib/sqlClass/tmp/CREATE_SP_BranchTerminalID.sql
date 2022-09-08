CREATE PROCEDURE Incremental_push_BranchTerminalID
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'BranchTerminalID'
) ) 
BEGIN 
	INSERT INTO BranchTerminalID (
		[TransactionID],
	[Branch],
	[TerminalID],
	[TIDSecond],
	[EDCID],
	[Detail],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) SELECT 
		[TransactionID],
	[Branch],
	[TerminalID],
	[TIDSecond],
	[EDCID],
	[Detail],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].BranchTerminalID
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].BranchTerminalID)
END
ELSE BEGIN 
	CREATE TABLE BranchTerminalID (
		[TransactionID] int,
	[Branch] int,
	[TerminalID] varchar(20),
	[TIDSecond] varchar(20),
	[EDCID] int,
	[Detail] varchar(300),
	[Status] int,
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO BranchTerminalID (
		[TransactionID],
	[Branch],
	[TerminalID],
	[TIDSecond],
	[EDCID],
	[Detail],
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
	[Branch],
	[TerminalID],
	[TIDSecond],
	[EDCID],
	[Detail],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].BranchTerminalID
END