# nodechecker

A simple wrapper around the [nodechecker.com](http://npmt.abru.pt/) API.

## Installation

```
npm install nodechecker
```

## Usage

Requiring `nodechecker` returns an object of Functions as described below. No
`new` required, nothing to `create`, nada. In the descriptions, `nodechecker` refers
to the returned module instance as if preceded by:

```
var nodechecker = require('nodechecker')
```

### nodechecker.getStats(callback)

Calls `callback` with either an Error or an Object of global Nodechecker stats,
such as `ok`, the number of successfully-tested modules.

### nodechecker.getModuleStats(module, callback)

Calls `callback` with either an Error or an Object of stats local to `module`,
including its `status` (e.g. `"ok"`) and the `output` of running the tests.

### nodechecker.getTimedOut(callback)

Calls `callback` with either an Error or an Array of the names of all modules
that timed out during testing.

### nodechecker.getInvalidTarballs(callback)

Calls `callback` with either an Error or an Array of the names of all modules
that had invalid tarballs during testing.

### nodechecker.getSuccessful(callback)

Calls `callback` with either an Error or an Array of the names of all modules
that contained only passing tests.

### nodechecker.getFailed(callback)

Calls `callback` with either an Error or an Array of the names of all modules
that contained at least one failing test.

### nodechecker.getNoTests(callback)

Calls `callback` with either an Error or an Array of the names of all modules
that did not contain tests.

## Contributing

Please fork and submit a pull request. However:

 - Please don't add dependencies unless they're necessary. `request` should meet
    most of your needs.
