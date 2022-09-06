//connection to the database..
const { Sequelize } = require('sequelize');
const db = new Sequelize('app', 'postgres', 'Rohit2759', {
    host: 'localhost',
    dialect: 'postgres',  //it indicates connection to PostgreSQL server            

    //pool is used for sequelize connection pool configuration.
    pool: {             
        max: 5,      //max no of connection in pool
        min: 0,      //min no of connection in pool
        acquire: 30000,  //max time for pool for trying to get connection before throwing error
        idle: 10000    //max time for pool that connection can be idle ..
    }
});

module.exports = db;