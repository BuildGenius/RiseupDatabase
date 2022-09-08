CREATE PROCEDURE Incremental_push_MSsubscription_agents
AS
IF (EXISTS (
	SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_CATALOG = '[min-project]' 
	AND TABLE_SCHEMA = 'dbo' 
	AND TABLE_TYPE = 'BASE TABLE' 
	AND TABLE_NAME = 'MSsubscription_agents'
) ) 
BEGIN 
	INSERT INTO MSsubscription_agents (
		[id],
	[publisher],
	[publisher_db],
	[publication],
	[subscription_type],
	[queue_id],
	[update_mode],
	[failover_mode],
	[spid],
	[login_time],
	[allow_subscription_copy],
	[attach_state],
	[attach_version],
	[last_sync_status],
	[last_sync_summary],
	[last_sync_time],
	[queue_server]
	) SELECT 
		[id],
	[publisher],
	[publisher_db],
	[publication],
	[subscription_type],
	[queue_id],
	[update_mode],
	[failover_mode],
	[spid],
	[login_time],
	[allow_subscription_copy],
	[attach_state],
	[attach_version],
	[last_sync_status],
	[last_sync_summary],
	[last_sync_time],
	[queue_server]
	FROM [43.254.133.155].[ITECToAX].[dbo].MSsubscription_agents
	WHERE UTime > (SELECT MAX(UTime) FROM [dbo].MSsubscription_agents)
END
ELSE BEGIN 
	CREATE TABLE MSsubscription_agents (
		[id] int,
	[publisher] nvarchar(128),
	[publisher_db] nvarchar(128),
	[publication] nvarchar(128),
	[subscription_type] int,
	[queue_id] nvarchar(128),
	[update_mode] tinyint,
	[failover_mode] bit,
	[spid] int,
	[login_time] datetime,
	[allow_subscription_copy] bit,
	[attach_state] int,
	[attach_version] binary(16),
	[last_sync_status] int,
	[last_sync_summary] nvarchar(128),
	[last_sync_time] datetime,
	[queue_server] nvarchar(128)
	)
	
	INSERT INTO MSsubscription_agents (
		[id],
	[publisher],
	[publisher_db],
	[publication],
	[subscription_type],
	[queue_id],
	[update_mode],
	[failover_mode],
	[spid],
	[login_time],
	[allow_subscription_copy],
	[attach_state],
	[attach_version],
	[last_sync_status],
	[last_sync_summary],
	[last_sync_time],
	[queue_server]
	) 
	SELECT 
        [id],
	[publisher],
	[publisher_db],
	[publication],
	[subscription_type],
	[queue_id],
	[update_mode],
	[failover_mode],
	[spid],
	[login_time],
	[allow_subscription_copy],
	[attach_state],
	[attach_version],
	[last_sync_status],
	[last_sync_summary],
	[last_sync_time],
	[queue_server]
	FROM [43.254.133.155].[ITECToAX].[dbo].MSsubscription_agents
END