class diskspaces {
    constructor () {
        this.Bytes = 1;
        this.Bits = 8;
        this.Kilobits = 0.0078125;
        this.Megabits = 0.00000762939453125;
        this.Gigabits = 7.450580596923828e-9;
        this.Terabits = 7.275957614183426e-12;
        this.Kilobytes = 0.0009765625;
        this.Megabytes = 9.5367431640625e-7;
        this.Gigabytes = 9.313225746154785e-10;
        this.Terabytes = 9.094947017729282e-13;
    }
    converse(bytes, unit = '') {
        let res;

        switch (unit) {
            case 'Bytes':
                res = this.multiply(bytes, this.Bytes);
            break;
            case 'Bits': 
                res = this.multiply(bytes, this.Bits);
            break;
            case 'Kilobits': 
                res = this.multiply(bytes, this.Kilobits);
            break;
            case 'Megabits': 
                res = this.multiply(bytes, this.Megabits);
            break;
            case 'Gigabits': 
                res = this.multiply(bytes, this.Gigabits);
            break;
            case 'Terabits': 
                res = this.multiply(bytes, this.Terabits);
            break;
            case 'Kilobytes': 
                res = this.multiply(bytes, this.Kilobytes);
            break;
            case 'Megabytes': 
                res = this.multiply(bytes, this.Megabytes);
            break;
            case 'Gigabytes': 
                res = this.multiply(bytes, this.Gigabytes);
            break;
            case 'Terabytes': 
                res = this.multiply(bytes, this.Terabytes);
            break;
            default: 
                res = this.multiply(bytes, this.Megabytes);
            break;
        }

        return res;
    }
    multiply (top, follow) {
        return (top * follow).toFixed(1)
    }
}

module.exports = diskspaces