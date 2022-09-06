const Sequelize = require('sequelize')
const db = require('./config/config')

const Gig = db.define('gig', {
    title:{
        type: Sequelize.STRING,
    },
    info:{
        type:Sequelize.STRING
    },
    genres:{
        type: Sequelize.STRING
    },
    language:{
        type: Sequelize.STRING
    }
});

module.exports = Gig;