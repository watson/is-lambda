'use strict'

var assert = require('assert')
var clearRequire = require('clear-require')

process.env.LAMBDA_TASK_ROOT = '/var/task'

var isCI = require('./')
assert(isCI)

delete process.env.LAMBDA_TASK_ROOT

clearRequire('./')
isCI = require('./')
assert(!isCI)
