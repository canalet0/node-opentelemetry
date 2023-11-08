/*dice.js*/

const Logger = require('../cross-cutting/logger.js');
const DICE_MIN_VALUE = 1;
const DICE_MAX_VALUE = 6;


function rollOnce(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function rollTheDice(rolls) {
    new Logger().info('Received request to roll dice ' + rolls + ' times');
    const result = [];
    for (let i = 0; i < rolls; i++) {
      result.push(rollOnce(DICE_MIN_VALUE, DICE_MAX_VALUE));
    }
    return result;
}

module.exports = { rollTheDice };