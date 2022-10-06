class base {
    constructor (req) {
        this.Data = req.body;
        this.Query = req.params;
        this.Session = req.session;

        this.title = "";
        this.active_menu = "";
        this.response = {};
        this.redirectTo = '';

        this.setResponse('title', this.title);
        this.setResponse('active', this.active_menu);
    }
    data(name = 'all') {
        if (name !== 'all') {
            return this.Data[name];
        } else {
            return this.Data;
        }
    }
    query(name = 'all') {
        if (name !== 'all') {
            return this.Query[name];
        } else {
            return this.Query;
        }
    }
    session(name = 'all') {
        if (name !== 'all') {
            return this.Session[name];
        } else {
            return this.Session;
        }
    }
    setResponse(key, value) {
        this.response[key] = value;

        return this;
    }
    authorized(force = true) {
        this.login = true
        if (force) {
            if (this.session('lineID') == undefined) {
                this.login = false;
                this.redirectTo = '/Signin';
            } else {
                this.redirectTo = '';
            }
        }

        return {status: this.login, redirectTo: this.redirectTo};
    }
}

module.exports = base;