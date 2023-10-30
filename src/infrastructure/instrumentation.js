/*instrumentation.js*/

const OTL_SERVICE_NAME = 'node-opentelemetry';
const OTL_SERVICE_VERSION = '0.1.0'; //TODO - get value from VERSION file

// Require dependencies
const { NodeSDK } = require('@opentelemetry/sdk-node');
const {
  getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

//exporters
const { ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-node');
const { ConsoleMetricExporter } = require('@opentelemetry/sdk-metrics');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-proto');
const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-proto');

//readers
const { PeriodicExportingMetricReader } = require('@opentelemetry/sdk-metrics');

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: OTL_SERVICE_NAME,
    [SemanticResourceAttributes.SERVICE_VERSION]: OTL_SERVICE_VERSION,
  }),
  traceExporter: new OTLPTraceExporter(),
  metricReader: new PeriodicExportingMetricReader({exporter: new OTLPMetricExporter(),}),
  instrumentations: [getNodeAutoInstrumentations()],
});


sdk.start();

module.exports = { OTL_SERVICE_NAME, OTL_SERVICE_VERSION };