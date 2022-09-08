CREATE PROCEDURE Incremental_push_Product
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'Product'
) ) 
BEGIN 
	INSERT INTO Product (
		[TransactionID],
	[Product],
	[ProductName],
	[Unit],
	[ProductType],
	[GroupCatID],
	[CategoryID],
	[CategoryName],
	[SubCat],
	[Brand],
	[Model],
	[PMName],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) SELECT 
		[TransactionID],
	[Product],
	[ProductName],
	[Unit],
	[ProductType],
	[GroupCatID],
	[CategoryID],
	[CategoryName],
	[SubCat],
	[Brand],
	[Model],
	[PMName],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].Product
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].Product)
END
ELSE BEGIN 
	CREATE TABLE Product (
		[TransactionID] int,
	[Product] varchar(40),
	[ProductName] varchar(200),
	[Unit] varchar(15),
	[ProductType] int,
	[GroupCatID] int,
	[CategoryID] int,
	[CategoryName] varchar(50),
	[SubCat] varchar(100),
	[Brand] varchar(50),
	[Model] varchar(100),
	[PMName] varchar(300),
	[Status] int,
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO Product (
		[TransactionID],
	[Product],
	[ProductName],
	[Unit],
	[ProductType],
	[GroupCatID],
	[CategoryID],
	[CategoryName],
	[SubCat],
	[Brand],
	[Model],
	[PMName],
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
	[Product],
	[ProductName],
	[Unit],
	[ProductType],
	[GroupCatID],
	[CategoryID],
	[CategoryName],
	[SubCat],
	[Brand],
	[Model],
	[PMName],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].Product
END