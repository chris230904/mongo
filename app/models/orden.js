const mongoose = require('mongoose')
const  mongoosePaginate = require('mongoose-paginate-v2')

const OrdenScheme = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        producto: {
            type: String,
        },
        cantidad: {
            type: String
        },
        estado: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

OrdenScheme.plugin(mongoosePaginate)
module.exports = mongoose.model('orden', OrdenScheme)