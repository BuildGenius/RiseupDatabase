CREATE PROCEDURE Incremental_push_Buy
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'Buy'
) ) 
BEGIN 
	INSERT INTO Buy (
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
	[CurrencyCode],
	[ExchangeRate],
	[DocRef],
	[InvoiceDate],
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
	[CurrencyCode],
	[ExchangeRate],
	[DocRef],
	[InvoiceDate],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].Buy
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].Buy)
END
ELSE BEGIN 
	CREATE TABLE Buy (
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
	[CurrencyCode] varchar(50),
	[ExchangeRate] money,
	[DocRef] varchar(30),
	[InvoiceDate] datetime,
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO Buy (
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
	[CurrencyCode],
	[ExchangeRate],
	[DocRef],
	[InvoiceDate],
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
	[CurrencyCode],
	[ExchangeRate],
	[DocRef],
	[InvoiceDate],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].Buy
END