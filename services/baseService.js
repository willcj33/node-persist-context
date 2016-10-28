'use strict';

const _ = require('lodash');

class BaseService {
    //Pass in a list of properties you would like to persist for logging/whatever and we will persist it per instance.
    constructor (ctx, persistProps) {
        this.ctx = ctx;
        this.persistProps = persistProps || ['ctx'];

        if (this.persistProps.indexOf('ctx') < 0) { this.persistProps.push('ctx'); }

        this.getInstance = function() { 
            let instance = {};
            for (var prop in this){
                if (this.persistProps.indexOf(prop) > -1){
                    instance[prop] = _.cloneDeep(this[prop]);
                }
                else{
                    instance[prop] = this[prop];
                }
            }
            return instance;
        };
    }
}

module.exports = BaseService;