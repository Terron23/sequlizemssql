var msql = require('mssql');

var con = msql.createConnection({
  user:'terron23',
   password: 'kobesmalls23',
  database: 'SSIS',
  server: 'localhost\\TMJSQLEXPRESS', //'LAPTOP-5QCDNMK9\
  port: '1433',
  driver: 'msql',
  options: {
    trustedConnection: true
  }
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});