const { OTL_SERVICE_NAME, OTL_SERVICE_VERSION} = require('./instrumentation.js')
const { DiagConsoleLogger, DiagLogLevel, diag } = require('@opentelemetry/api');
const { logs, SeverityNumber }  = require('@opentelemetry/api-logs');
const { OTLPLogExporter }  = require('@opentelemetry/exporter-logs-otlp-http');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const {
  LoggerProvider,
  ConsoleLogRecordExporter,
  BatchLogRecordProcessor,
  SimpleLogRecordProcessor,
}  = require('@opentelemetry/sdk-logs');


// To start a logger, you first need to initialize the Logger provider.
const loggerProvider = new LoggerProvider({resource: new Resource({
  [SemanticResourceAttributes.SERVICE_NAME]: OTL_SERVICE_NAME,
  [SemanticResourceAttributes.SERVICE_VERSION]: OTL_SERVICE_VERSION,
})});

// Add a processor to export log record
loggerProvider.addLogRecordProcessor(new SimpleLogRecordProcessor(new ConsoleLogRecordExporter()));
loggerProvider.addLogRecordProcessor(new BatchLogRecordProcessor(new OTLPLogExporter()));

// You can also use global singleton
logs.setGlobalLoggerProvider(loggerProvider);
const OTL_logger = logs.getLogger('example', '1.0.0');;

module.exports = { OTL_logger };
