const mongoose = require('mongoose')
const  mongoosePaginate = require('mongoose-paginate-v2')

const MetodoPagoScheme = new mongoose.Schema(
    {
        metodo: {
            type: String
        },
        descripcion: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

MetodoPagoScheme.plugin(mongoosePaginate)
module.exports = mongoose.model('Meodo de pago', MetodoPagoScheme)