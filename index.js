var sql = require('mssql');

exports.request = function(params, credentials, cb) {
  var connection = new sql.Connection(credentials);
  connection.connect().then(function() {
    var request = connection.request(), promise;
    request.multiple = params.multiple;

    if (params.query) {
      // Performs SQL query.
      promise = request.query(params.query);
    } else if (params.procedure) {
      // Performs SQL procedure.
      var input = params.input, output = params.output;
      if (input) {
        request.input(input.name, input.value);
      }
      if (output) {
        request.output(output.name);
      }
      promise = request.execute(params.procedure);
    }

    promise.then(function(recordset, returnValue) {
      cb(null, recordset, returnValue);
    }).catch(function(err) {
      // Error performing request
      cb(err);
    });
  }).catch(function(err) {
    // Error making connection
    cb(err);
  });
};