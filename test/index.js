
/**
 * Dependencies.
 */

var bs = require('..');
var assert = require('assert');

/**
 * Tests.
 */

describe('Black Scholes()', function(){
  it('should be a function', function(){
    assert.equal(typeof bs, 'function');
  });

  it('should calculate the price of a European call option', function(){
    var inputs = {
      currentPrice: 57,
      strikePrice: 50,
      interestRate: 0.01,
      volatility: 0.50,
      timeToExpiration: 0.25
    };

    var result = bs(inputs);
    assert(result === 9.69597175545789);
  });
});
