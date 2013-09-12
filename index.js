'use strict'

var request = require('request')
  , nodechecker = {}
  , NODECHECKER_ROOT = 'http://api.nodechecker.com'

function generateJsonCallback(callback) {
  return function (err, response, body) {
    if (err) {
      callback(err)
      return
    }

    if (typeof body === 'object') {
      callback(null, body)
      return
    }

    try {
      body = JSON.parse(body)
    } catch (e) {
      callback(e)
      return
    }

    callback(null, body)
  }
}

nodechecker.getStats = getStats
function getStats(callback) {
  request.get(NODECHECKER_ROOT + '/stats', generateJsonCallback(callback))
}

nodechecker.getModuleStats = getModuleStats
function getModuleStats(module, callback) {
  request.get(NODECHECKER_ROOT + '/info/' + module, generateJsonCallback(callback))
}

nodechecker.getTimedOut = getTimedOut
function getTimedOut(callback) {
  request.get(NODECHECKER_ROOT + '/stats/timedout', generateJsonCallback(callback))
}

nodechecker.getInvalidTarballs = getInvalidTarballs
function getInvalidTarballs(callback) {
  request.get(NODECHECKER_ROOT + '/stats/tarball', generateJsonCallback(callback))
}

nodechecker.getSuccessful = getSuccessful
function getSuccessful(callback) {
  request.get(NODECHECKER_ROOT + '/stats/ok', generateJsonCallback(callback))
}

nodechecker.getFailed = getFailed
function getFailed(callback) {
  request.get(NODECHECKER_ROOT + '/stats/nok', generateJsonCallback(callback))
}

nodechecker.getNoTests = getNoTests
function getNoTests(callback) {
  request.get(NODECHECKER_ROOT + '/stats/withouttests', generateJsonCallback(callback))
}

nodechecker.requestTesting = requestTesting
function requestTesting(module, callback) {
  request.post(NODECHECKER_ROOT + '/test', {
    json: {
      module: module
    }
  }, generateJsonCallback(callback))
}

module.exports = nodechecker
