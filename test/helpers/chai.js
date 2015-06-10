var chai = require('chai');
var sinonChai = require('sinon-chai');

chai.config.includeStack = true;

global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;

chai.use(sinonChai);