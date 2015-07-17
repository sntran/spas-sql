# spas-sql
SQL Database Connector for SPAS

## Usage

```javascript
var sql = require('spas-sql');

var params = {
  'query': 'SELECT * FROM Production.Product ORDER BY Name ASC'
};

var credentials = {
  'user': null,
  'password': null,
  'server': 'localhost',
  'port': 1433,
  'database': 'AdventureWorks2012',
  'connectionTimeout': 15000,
  'requestTimeout': 15000,
  'pool': {
    'max': 10, // The maximum number of connections there can be in the pool.
    'min': 0, // The minimun of connections there can be in the pool.
    'idleTimeoutMillis': 30000 // The Number of milliseconds before closing an unused connection.
  }
}

sql.request(params, credentials, function(err, recordset, [returnValue]) {
  // Do something with the recordset, or returnValue if a procedure
});

```