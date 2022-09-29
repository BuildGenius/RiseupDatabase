var nodecron = require('node-cron');

class CronSchedule {
    constructor() {
        this.schedule = nodecron.schedule();
        this.allTask = nodecron.getTasks();
    }

    getTasks(get = 'all') {
        if (get == 'all') {
            return this.allTask;
        } else {
            
        }
    }   
}

module.exports = CronSchedule;