var pg = require('pg');
var config = require('config');

module.exports =  {

  getAll: function()

{
  var rows = [];
  var client = getConnection();
  client.connect(function(err) {
    var config = require('config');
      return console.error('could not connect to postgres', err);
    }

  client.query('SELECT * from users', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      for(var i=0; i < result.rowCount; ++i ) {
        rows.push(result.rows[i]);
        console.log("pushed " + result.rows[i].name);
      }

      //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
      client.end();
      return(rows);
    });
  });


}

} //module.exports

function getConnection()
{
//  var conString = "postgres://postgres:root@localhost/fmrtest";
  var conString = config.get('dbUrl');
  var client = new pg.Client(conString);
  return(client);

}
