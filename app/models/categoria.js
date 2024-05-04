const mongoose = require('mongoose')
const  mongoosePaginate = require('mongoose-paginate-v2')

const DescripcionScheme = new mongoose.Schema(
    {
        nombreCategora: {
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

DescripcionScheme.plugin(mongoosePaginate)
module.exports = mongoose.model('descripcion', DescripcionScheme)