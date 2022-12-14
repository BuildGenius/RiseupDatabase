DECLARE @tmp_inventtable TABLE (
	ID INT IDENTITY(1,1),
	ITEMID NVARCHAR(100),
	BPC_REFERENCEID NVARCHAR(100)
)

DECLARE @tmp_inventsum TABLE(
	Product NVARCHAR(100),
	Serial NVARCHAR(200),
	[Number] INT,
	D365ITEMID NVARCHAR(100)
)

DECLARE @row INT = 1;

INSERT INTO @tmp_inventtable (ITEMID ,BPC_REFERENCEID)
SELECT ITEMID ,BPC_REFERENCEID 
FROM D365.dbo.INVENTTABLE
GROUP BY ITEMID ,BPC_REFERENCEID;

INSERT INTO @tmp_inventsum (Product, Serial, [Number], D365ITEMID)
SELECT Product, Serial, [Number], D365ITEMID
FROM D365.dbo.ITEC_Inventsum_20220901;

WHILE @row < (SELECT COUNT(*) FROM @tmp_inventtable)
BEGIN
	DECLARE @ITEMNO NVARCHAR(100) = (SELECT ITEMID FROM @tmp_inventtable WHERE ID = @row)
	DECLARE @refNo NVARCHAR(100) = (SELECT BPC_REFERENCEID FROM @tmp_inventtable WHERE ID = @row)
	
	UPDATE @tmp_inventsum
	SET D365ITEMID = @ITEMNO
	WHERE Product = @refNo
	
	SET @row = @row + 1;
END
