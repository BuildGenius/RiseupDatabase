const Database = require('../Database');

class INVENTTABLE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'INVENTTABLE';
        this.column = {
            "ITEMID": {"dataType": "nvarchar", "maxLength":"20"},"ABCCONTRIBUTIONMARGIN": {"dataType": "int", "maxLength":"null"},"ABCREVENUE": {"dataType": "int", "maxLength":"null"},"ABCTIEUP": {"dataType": "int", "maxLength":"null"},"ABCVALUE": {"dataType": "int", "maxLength":"null"},"ALCOHOLMANUFACTURERID_RU": {"dataType": "nvarchar", "maxLength":"20"},"ALCOHOLPRODUCTIONTYPEID_RU": {"dataType": "nvarchar", "maxLength":"10"},"ALCOHOLSTRENGTH_RU": {"dataType": "numeric", "maxLength":"null"},"ALTCONFIGID": {"dataType": "nvarchar", "maxLength":"50"},"ALTINVENTCOLORID": {"dataType": "nvarchar", "maxLength":"10"},"ALTINVENTSIZEID": {"dataType": "nvarchar", "maxLength":"10"},"ALTINVENTSTYLEID": {"dataType": "nvarchar", "maxLength":"10"},"ALTITEMID": {"dataType": "nvarchar", "maxLength":"20"},"APPROXTAXVALUE_BR": {"dataType": "numeric", "maxLength":"null"},"ASSETGROUPID_RU": {"dataType": "nvarchar", "maxLength":"10"},"ASSETID_RU": {"dataType": "nvarchar", "maxLength":"20"},"AUTOREPORTFINISHED": {"dataType": "int", "maxLength":"null"},"BATCHMERGEDATECALCULATIONMETHOD": {"dataType": "int", "maxLength":"null"},"BATCHNUMGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"BOMCALCGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"BOMLEVEL": {"dataType": "int", "maxLength":"null"},"BOMMANUALRECEIPT": {"dataType": "int", "maxLength":"null"},"BOMUNITID": {"dataType": "nvarchar", "maxLength":"10"},"BRANDCODEID_MX": {"dataType": "nvarchar", "maxLength":"30"},"COMMISSIONGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"COSTGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"COSTMODEL": {"dataType": "int", "maxLength":"null"},"CUSTOMSEXPORTTARIFFCODETABLE_IN": {"dataType": "bigint", "maxLength":"null"},"CUSTOMSIMPORTTARIFFCODETABLE_IN": {"dataType": "bigint", "maxLength":"null"},"DEFAULTDIMENSION": {"dataType": "bigint", "maxLength":"null"},"DENSITY": {"dataType": "numeric", "maxLength":"null"},"DEPTH": {"dataType": "numeric", "maxLength":"null"},"EXCEPTIONCODE_BR": {"dataType": "nvarchar", "maxLength":"10"},"EXCISETARIFFCODES_IN": {"dataType": "bigint", "maxLength":"null"},"EXIMPRODUCTGROUPTABLE_IN": {"dataType": "bigint", "maxLength":"null"},"FISCALLIFOAVOIDCALC": {"dataType": "int", "maxLength":"null"},"FISCALLIFONORMALVALUE": {"dataType": "numeric", "maxLength":"null"},"FISCALLIFONORMALVALUECALC": {"dataType": "int", "maxLength":"null"},"FORECASTDMPINCLUDE": {"dataType": "int", "maxLength":"null"},"GROSSDEPTH": {"dataType": "numeric", "maxLength":"null"},"GROSSHEIGHT": {"dataType": "numeric", "maxLength":"null"},"GROSSWIDTH": {"dataType": "numeric", "maxLength":"null"},"HEIGHT": {"dataType": "numeric", "maxLength":"null"},"ICMSONSERVICE_BR": {"dataType": "int", "maxLength":"null"},"INTRASTATCOMMODITY": {"dataType": "bigint", "maxLength":"null"},"INTRASTATEXCLUDE": {"dataType": "int", "maxLength":"null"},"INTRASTATPROCID_CZ": {"dataType": "nvarchar", "maxLength":"10"},"INVENTFISCALLIFOGROUP": {"dataType": "bigint", "maxLength":"null"},"INVENTPRODUCTTYPE_BR": {"dataType": "nvarchar", "maxLength":"10"},"ITEMBUYERGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"ITEMDIMCOSTPRICE": {"dataType": "int", "maxLength":"null"},"ITEMPRICETOLERANCEGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"ITEMTYPE": {"dataType": "int", "maxLength":"null"},"MARKUPCODE_RU": {"dataType": "nvarchar", "maxLength":"10"},"MATCHINGPOLICY": {"dataType": "int", "maxLength":"null"},"MINIMUMPALLETQUANTITY": {"dataType": "numeric", "maxLength":"null"},"NAMEALIAS": {"dataType": "nvarchar", "maxLength":"20"},"NETWEIGHT": {"dataType": "numeric", "maxLength":"null"},"NGPCODESTABLE_FR": {"dataType": "bigint", "maxLength":"null"},"NRTAXGROUP_LV": {"dataType": "nvarchar", "maxLength":"10"},"ORIGCOUNTRYREGIONID": {"dataType": "nvarchar", "maxLength":"10"},"ORIGCOUNTYID": {"dataType": "nvarchar", "maxLength":"30"},"ORIGSTATEID": {"dataType": "nvarchar", "maxLength":"10"},"PACKAGINGGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"PACKING_RU": {"dataType": "nvarchar", "maxLength":"20"},"PDSBASEATTRIBUTEID": {"dataType": "nvarchar", "maxLength":"20"},"PDSBESTBEFORE": {"dataType": "int", "maxLength":"null"},"PDSCWWMSMINIMUMPALLETQTY": {"dataType": "numeric", "maxLength":"null"},"PDSCWWMSQTYPERLAYER": {"dataType": "numeric", "maxLength":"null"},"PDSCWWMSSTANDARDPALLETQTY": {"dataType": "numeric", "maxLength":"null"},"PDSFREIGHTALLOCATIONGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"PDSITEMREBATEGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"PDSPOTENCYATTRIBRECORDING": {"dataType": "int", "maxLength":"null"},"PDSSHELFADVICE": {"dataType": "int", "maxLength":"null"},"PDSSHELFLIFE": {"dataType": "int", "maxLength":"null"},"PDSTARGETFACTOR": {"dataType": "numeric", "maxLength":"null"},"PDSVENDORCHECKITEM": {"dataType": "int", "maxLength":"null"},"PHANTOM": {"dataType": "int", "maxLength":"null"},"PKWIUCODE_PL": {"dataType": "nvarchar", "maxLength":"20"},"PMFPLANNINGITEMID": {"dataType": "nvarchar", "maxLength":"20"},"PMFPRODUCTTYPE": {"dataType": "int", "maxLength":"null"},"PMFYIELDPCT": {"dataType": "numeric", "maxLength":"null"},"PRIMARYVENDORID": {"dataType": "nvarchar", "maxLength":"20"},"PRODFLUSHINGPRINCIP": {"dataType": "int", "maxLength":"null"},"PRODGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"PRODPOOLID": {"dataType": "nvarchar", "maxLength":"10"},"PRODUCT": {"dataType": "bigint", "maxLength":"null"},"PROJCATEGORYID": {"dataType": "nvarchar", "maxLength":"30"},"PROPERTYID": {"dataType": "nvarchar", "maxLength":"10"},"PURCHMODEL": {"dataType": "int", "maxLength":"null"},"QTYPERLAYER": {"dataType": "numeric", "maxLength":"null"},"REQGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"SADRATECODE_PL": {"dataType": "nvarchar", "maxLength":"10"},"SALESCONTRIBUTIONRATIO": {"dataType": "numeric", "maxLength":"null"},"SALESMODEL": {"dataType": "int", "maxLength":"null"},"SALESPERCENTMARKUP": {"dataType": "numeric", "maxLength":"null"},"SALESPRICEMODELBASIC": {"dataType": "int", "maxLength":"null"},"SCRAPCONST": {"dataType": "numeric", "maxLength":"null"},"SCRAPVAR": {"dataType": "numeric", "maxLength":"null"},"SERIALNUMGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"SERVICECODETABLE_IN": {"dataType": "bigint", "maxLength":"null"},"SKIPINTRACOMPANYSYNC_RU": {"dataType": "int", "maxLength":"null"},"SORTCODE": {"dataType": "int", "maxLength":"null"},"STANDARDCONFIGID": {"dataType": "nvarchar", "maxLength":"50"},"STANDARDINVENTCOLORID": {"dataType": "nvarchar", "maxLength":"10"},"STANDARDINVENTSIZEID": {"dataType": "nvarchar", "maxLength":"10"},"STANDARDINVENTSTYLEID": {"dataType": "nvarchar", "maxLength":"10"},"STANDARDPALLETQUANTITY": {"dataType": "numeric", "maxLength":"null"},"STATISTICSFACTOR": {"dataType": "numeric", "maxLength":"null"},"TARAWEIGHT": {"dataType": "numeric", "maxLength":"null"},"TAXATIONORIGIN_BR": {"dataType": "int", "maxLength":"null"},"TAXFISCALCLASSIFICATION_BR": {"dataType": "nvarchar", "maxLength":"10"},"TAXPACKAGINGQTY": {"dataType": "numeric", "maxLength":"null"},"TAXSERVICECODE_BR": {"dataType": "nvarchar", "maxLength":"10"},"UNITVOLUME": {"dataType": "numeric", "maxLength":"null"},"USEALTITEMID": {"dataType": "int", "maxLength":"null"},"WIDTH": {"dataType": "numeric", "maxLength":"null"},"WMSARRIVALHANDLINGTIME": {"dataType": "int", "maxLength":"null"},"WMSPALLETTYPEID": {"dataType": "nvarchar", "maxLength":"15"},"WMSPICKINGQTYTIME": {"dataType": "int", "maxLength":"null"},"DSA_IN": {"dataType": "int", "maxLength":"null"},"EXCISERECORDTYPE_IN": {"dataType": "int", "maxLength":"null"},"SATCODEID_MX": {"dataType": "nvarchar", "maxLength":"10"},"SATTARIFFFRACTION_MX": {"dataType": "nvarchar", "maxLength":"10"},"HSNCODETABLE_IN": {"dataType": "bigint", "maxLength":"null"},"SERVICEACCOUNTINGCODETABLE_IN": {"dataType": "bigint", "maxLength":"null"},"EXEMPT_IN": {"dataType": "int", "maxLength":"null"},"PRODUCTLIFECYCLESTATEID": {"dataType": "nvarchar", "maxLength":"150"},"SCALEINDICATOR_BR": {"dataType": "int", "maxLength":"null"},"CNPJ_BR": {"dataType": "nvarchar", "maxLength":"20"},"NONGST_IN": {"dataType": "int", "maxLength":"null"},"TAXRATETYPE": {"dataType": "bigint", "maxLength":"null"},"REVRECDEFAULTREVENUERECOGNITIONSCHEDULE": {"dataType": "nvarchar", "maxLength":"10"},"REVRECEXCLUDEFROMCARVEOUT": {"dataType": "int", "maxLength":"null"},"REVRECMEDIANPRICE": {"dataType": "int", "maxLength":"null"},"REVRECMEDIANPRICEMAXIMUMTOLERANCE": {"dataType": "numeric", "maxLength":"null"},"REVRECMEDIANPRICEMINIMUMTOLERANCE": {"dataType": "numeric", "maxLength":"null"},"REVRECREVENUERECOGNITIONENABLED": {"dataType": "int", "maxLength":"null"},"REVRECREVENUETYPE": {"dataType": "int", "maxLength":"null"},"REVRECBUNDLE": {"dataType": "int", "maxLength":"null"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"MODIFIEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"MODIFIEDBY": {"dataType": "nvarchar", "maxLength":"20"},"CREATEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"CREATEDBY": {"dataType": "nvarchar", "maxLength":"20"},"INTRASTATCHARGEPERKG": {"dataType": "numeric", "maxLength":"null"},"FREENOTESGROUP_IT": {"dataType": "nvarchar", "maxLength":"10"},"BPC_REFITEMID": {"dataType": "nvarchar", "maxLength":"20"},"BPC_REFERENCEID": {"dataType": "nvarchar", "maxLength":"40"},"BPC_BRAND": {"dataType": "nvarchar", "maxLength":"100"},"BPC_MODEL": {"dataType": "nvarchar", "maxLength":"50"},"BPC_SOURCESINF": {"dataType": "int", "maxLength":"null"},"BPC_FAMILYCODE": {"dataType": "nvarchar", "maxLength":"20"},"HMIMINDICATOR": {"dataType": "int", "maxLength":"null"},"COODUALUSEPRODUCT": {"dataType": "int", "maxLength":"null"},"COODUALUSECODE": {"dataType": "nvarchar", "maxLength":"10"},"ALTINVENTVERSIONID": {"dataType": "nvarchar", "maxLength":"10"},"STANDARDINVENTVERSIONID": {"dataType": "nvarchar", "maxLength":"10"},"COSTBOMLEVEL": {"dataType": "int", "maxLength":"null"},"ITMARRIVALGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"ITMCOMMODITYCODEID": {"dataType": "nvarchar", "maxLength":"10"},"ITMCUSTOMSDESCID": {"dataType": "nvarchar", "maxLength":"60"},"ITMOVERUNDERTOLERANCEGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"ITMCOSTTYPEGROUPID": {"dataType": "nvarchar", "maxLength":"40"},"ITMCOSTTRANSFERGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"BPC_SELLITEMBRANCH72": {"dataType": "int", "maxLength":"null"},"DISPLAYHAZARD_MX": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = INVENTTABLE;