CREATE PROCEDURE Incremental_push_Customer
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'Customer'
) ) 
BEGIN 
	INSERT INTO Customer (
		[TransactionID],
	[CusCode],
	[Type],
	[CusType],
	[CusGroup],
	[CustomerName],
	[TaxAddL1],
	[TaxAddL2],
	[TaxAddL3],
	[TaxZipCode],
	[TaxTel],
	[Email],
	[TaxFax],
	[TaxNo],
	[ContactPerson],
	[CreditDay],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) SELECT 
		[TransactionID],
	[CusCode],
	[Type],
	[CusType],
	[CusGroup],
	[CustomerName],
	[TaxAddL1],
	[TaxAddL2],
	[TaxAddL3],
	[TaxZipCode],
	[TaxTel],
	[Email],
	[TaxFax],
	[TaxNo],
	[ContactPerson],
	[CreditDay],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].Customer
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].Customer)
END
ELSE BEGIN 
	CREATE TABLE Customer (
		[TransactionID] int,
	[CusCode] varchar(20),
	[Type] nchar(10),
	[CusType] int,
	[CusGroup] int,
	[CustomerName] varchar(300),
	[TaxAddL1] varchar(200),
	[TaxAddL2] varchar(200),
	[TaxAddL3] varchar(200),
	[TaxZipCode] varchar(10),
	[TaxTel] varchar(200),
	[Email] varchar(200),
	[TaxFax] varchar(100),
	[TaxNo] varchar(50),
	[ContactPerson] varchar(200),
	[CreditDay] int,
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO Customer (
		[TransactionID],
	[CusCode],
	[Type],
	[CusType],
	[CusGroup],
	[CustomerName],
	[TaxAddL1],
	[TaxAddL2],
	[TaxAddL3],
	[TaxZipCode],
	[TaxTel],
	[Email],
	[TaxFax],
	[TaxNo],
	[ContactPerson],
	[CreditDay],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) 
	SELECT 
        [TransactionID],
	[CusCode],
	[Type],
	[CusType],
	[CusGroup],
	[CustomerName],
	[TaxAddL1],
	[TaxAddL2],
	[TaxAddL3],
	[TaxZipCode],
	[TaxTel],
	[Email],
	[TaxFax],
	[TaxNo],
	[ContactPerson],
	[CreditDay],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].Customer
END