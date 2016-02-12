'use strict'

module.exports = !!(
  process.env.LAMBDA_TASK_ROOT ||
  false
)
