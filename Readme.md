
# black-scholes
[![NPM version][npm-image]][npm-url]
[![build status][circle-image]][circle-url]
[![license][license-image]][license-url]

> The Black-Scholes formula

This is an implementation of the Black-Scholes model for pricing a European call option.

Assumptions:
  - The stock returns follow a geometric Brownian motion
  - The underlying asset does not pay a dividend
  - The rate of return on the risk-free asset is constant
  - There are no arbitrage opportunities on the market

## Installation

```bash
$ npm install bs-formula
```

## Usage

```js
var bs = require('bs-formula');

var inputs = {
  currentPrice: 57,         // current price of the underlying asset
  strikePrice: 50,          // strike price of the option
  interestRate: 0.01,       // annual risk-free interest rate
  volatility: 0.50,         // volatility of the underlying asset
  timeToExpiration: 0.25    // time to expiration of the option in years
};

bs(inputs); // 9.70
```

## License

[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/black-scholes.svg?style=flat-square
[npm-url]: https://npmjs.org/package/black-scholes
[circle-image]: https://img.shields.io/circleci/project/stevenmiller888/black-scholes.svg
[circle-url]: https://circleci.com/gh/stevenmiller888/black-scholes
[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://tldrlegal.com/license/mit-license