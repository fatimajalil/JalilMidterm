// link to mongoose
const mongoose = require('mongoose')

let ordersSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        type: {
            type: String,
            required: true,
            trim: true
        },
        size: {
        type: String,
        required: true,
        trim: true
        },
        quantity: {
            type: String,
            required: true,
            trim: true
        },
        total: {
            type: String,
            required: true,
            trim: true
        }
    }
)
 module.exports = mongoose.model( 'Order', ordersSchema)