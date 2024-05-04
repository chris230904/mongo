const mongoose = require('mongoose')
const  mongoosePaginate = require('mongoose-paginate-v2')

const ProducScheme = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        imagen: {
            type: String,
            default: 'http://image.com'
        },
        descripcion: {
            type: String
        },
        precio: {
            type: String,
            required: true
        },
        stock: {
            type: String,
            required: true
        },
        categoria: {
            type: String ,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

ProducScheme.plugin(mongoosePaginate)
module.exports = mongoose.model('producto', ProducScheme)