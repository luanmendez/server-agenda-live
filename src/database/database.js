const sequelize = require('sequelize')
const DbConfig = require('./dbconfig')

const connection = new sequelize(DbConfig)


//  ---- INSTANCIANDO MODELS 
const modelLive = require('../models/live')
modelLive.init(connection)



connection.authenticate().then(e => {
    console.log("Conectado ao banco com sucesso")
}).catch(e=>{
    console.log("Falha ao se conectar com o banco de dados: " + e)
})

module.exports = connection