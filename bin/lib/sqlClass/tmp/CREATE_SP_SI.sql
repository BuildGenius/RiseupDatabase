CREATE PROCEDURE Incremental_push_SI
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'SI'
) ) 
BEGIN 
	INSERT INTO SI (
		[TransactionID],
	[SIID],
	[SIBranch],
	[Product],
	[Serial],
	[SOID],
	[SOBranch],
	[Status],
	[Number],
	[SIComment],
	[SOComment],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) SELECT 
		[TransactionID],
	[SIID],
	[SIBranch],
	[Product],
	[Serial],
	[SOID],
	[SOBranch],
	[Status],
	[Number],
	[SIComment],
	[SOComment],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].SI
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].SI)
END
ELSE BEGIN 
	CREATE TABLE SI (
		[TransactionID] int,
	[SIID] int,
	[SIBranch] int,
	[Product] varchar(40),
	[Serial] varchar(40),
	[SOID] int,
	[SOBranch] int,
	[Status] int,
	[Number] int,
	[SIComment] varchar(300),
	[SOComment] varchar(300),
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO SI (
		[TransactionID],
	[SIID],
	[SIBranch],
	[Product],
	[Serial],
	[SOID],
	[SOBranch],
	[Status],
	[Number],
	[SIComment],
	[SOComment],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) 
	SELECT 
        [TransactionID],
	[SIID],
	[SIBranch],
	[Product],
	[Serial],
	[SOID],
	[SOBranch],
	[Status],
	[Number],
	[SIComment],
	[SOComment],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].SI
END