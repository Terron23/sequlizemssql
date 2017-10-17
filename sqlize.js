const sequelize = require('sequelize');

var sq = new sequelize('SSIS', 'terron23', 'kobesmalls23', {
    dialect: 'mssql',
  server: 'localhost\\TMJSQLEXPRESS', //'LAPTOP-5QCDNMK9\
  port: '1433',
  driver: 'msql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});


sq.authenticate()
    .then(function() {
        console.log("Successfully Connected");
    })
    .catch(function (err) {
        console.log("Unable to connect to db", err);
    });