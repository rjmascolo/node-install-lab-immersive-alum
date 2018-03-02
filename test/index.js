// not much different
var expect = require('chai').expect,
  cp = require('child_process'),
  semver = require('semver')

describe('node version', function () {
  it('must be defined', function(done){
    expect(process.versions.node).to.exist
    done()
  })

})

describe('npm version', function () {
  it('must be 2.14.15 or greater', function(done){
    child = cp.exec('npm -v',
    function (error, stdout, stderr) {
      expect(stderr).to.equal('')
      if (error !== null) {
        console.log('exec error: ' + error)
      }
      stdout = stdout.replace('\n','')
      expect(semver.satisfies(stdout, '>=2.14.15')).to.equal(true)
      done()
    })
  })
})
