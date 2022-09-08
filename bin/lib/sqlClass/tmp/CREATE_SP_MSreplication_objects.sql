CREATE PROCEDURE Incremental_push_MSreplication_objects
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'MSreplication_objects'
) ) 
BEGIN 
	INSERT INTO MSreplication_objects (
		[publisher],
	[publisher_db],
	[publication],
	[object_name],
	[object_type],
	[article]
	) SELECT 
		[publisher],
	[publisher_db],
	[publication],
	[object_name],
	[object_type],
	[article]
	FROM [43.254.133.155].[ITECToAX].[dbo].MSreplication_objects
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].MSreplication_objects)
END
ELSE BEGIN 
	CREATE TABLE MSreplication_objects (
		[publisher] nvarchar(128),
	[publisher_db] nvarchar(128),
	[publication] nvarchar(128),
	[object_name] nvarchar(128),
	[object_type] char(2),
	[article] nvarchar(128)
	)
	
	INSERT INTO MSreplication_objects (
		[publisher],
	[publisher_db],
	[publication],
	[object_name],
	[object_type],
	[article]
	) 
	SELECT 
        [publisher],
	[publisher_db],
	[publication],
	[object_name],
	[object_type],
	[article]
	FROM [43.254.133.155].[ITECToAX].[dbo].MSreplication_objects
END