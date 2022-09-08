CREATE PROCEDURE Incremental_push_Bank
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'Bank'
) ) 
BEGIN 
	INSERT INTO Bank (
		[TransactionID],
	[ID],
	[AccountName],
	[BankName],
	[BankAccFormat],
	[BankAccount],
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
	[AccountName],
	[BankName],
	[BankAccFormat],
	[BankAccount],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].Bank
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].Bank)
END
ELSE BEGIN 
	CREATE TABLE Bank (
		[TransactionID] int,
	[ID] int,
	[AccountName] varchar(200),
	[BankName] varchar(200),
	[BankAccFormat] varchar(50),
	[BankAccount] varchar(50),
	[Status] int,
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO Bank (
		[TransactionID],
	[ID],
	[AccountName],
	[BankName],
	[BankAccFormat],
	[BankAccount],
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
	[AccountName],
	[BankName],
	[BankAccFormat],
	[BankAccount],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].Bank
END