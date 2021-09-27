const sequelize = require('sequelize')
const connection = require('../../database/database')

const Live =  connection.define('tb_live', {

    tituloLive: {
        type: sequelize.STRING,
        allowNull: false        
    },
    nomeCanal: {
        type: sequelize.STRING, 
        allowNull: false       
    },
    linkLive: {
        type: sequelize.STRING,
        allowNull: false
    },
    dataLive:{
        type: sequelize.DATEONLY,
        allowNull: false
    },
    horarioLive:{
        type: sequelize.TIME,
        allowNull: false
    }
})

Live.sync({force:true}).then(() => console.log("Tabela Criada com sucesso!!"))