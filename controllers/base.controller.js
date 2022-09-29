class base {
    constructor (req) {
        this.data = req.body;
        this.query = req.query;
        this.sess = req.session;

        this.env = req.app.get('env');
        console.log(this.env);
    }
    getData(get = 'all') {
        if (get !== 'all') {
            return this.data[get];
        } else {
            return this.data;
        }
    }
    getQuery(queryName = 'all') {
        if (queryName !== 'all') {
            return this.query[queryName];
        } else {
            return this.query;
        }
    }
    getSession(sessionName = 'all') {
        if (sessionName !== 'all') {
            return this.sess[sessionName];
        } else {
            return this.sess;
        }
    }
}

module.exports = base