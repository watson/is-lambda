# is-lambda

Returns `true` if the current environment is an [AWS
Lambda](https://aws.amazon.com/lambda/) server.

[![Build status](https://travis-ci.org/watson/is-lambda.svg?branch=master)](https://travis-ci.org/watson/is-lambda)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install is-lambda
```

## Usage

```js
var isLambda = require('is-lambda')

if (isLambda) {
  console.log('The code is running on a AWS Lambda or a Google Cloud Function')
}

if (isLambda === 'Amazon') {
  console.log('The code is running on a AWS Lambda')
}

if (isLambda === 'Google') {
  console.log('The code is running on a Google Cloud Function')
}
```

## License

MIT
