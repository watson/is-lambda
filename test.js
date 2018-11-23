'use strict'

var assert = require('assert')
var clearRequire = require('clear-require')

process.env.AWS_EXECUTION_ENV = 'AWS_Lambda_nodejs6.10'
process.env.LAMBDA_TASK_ROOT = '/var/task'

var isCI = require('./')
assert(isCI === 'Amazon')

delete process.env.AWS_EXECUTION_ENV

clearRequire('./')
isCI = require('./')
assert(!isCI)

process.env.X_GOOGLE_FUNCTION_NAME = 'http'

clearRequire('./')
isCI = require('./')
assert(isCI === 'Google')
