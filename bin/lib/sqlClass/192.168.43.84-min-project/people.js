const Database = require('../Database');
const userMeta = require('../192.168.43.84-min-project/people_details');

class people extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'people';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"referenceID": {"dataType": "nvarchar", "maxLength":"100"},"Email": {"dataType": "varchar", "maxLength":"75"},"hashPassword": {"dataType": "text", "maxLength":"2147483647"},"CreateAt": {"dataType": "datetime", "maxLength":"null"},"UpdateAt": {"dataType": "datetime", "maxLength":"null"}
        };
        this.value = {};
    }
    async storeUser (userDetail = {}, useRef = true) {
        if (useRef) {
            this.value.referenceID = userDetail.userID;
        } else {
            this.value.Email = userDetail.Email;
            this.value.hashPassword = md5(userPassword);
        }

        let d = new Date();
        this.value.CreateAt = d;
        this.value.UpdateAt = d;

        console.log(d);

        if (this.save() > 0) {
            let umt = new userMeta(this.config);
            await umt.addObjectMeta(userDetail);

            return {'status': true, id : this.userID};
        } else {
            return {'status': false, error: this.error, 'error-message': this.errorMsg}
        }
    }
}

module.exports = people;