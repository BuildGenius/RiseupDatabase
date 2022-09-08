CREATE PROCEDURE Incremental_push_sysdiagrams
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'sysdiagrams'
) ) 
BEGIN 
	INSERT INTO sysdiagrams (
		[name],
	[principal_id],
	[diagram_id],
	[version],
	[definition]
	) SELECT 
		[name],
	[principal_id],
	[diagram_id],
	[version],
	[definition]
	FROM [43.254.133.155].[ITECToAX].[dbo].sysdiagrams
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].sysdiagrams)
END
ELSE BEGIN 
	CREATE TABLE sysdiagrams (
		[name] nvarchar(128),
	[principal_id] int,
	[diagram_id] int,
	[version] int,
	[definition] varbinary(MAX)
	)
	
	INSERT INTO sysdiagrams (
		[name],
	[principal_id],
	[diagram_id],
	[version],
	[definition]
	) 
	SELECT 
        [name],
	[principal_id],
	[diagram_id],
	[version],
	[definition]
	FROM [43.254.133.155].[ITECToAX].[dbo].sysdiagrams
END