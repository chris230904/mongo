const mongoose = require('mongoose')
const  mongoosePaginate = require('mongoose-paginate-v2')

const CarScheme = new mongoose.Schema(
    {
        Cliente: {
            type: String
        },
        Producto: {
            type: String
        },
        cantidad: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

CarScheme.plugin(mongoosePaginate)
module.exports = mongoose.model('carrito', CarScheme)