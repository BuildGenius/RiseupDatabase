CREATE PROCEDURE Incremental_push_Deposit
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'Deposit'
) ) 
BEGIN 
	INSERT INTO Deposit (
		[TransactionID],
	[DepositID],
	[DepositBranch],
	[DocDate],
	[CusCode],
	[Detail],
	[Amount],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) SELECT 
		[TransactionID],
	[DepositID],
	[DepositBranch],
	[DocDate],
	[CusCode],
	[Detail],
	[Amount],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].Deposit
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].Deposit)
END
ELSE BEGIN 
	CREATE TABLE Deposit (
		[TransactionID] int,
	[DepositID] int,
	[DepositBranch] int,
	[DocDate] datetime,
	[CusCode] varchar(20),
	[Detail] varchar(300),
	[Amount] money,
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO Deposit (
		[TransactionID],
	[DepositID],
	[DepositBranch],
	[DocDate],
	[CusCode],
	[Detail],
	[Amount],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) 
	SELECT 
        [TransactionID],
	[DepositID],
	[DepositBranch],
	[DocDate],
	[CusCode],
	[Detail],
	[Amount],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].Deposit
END