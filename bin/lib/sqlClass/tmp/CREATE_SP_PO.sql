CREATE PROCEDURE Incremental_push_PO
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'PO'
) ) 
BEGIN 
	INSERT INTO PO (
		[TransactionID],
	[POID],
	[POBranch],
	[Product],
	[BranchTo],
	[CurrencyCode],
	[POType],
	[ExchangeRate],
	[SupCode],
	[SupplierName],
	[CrDay],
	[RowNo],
	[Number],
	[PBV],
	[PAV],
	[VATRate],
	[ArrTime],
	[TransportName],
	[TransportTerm],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) SELECT 
		[TransactionID],
	[POID],
	[POBranch],
	[Product],
	[BranchTo],
	[CurrencyCode],
	[POType],
	[ExchangeRate],
	[SupCode],
	[SupplierName],
	[CrDay],
	[RowNo],
	[Number],
	[PBV],
	[PAV],
	[VATRate],
	[ArrTime],
	[TransportName],
	[TransportTerm],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].PO
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].PO)
END
ELSE BEGIN 
	CREATE TABLE PO (
		[TransactionID] int,
	[POID] int,
	[POBranch] int,
	[Product] varchar(40),
	[BranchTo] int,
	[CurrencyCode] varchar(50),
	[POType] int,
	[ExchangeRate] money,
	[SupCode] varchar(20),
	[SupplierName] varchar(100),
	[CrDay] int,
	[RowNo] int,
	[Number] int,
	[PBV] money,
	[PAV] money,
	[VATRate] money,
	[ArrTime] datetime,
	[TransportName] varchar(50),
	[TransportTerm] varchar(50),
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO PO (
		[TransactionID],
	[POID],
	[POBranch],
	[Product],
	[BranchTo],
	[CurrencyCode],
	[POType],
	[ExchangeRate],
	[SupCode],
	[SupplierName],
	[CrDay],
	[RowNo],
	[Number],
	[PBV],
	[PAV],
	[VATRate],
	[ArrTime],
	[TransportName],
	[TransportTerm],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) 
	SELECT 
        [TransactionID],
	[POID],
	[POBranch],
	[Product],
	[BranchTo],
	[CurrencyCode],
	[POType],
	[ExchangeRate],
	[SupCode],
	[SupplierName],
	[CrDay],
	[RowNo],
	[Number],
	[PBV],
	[PAV],
	[VATRate],
	[ArrTime],
	[TransportName],
	[TransportTerm],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].PO
END