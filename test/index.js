var nodechecker = require('../')
  , expect = require('chai').expect

describe('Nodechecker API', function () {
  describe('getStats', function () {
    it('should work', function (done) {
      nodechecker.getStats(function (err, stats) {
        expect(err).to.not.exist
        expect(stats).to.be.an('object')
        expect(stats).to.have.property('ok')
        expect(stats.ok).to.be.a('number')

        done()
      })
    })
  })

  describe('getModuleStats', function () {
    it('should work', function (done) {
      nodechecker.getModuleStats('mi', function (err, stats) {
        expect(err).to.not.exist
        expect(stats).to.be.an('object')
        expect(stats).to.have.property('module', 'mi')
        expect(stats).to.have.property('status', 'ok')
        expect(stats).to.have.property('output')
        expect(stats).to.have.property('tested')

        done()
      })
    })
  })

  describe('getTimedOut', function () {
    it('should work', function (done) {
      nodechecker.getTimedOut(function (err, modules) {
        expect(err).to.not.exist
        expect(modules).to.be.an.instanceof(Array)
        expect(modules).to.contain('mongoose')

        done()
      })
    })
  })

  describe('getInvalidTarballs', function () {
    it('should work', function (done) {
      nodechecker.getInvalidTarballs(function (err, modules) {
        expect(err).to.not.exist
        expect(modules).to.be.an.instanceof(Array)

        // nodejs-common hasn't been updated in 2 years.
        expect(modules).to.contain('nodejs-common')

        done()
      })
    })
  })

  describe('getSuccessful', function () {
    it('should work', function (done) {
      nodechecker.getSuccessful(function (err, modules) {
        expect(err).to.not.exist
        expect(modules).to.be.an.instanceof(Array)
        expect(modules).to.contain('mi')

        done()
      })
    })
  })

  describe('getFailed', function () {
    it('should work', function (done) {
      nodechecker.getFailed(function (err, modules) {
        expect(err).to.not.exist
        expect(modules).to.be.an.instanceof(Array)

        // nodejs-common hasn't been updated in over a year.
        expect(modules).to.contain('joyentexpress')

        done()
      })
    })
  })

  describe('getNoTests', function () {
    it('should work', function (done) {
      nodechecker.getNoTests(function (err, modules) {
        expect(err).to.not.exist
        expect(modules).to.be.an.instanceof(Array)

        // awesome hasn't been updated in 3 years.
        expect(modules).to.contain('awesome')

        done()
      })
    })
  })
})
