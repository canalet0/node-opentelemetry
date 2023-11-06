/*dice.js*/

const Logger = require('../cross-cutting/logger.js');
const { tracer } = require('../utils/tracer.js');


function rollOnce(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function rollTheDice(rolls, min, max) {
    // Create a span. A span must be closed.
    return tracer.startActiveSpan('rollTheDiceActiveSpan', (span) => {
      let logger = new Logger();
      logger.info('log INFO inside rollTheDiceActiveSpan');
      const result = [];
      for (let i = 0; i < rolls; i++) {
        result.push(rollOnce(min, max));
      }
      // Be sure to end the span!
      span.end();
      return result;
    });
  }

module.exports = { rollTheDice };