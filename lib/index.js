
/**
 * Expose `bs`.
 */

module.exports = bs;

/**
 * Black Scholes.
 *
 * @param {Object} opts
 *   @opt {Number} currentPrice
 *   @opt {Number} strikePrice
 *   @opt {Number} interestRate
 *   @opt {Number} volatility
 *   @opt {Number} timeToExpiration
 */

function bs(opts) {
  var currentPrice = opts.currentPrice;
  var strikePrice = opts.strikePrice;
  var interestRate = opts.interestRate || 0.01;
  var volatility = opts.volatility || 0.5;
  var timeToExpiration = opts.timeToExpiration;

  var presentValueOfStock = currentPrice;
  var presentValueOfStrike = strikePrice * (Math.exp(-interestRate * Math.sqrt(timeToExpiration)));

  volatility = volatility * Math.sqrt(timeToExpiration); // normalize the volatility for the time period

  d1 = Math.log(presentValueOfStock / presentValueOfStrike) / volatility + 0.5 * volatility;
  d2 = Math.log(presentValueOfStock / presentValueOfStrike) / volatility - 0.5 * volatility;

  d1Normal = normal(d1);
  d2Normal = normal(d2);

  var callPrice = presentValueOfStock * d1Normal - presentValueOfStrike * d2Normal;

  return callPrice;
}

/**
 * Cumulative Distribution (i.e. the probability of variable `x` falling
 * in the interval (-Infinity, x])
 *
 * @param {Number} x
 */

function normal(x) {
  var t = 1 / (1 + .2316419 * Math.abs(x));
  var d = .3989423 * Math.exp(-x * x / 2);
  var probability = d * t * (.3193815 + t * (-.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));

  if (x > 0) {
    probability = 1 - probability;
  }

  return probability;
}
