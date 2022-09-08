CREATE PROCEDURE Incremental_push_ReceiptDeposit
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'ReceiptDeposit'
) ) 
BEGIN 
	INSERT INTO ReceiptDeposit (
		[RefKey],
	[TransactionID],
	[ReceiptMethod],
	[ReceiptDate],
	[Amount],
	[EDCNo],
	[TransferBankID],
	[TransferBankName],
	[TransferBankAccountNo],
	[ChequeNo],
	[SlipNo],
	[CCNo],
	[DepositID],
	[DepositBranch],
	[Remark],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) SELECT 
		[RefKey],
	[TransactionID],
	[ReceiptMethod],
	[ReceiptDate],
	[Amount],
	[EDCNo],
	[TransferBankID],
	[TransferBankName],
	[TransferBankAccountNo],
	[ChequeNo],
	[SlipNo],
	[CCNo],
	[DepositID],
	[DepositBranch],
	[Remark],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].ReceiptDeposit
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].ReceiptDeposit)
END
ELSE BEGIN 
	CREATE TABLE ReceiptDeposit (
		[RefKey] bigint,
	[TransactionID] int,
	[ReceiptMethod] int,
	[ReceiptDate] datetime,
	[Amount] money,
	[EDCNo] varchar(20),
	[TransferBankID] int,
	[TransferBankName] varchar(200),
	[TransferBankAccountNo] varchar(50),
	[ChequeNo] varchar(20),
	[SlipNo] varchar(20),
	[CCNo] varchar(20),
	[DepositID] int,
	[DepositBranch] int,
	[Remark] varchar(300),
	[CrTime] datetime,
	[UTime] datetime,
	[ImportTime] datetime,
	[BPC_status] int,
	[BPC_Remark] varchar(MAX),
	[BPC_StatusDatetime] datetime
	)
	
	INSERT INTO ReceiptDeposit (
		[RefKey],
	[TransactionID],
	[ReceiptMethod],
	[ReceiptDate],
	[Amount],
	[EDCNo],
	[TransferBankID],
	[TransferBankName],
	[TransferBankAccountNo],
	[ChequeNo],
	[SlipNo],
	[CCNo],
	[DepositID],
	[DepositBranch],
	[Remark],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	) 
	SELECT 
        [RefKey],
	[TransactionID],
	[ReceiptMethod],
	[ReceiptDate],
	[Amount],
	[EDCNo],
	[TransferBankID],
	[TransferBankName],
	[TransferBankAccountNo],
	[ChequeNo],
	[SlipNo],
	[CCNo],
	[DepositID],
	[DepositBranch],
	[Remark],
	[CrTime],
	[UTime],
	[ImportTime],
	[BPC_status],
	[BPC_Remark],
	[BPC_StatusDatetime]
	FROM [43.254.133.155].[ITECToAX].[dbo].ReceiptDeposit
END