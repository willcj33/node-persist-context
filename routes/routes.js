'use strict';

const ctx = { xID: 0 }; //Setup default context variables for the service you are in. Should be an object that is passed by reference
const MockService = require('./../services/mockDataService');
const Service     = require('geofeedia-server');
const dataService = new MockService(ctx);
const sample_get_schema    = require('./../schemas/sample-get-schema');
const sample_post_schema   = require('./../schemas/sample-post-schema');
const sample_put_schema    = require('./../schemas/sample-put-schema');
const sample_delete_schema = require('./../schemas/sample-delete-schema');


module.exports = [
    {
        type: Service.ACTION_TYPES.GET,
        route: '/',
        handler: function getTest(req, res, next) {
            req.metricBuilder.startTimer('dataservice.get');
            dataService.getAll()
                .then(data => {
                    req.metricBuilder.finishTimer('dataservice.get');
                    res.send(200, data);
                })
                .catch(ex => {
                    req.metricBuilder.finishTimer('dataservice.get');
                    req.logger.log(ex);
                    res.send(500);
                })
                .error(err => {
                    req.metricBuilder.finishTimer('dataservice.get');
                    req.logger.log(err);
                    res.send(500);
                })
                .finally(() => {
                    next();
                });
        }
    },
    {
        type: Service.ACTION_TYPES.GET,
        route: '/:id',
        schema: sample_get_schema,
        handler: function findTest(req, res, next) {
            req.metricBuilder.startTimer('dataservice.get');
            dataService.find(+req.params.id)
                .then(data => {
                    req.metricBuilder.finishTimer('dataservice.find');
                    res.send(200, data);
                })
                .catch(ex => {
                    req.metricBuilder.finishTimer('dataservice.find');
                    req.logger.log(ex);
                    res.send(500);
                })
                .error(err => {
                    req.metricBuilder.finishTimer('dataservice.find');
                    req.logger.log(err);
                    res.send(500);
                })
                .finally(() => {
                    next();
                });
        }
    },
    {
        type: Service.ACTION_TYPES.POST,
        route: '/',
        schema: sample_post_schema,
        handler: function postTest(req, res, next) {
            req.metricBuilder.startTimer('dataservice.create');
            dataService.create(req.params.item)
                .then(data => {
                    req.metricBuilder.finishTimer('dataservice.create');
                    res.send(200, data);
                })
                .catch(ex => {
                    req.metricBuilder.finishTimer('dataservice.create');
                    req.logger.log(ex);
                    res.send(500);
                })
                .error(err => {
                    req.metricBuilder.finishTimer('dataservice.create');
                    req.logger.log(err);
                    res.send(500);
                })
                .finally(() => {
                    next();
                });
        }
    },
    {
        type: Service.ACTION_TYPES.PUT,
        route: '/:id',
        schema: sample_put_schema,
        handler: function putTest(req, res, next) {
            req.metricBuilder.startTimer('dataservice.get');
            dataService.update(+req.params.id, req.params.item)
                .then(data => {
                    req.metricBuilder.finishTimer('dataservice.update');
                    res.send(200, data);
                })
                .catch(ex => {
                    req.metricBuilder.finishTimer('dataservice.update');
                    req.logger.log(ex);
                    res.send(500);
                })
                .error(err => {
                    req.metricBuilder.finishTimer('dataservice.update');
                    req.logger.log(err);
                    res.send(500);
                })
                .finally(() => {
                    next();
                });
        }
    },
    {
        type: Service.ACTION_TYPES.DEL,
        route: '/:id',
        schema: sample_delete_schema,
        handler: function deleteTest(req, res, next) {
            req.metricBuilder.startTimer('dataservice.remove');
            dataService.remove(+req.params.id)
                .then(data => {
                    req.metricBuilder.finishTimer('dataservice.remove');
                    res.send(200, data);
                })
                .catch(ex => {
                    req.metricBuilder.finishTimer('dataservice.remove');
                    req.logger.log(ex);
                    res.send(500);
                })
                .error(err => {
                    req.metricBuilder.finishTimer('dataservice.remove');
                    req.logger.log(err);
                    res.send(500);
                })
                .finally(() => {
                    next();
                });
        }
    }
];