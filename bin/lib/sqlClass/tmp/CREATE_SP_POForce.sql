CREATE PROCEDURE Incremental_push_POForce
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'POForce'
) ) 
BEGIN 
	INSERT INTO POForce (
		[TransactionID],
	[POID],
	[POBranch],
	[Product],
	[BranchTo],
	[ForceFinishDate],
	[SupCode],
	[SupplierName],
	[RowNo],
	[Number],
	[ForceRemain],
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
	[ForceFinishDate],
	[SupCode],
	[SupplierName],
	[RowNo],
	[Number],
	[ForceRemain],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].POForce
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].POForce)
END
ELSE BEGIN 
	CREATE TABLE POForce (
		[TransactionID] int,
	[POID] int,
	[POBranch] int,
	[Product] varchar(40),
	[BranchTo] int,
	[ForceFinishDate] datetime,
	[SupCode] varchar(20),
	[SupplierName] varchar(100),
	[RowNo] int,
	[Number] int,
	[ForceRemain] int,
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO POForce (
		[TransactionID],
	[POID],
	[POBranch],
	[Product],
	[BranchTo],
	[ForceFinishDate],
	[SupCode],
	[SupplierName],
	[RowNo],
	[Number],
	[ForceRemain],
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
	[ForceFinishDate],
	[SupCode],
	[SupplierName],
	[RowNo],
	[Number],
	[ForceRemain],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].POForce
END