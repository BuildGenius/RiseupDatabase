const Database = require('../Database');

class released_products extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'released_products';
        this.column = {
            "item_number": {"dataType": "nvarchar", "maxLength":"50"},"product_itec": {"dataType": "nvarchar", "maxLength":"100"},"groupcat": {"dataType": "nvarchar", "maxLength":"50"},"category": {"dataType": "nvarchar", "maxLength":"50"},"subcategory": {"dataType": "nvarchar", "maxLength":"50"}
        };
    }
}

module.exports = released_products;