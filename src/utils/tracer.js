//tracer.js
const { trace } = require('@opentelemetry/api');
const { OTL_SERVICE_NAME, OTL_SERVICE_VERSION } = require('../infrastructure/instrumentation.js');

function getTracer() {
    return trace.getTracer(OTL_SERVICE_NAME, OTL_SERVICE_VERSION);
}

module.exports = { getTracer };