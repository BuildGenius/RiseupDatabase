var connection = require('./connection');

class command extends connection {
    constructor(prop) {
        super();
        this.stmt;
        this.table;
        this.where;
        this.limit = 1000;
        this.ofset = 1;
        this.order = false;
        this.orderby;
        this.group = false;
        this.selector = '*';
    }

    set(key, value){
        switch (key) {
            case 'table':
                this.table = value;
                break;
            case 'limit':
                this.limit = value;
                break;
            case 'ofset':
                this.ofset = value;
                break;
            case 'order':
                this.order = value;
                break;
            case 'group':
                this.group = value;
                break;
            case 'selector':
                this.selector = value;
                break;
        }

        return this;
    }
    setTable(tablename){
        this.set('table', tablename);
        return this;
    }
    setLimit (limit) {
        this.set('limit', limit);
        return this;
    }
    setOfset(ofset){
        this.set('ofset', ofset);
        return this;
    }
    setOrder(order = []){
        if (arguments.length > 1) {
            this.set('order', arguments)
        } else {
            this.set('order', order);
        }
        return this;
    }
    setGroup(group = []){
        if (arguments.length > 1) {
            this.set('group', arguments);
        } else {
            this.set('group', group);
        }
        return this;
    }
    setSelector(selector = []) {
        if (arguments.length > 1) {
            this.set('selector', arguments);
        } else {
            this.set('selector', group);
        }
        return this;
    }
    where() {
        
    }
}

module.exports = command