const {Model, DataTypes} = require("sequelize")

class tb_live extends Model{
    static init(sequelize){
        super.init({
            
            tituloLive:    DataTypes.STRING,
            nomeCanal:      DataTypes.STRING,
            linkLive:       DataTypes.STRING,
            dataLive:       DataTypes.DATEONLY,
            horarioLive:    DataTypes.TIME

        }, {
            sequelize
        })
    }
}

module.exports = tb_live