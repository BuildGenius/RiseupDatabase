CREATE PROCEDURE Incremental_push_Vendor
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'Vendor'
) ) 
BEGIN 
	INSERT INTO Vendor (
		[TransactionID],
	[SupCode],
	[TaxNo],
	[Title],
	[Name],
	[Address1],
	[Address2],
	[Contact],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) SELECT 
		[TransactionID],
	[SupCode],
	[TaxNo],
	[Title],
	[Name],
	[Address1],
	[Address2],
	[Contact],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].Vendor
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].Vendor)
END
ELSE BEGIN 
	CREATE TABLE Vendor (
		[TransactionID] int,
	[SupCode] varchar(20),
	[TaxNo] varchar(50),
	[Title] varchar(30),
	[Name] varchar(100),
	[Address1] varchar(200),
	[Address2] varchar(200),
	[Contact] varchar(200),
	[Status] int,
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO Vendor (
		[TransactionID],
	[SupCode],
	[TaxNo],
	[Title],
	[Name],
	[Address1],
	[Address2],
	[Contact],
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
	[SupCode],
	[TaxNo],
	[Title],
	[Name],
	[Address1],
	[Address2],
	[Contact],
	[Status],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].Vendor
END