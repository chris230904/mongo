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
const carritoRouter = require('./app/routes/carrito')
const categoriaRouter = require('./app/routes/categoria')
const metodoPagoRouter = require('./app/routes/metodoPago')
const productoRouter = require('./app/routes/producto')
const ordenRouter = require('./app/routes/orden')
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
app.use(carritoRouter)
app.use(categoriaRouter)
app.use(metodoPagoRouter)
app.use(productoRouter)
app.use(ordenRouter)
app.use(itemsRouter)

app.listen(port, () =>{
    console.log('La aplicacion esta en linea!');
})

initDB()