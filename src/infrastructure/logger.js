const logsAPI = require('@opentelemetry/api-logs');
const { OTLPLogExporter } = require('@opentelemetry/exporter-logs-otlp-http');
const {
  LoggerProvider,
  SimpleLogRecordProcessor,
  ConsoleLogRecordExporter,
  BatchLogRecordProcessor,
} = require('@opentelemetry/sdk-logs');

const logExporter = new OTLPLogExporter();

// To start a logger, you first need to initialize the Logger provider.
const loggerProvider = new LoggerProvider();
// Add a processor to export log record
/*loggerProvider.addLogRecordProcessor(
  new SimpleLogRecordProcessor(new ConsoleLogRecordExporter())
);*/
loggerProvider.addLogRecordProcessor(new BatchLogRecordProcessor(logExporter));

// You can also use global singleton
logsAPI.logs.setGlobalLoggerProvider(loggerProvider);
const OTL_logger = logsAPI.logs.getLogger('default');

module.exports = { OTL_logger };
