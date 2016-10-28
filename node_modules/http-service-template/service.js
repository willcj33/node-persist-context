'use strict';

const appConfig     = require('./app.config.json');
const packageConfig = require('./package.json');
const Service       = require('geofeedia-server');
const routes        = require('./routes/routes');

var service = new Service({
    serviceName: packageConfig.name,
    version: packageConfig.version,
    host: appConfig.service.host,
    port: appConfig.service.port,
    logging: appConfig.logging
});

service
    .register(routes)
    .start();

// Need this for testing purposes.
module.exports = {};