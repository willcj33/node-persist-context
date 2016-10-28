'use strict';

const _ = require('lodash');

class BaseService {
    constructor () {
        this.getInstance = function() { return _.cloneDeep(this); };
    }
}

module.exports = BaseService;