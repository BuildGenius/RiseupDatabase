CREATE PROCEDURE Incremental_push_MSreplication_subscriptions
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'MSreplication_subscriptions'
) ) 
BEGIN 
	INSERT INTO MSreplication_subscriptions (
		[publisher],
	[publisher_db],
	[publication],
	[independent_agent],
	[subscription_type],
	[distribution_agent],
	[time],
	[description],
	[transaction_timestamp],
	[update_mode],
	[agent_id],
	[subscription_guid],
	[subid],
	[immediate_sync]
	) SELECT 
		[publisher],
	[publisher_db],
	[publication],
	[independent_agent],
	[subscription_type],
	[distribution_agent],
	[time],
	[description],
	[transaction_timestamp],
	[update_mode],
	[agent_id],
	[subscription_guid],
	[subid],
	[immediate_sync]
	FROM [43.254.133.155].[ITECToAX].[dbo].MSreplication_subscriptions
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].MSreplication_subscriptions)
END
ELSE BEGIN 
	CREATE TABLE MSreplication_subscriptions (
		[publisher] nvarchar(128),
	[publisher_db] nvarchar(128),
	[publication] nvarchar(128),
	[independent_agent] bit,
	[subscription_type] int,
	[distribution_agent] nvarchar(128),
	[time] smalldatetime,
	[description] nvarchar(255),
	[transaction_timestamp] varbinary(16),
	[update_mode] tinyint,
	[agent_id] binary(16),
	[subscription_guid] binary(16),
	[subid] binary(16),
	[immediate_sync] bit
	)
	
	INSERT INTO MSreplication_subscriptions (
		[publisher],
	[publisher_db],
	[publication],
	[independent_agent],
	[subscription_type],
	[distribution_agent],
	[time],
	[description],
	[transaction_timestamp],
	[update_mode],
	[agent_id],
	[subscription_guid],
	[subid],
	[immediate_sync]
	) 
	SELECT 
        [publisher],
	[publisher_db],
	[publication],
	[independent_agent],
	[subscription_type],
	[distribution_agent],
	[time],
	[description],
	[transaction_timestamp],
	[update_mode],
	[agent_id],
	[subscription_guid],
	[subid],
	[immediate_sync]
	FROM [43.254.133.155].[ITECToAX].[dbo].MSreplication_subscriptions
END