const Live = require('../models/live')

module.exports = {

    async getAll(req, res){
        const lives = await Live.findAll()
        res.json(lives)
    },

    async saveLive(req, res) {
               
        const 
        {   
            tituloLive, 
            nomeCanal, 
            linkLive,
            dataLive,
            horarioLive,
        } = req.body

        try{

            let live = await Live.create (
                {
                    tituloLive, 
                    nomeCanal, 
                    linkLive,
                    dataLive,
                    horarioLive
                }
            )

            res.json(live)

        }catch(e){
            res.status(500)
            res.send(JSON.stringify({'message': 'Não foi possível cadastrar o usuário', 'errorLog': e.message}))
        }
                   
    },

    async updateLive(req, res) {
               
        const 
        {   
            id,
            tituloLive, 
            nomeCanal, 
            linkLive,
            dataLive,
            horarioLive,
        } = req.body

        try{

            let live = await Live.update(
                {
                    tituloLive, 
                    nomeCanal, 
                    linkLive,
                    dataLive,
                    horarioLive
                },
                {
                    where: {
                        id: id
                    }
                }
            )

            res.json(live)

        }catch(e){
            res.status(500)
            res.send(JSON.stringify({'message': 'Não foi possível cadastrar o usuário', 'errorLog': e.message}))
        }
                   
    },

    async deleteLive(req, res){

        let {id}  = req.params
        
       let status = await Live.destroy({
            where: {
                id: id
            }
        });

        if (status == 0 ){
            res.status(500)
            res.send(JSON.stringify({'message': 'Usuario não encontrado'}))
        }else{
            res.send(JSON.stringify({'message': 'Registro apagado'}))
        }

    }
    

    
}
