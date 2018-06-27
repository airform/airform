const test = require('ava')
const pkg = require('./package.json')
const pkgLock = require('./package-lock.json')

test('version', t => {
	t.is(pkg.version, pkgLock.version)
})
