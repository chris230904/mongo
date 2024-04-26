const express = require('express')
const bodyParser = require('body-parser')
const initDB = require('./config/db')

const app = express()

const port = 3001

/*app.get('/', (req, res) =>{
    res.send({
        data: 'Hola mundo!'
    })
})*/

const userRouter = require('./app/routes/user')
const itemsRouter = require('./app/routes/items')

app.use(
    bodyParser.json({
        limit: '20mb'
    })
);
app.use(
    bodyParser.urlencoded({ 
        limit: '20mb', 
        extended: true 
    })
);
app.use(userRouter)
app.use(itemsRouter)

app.listen(port, () =>{
    console.log('La aplicacion esta en linea!');
})

initDB()