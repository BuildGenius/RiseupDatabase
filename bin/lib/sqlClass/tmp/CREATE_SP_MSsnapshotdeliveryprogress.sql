CREATE PROCEDURE Incremental_push_MSsnapshotdeliveryprogress
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'MSsnapshotdeliveryprogress'
) ) 
BEGIN 
	INSERT INTO MSsnapshotdeliveryprogress (
		[session_token],
	[progress_token_hash],
	[progress_token],
	[progress_timestamp]
	) SELECT 
		[session_token],
	[progress_token_hash],
	[progress_token],
	[progress_timestamp]
	FROM [43.254.133.155].[ITECToAX].[dbo].MSsnapshotdeliveryprogress
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].MSsnapshotdeliveryprogress)
END
ELSE BEGIN 
	CREATE TABLE MSsnapshotdeliveryprogress (
		[session_token] nvarchar(260),
	[progress_token_hash] int,
	[progress_token] nvarchar(500),
	[progress_timestamp] datetime
	)
	
	INSERT INTO MSsnapshotdeliveryprogress (
		[session_token],
	[progress_token_hash],
	[progress_token],
	[progress_timestamp]
	) 
	SELECT 
        [session_token],
	[progress_token_hash],
	[progress_token],
	[progress_timestamp]
	FROM [43.254.133.155].[ITECToAX].[dbo].MSsnapshotdeliveryprogress
END