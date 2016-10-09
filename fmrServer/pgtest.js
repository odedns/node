/*

var pg = require('pg');

var conString = "postgres://postgres:root@localhost/fmrtest";

var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * from users', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    for(var i=0; i < result.rowCount; ++i ) {
      console.log(result.rows[i].name);
    }

    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
});
*/

var dl = require('./datalayer');
console.log("dl = " + dl);
var rows = dl.getAll();
console.log("got rows: " + rows.length);
for( var r in rows) {

  console.log(r.name);
}
