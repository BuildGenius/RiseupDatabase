CREATE PROCEDURE Incremental_push_BuyCancel
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'BuyCancel'
) ) 
BEGIN 
	INSERT INTO BuyCancel (
		[TransactionID],
	[BuyID],
	[BuyBranch],
	[Product],
	[Serial],
	[Number],
	[POID],
	[POBranch],
	[POType],
	[SupCode],
	[CancelDate],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) SELECT 
		[TransactionID],
	[BuyID],
	[BuyBranch],
	[Product],
	[Serial],
	[Number],
	[POID],
	[POBranch],
	[POType],
	[SupCode],
	[CancelDate],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].BuyCancel
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].BuyCancel)
END
ELSE BEGIN 
	CREATE TABLE BuyCancel (
		[TransactionID] int,
	[BuyID] int,
	[BuyBranch] int,
	[Product] varchar(40),
	[Serial] varchar(40),
	[Number] int,
	[POID] int,
	[POBranch] int,
	[POType] int,
	[SupCode] varchar(20),
	[CancelDate] datetime,
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO BuyCancel (
		[TransactionID],
	[BuyID],
	[BuyBranch],
	[Product],
	[Serial],
	[Number],
	[POID],
	[POBranch],
	[POType],
	[SupCode],
	[CancelDate],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) 
	SELECT 
        [TransactionID],
	[BuyID],
	[BuyBranch],
	[Product],
	[Serial],
	[Number],
	[POID],
	[POBranch],
	[POType],
	[SupCode],
	[CancelDate],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].BuyCancel
END