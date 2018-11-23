'use strict'

module.exports =
  (process.env.LAMBDA_TASK_ROOT && process.env.AWS_EXECUTION_ENV && 'Amazon') ||
  (process.env.X_GOOGLE_FUNCTION_NAME && 'Google') ||
  ''
