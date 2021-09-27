const express = require("express");
const routes = express.Router();

let liveController = require('./controllers/live-controller')




// routes.get('/', function(req, res){
//   res.send("Cannot GET /")
// })

//  ---- LIVE ROUTES
routes.get('/live/',    liveController.getAll)
routes.post('/live/',   liveController.saveLive)
routes.put('/live/:id', liveController.updateLive )
routes.delete('/live/:id', liveController.deleteLive)

module.exports	= routes