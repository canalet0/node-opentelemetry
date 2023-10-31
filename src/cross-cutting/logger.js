const {OTL_logger} = require('../infrastructure/logger.js')
const {SeverityNumber} = require('@opentelemetry/api-logs');

class Logger {

    /** @type {OTL_logger} */
    _logger;

    constructor() {
        this._logger = OTL_logger;
    }

    /**
     * Log ERROR message
     * @param text {string}
     */
    error(text) {
        this._emit(SeverityNumber.ERROR, 'error', text)
    }

    /**
     * Log WARNING message
     * @param text {string}
     */
    warning(text) {
        this.warn(text);
    }

    /**
     * Log WARNING message
     * @param text {string}
     */
    warn(text) {
        this._emit(SeverityNumber.WARN, 'warn', text)
    }

    /**
     * Log INFO message
     * @param text {string}
     */
    info(text) {
        this._emit(SeverityNumber.INFO, 'info', text)
    }

    /**
     * Log DEBUG message
     * @param text {string}
     */
    debug(text) {
        this._emit(SeverityNumber.DEBUG, 'debug', text)
    }

    /**
     * Emit log to OTL
     * @param severityNumber {SeverityNumber}
     * @param severityText {string}
     * @param body {string}
     */
    _emit(severityNumber, severityText, body) {
        this._logger.emit({severityNumber, severityText, body})
    }
}

module.exports = Logger;