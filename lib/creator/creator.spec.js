var creator = require('./creator');
var fs = require('fs');
var del = require('del');
var path = require('path');

describe('Module: Creator', function() {
  describe('#module', function() {
    afterEach(function() {
      del.sync(path.join(process.cwd(), '/foo'));
    });

    it('should create a folder with the module `name`', function() {
      var createFolder = sinon.spy(fs, 'mkdirSync');

      creator.module('foo');

      expect(createFolder).to.have.been.calledWith(path.join(process.cwd(), '/foo/'));
    });

    it('should create a file with the module name', function() {
      var  createFile = sinon.spy(fs, 'writeFile');

      creator.module('foo');

      expect(createFile).to.have.been.calledWith(path.join(process.cwd(), '/foo/foo.module.js'));
    });
  });
});