const  express = require('express')
const  app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 


const database = require('./database/database')


const routes = require('./routes')

app.use(routes)


app.listen(3000)