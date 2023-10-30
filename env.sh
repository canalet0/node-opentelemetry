export OTEL_TRACES_EXPORTER="otlp"
export OTEL_METRICS_EXPORTER="otlp"
export OTEL_EXPORTER_OTLP_ENDPOINT="your-endpoint"
#export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"  -> https://opentelemetry.io/docs/instrumentation/js/automatic/module-config/
export OTEL_SERVICE_NAME="node-opentelemtry"
export OTEL_LOG_LEVEL=all #https://opentelemetry.io/docs/instrumentation/js/automatic/#troubleshooting
#export NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"