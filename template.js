'use strict';

exports.description = 'Create a arale based site.';

exports.notes = '';

exports.warnOn = '*';

exports.template = function(grunt, init, done) {

  init.process({type: 'cmd'}, [], function(err, props) {

    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();

  });
};
