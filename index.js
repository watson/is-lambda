'use strict'

module.exports = !!(
  process.env.AWS_EXECUTION_ENV ||
  false
)
