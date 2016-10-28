'use strict';

const Q = require('bluebird');
const _ = require('lodash');
const BaseService = require('./baseService');

class MockDataService extends BaseService {
    constructor (ctx, options) {
        super(ctx);
        this.data = [
            { id: 1, name: 'test 1' },
            { id: 2, name: 'test 2' },
            { id: 3, name: 'test 3' }
        ];
        this.idClock = this.data.length;
    }

    getAll () {
        let self = this.getInstance();
        return new Q((resolve, reject) => {
            resolve(self.data);  
        });
    }

    find (id) {
        let self = this.getInstance();
        return new Q((resolve, reject) => {
            resolve(_.find(self.data, o => o.id === id));
        });
    }

    create (item) {
        let self = this.getInstance();
        return new Q((resolve, reject) => {
            self.idClock++;
            item.id = self.idClock;
            self.data.push(item);
            resolve();
        });
    }

    update (id, item) {
        let self = this.getInstance();
        return new Q((resolve, reject) => {
            for(let i = 0; i < self.data.length; i++) {
                if(self.data[i].id === id) {
                    self.data[i] = Object.assign({}, self.data[i], item);
                    break;
                }
            }
            resolve();
        });
    }

    remove (id) {
        let self = this.getInstance();
        return new Q((resolve, reject) => {
        _.remove(self.data, o => o.id === id);
        resolve();
        });
    }
}

module.exports = MockDataService;