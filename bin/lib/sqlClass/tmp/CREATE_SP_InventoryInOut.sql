CREATE PROCEDURE Incremental_push_InventoryInOut
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'InventoryInOut'
) ) 
BEGIN 
	INSERT INTO InventoryInOut (
		[RefKey],
	[TransactionID],
	[TransactionType],
	[BillID],
	[BillBranch],
	[Product],
	[Serial],
	[Number],
	[Cost],
	[CrTime],
	[UTime],
	[ImportTime],
	[POID],
	[POBranch],
	[ProductRet],
	[SerialRet],
	[NumberRet],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) SELECT 
		[RefKey],
	[TransactionID],
	[TransactionType],
	[BillID],
	[BillBranch],
	[Product],
	[Serial],
	[Number],
	[Cost],
	[CrTime],
	[UTime],
	[ImportTime],
	[POID],
	[POBranch],
	[ProductRet],
	[SerialRet],
	[NumberRet],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].InventoryInOut
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].InventoryInOut)
END
ELSE BEGIN 
	CREATE TABLE InventoryInOut (
		[RefKey] bigint,
	[TransactionID] int,
	[TransactionType] int,
	[BillID] int,
	[BillBranch] int,
	[Product] varchar(40),
	[Serial] varchar(50),
	[Number] int,
	[Cost] money,
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[POID] int,
	[POBranch] int,
	[ProductRet] varchar(40),
	[SerialRet] varchar(40),
	[NumberRet] int,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO InventoryInOut (
		[RefKey],
	[TransactionID],
	[TransactionType],
	[BillID],
	[BillBranch],
	[Product],
	[Serial],
	[Number],
	[Cost],
	[CrTime],
	[UTime],
	[ImportTime],
	[POID],
	[POBranch],
	[ProductRet],
	[SerialRet],
	[NumberRet],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) 
	SELECT 
        [RefKey],
	[TransactionID],
	[TransactionType],
	[BillID],
	[BillBranch],
	[Product],
	[Serial],
	[Number],
	[Cost],
	[CrTime],
	[UTime],
	[ImportTime],
	[POID],
	[POBranch],
	[ProductRet],
	[SerialRet],
	[NumberRet],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].InventoryInOut
END