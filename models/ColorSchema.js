const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const RGBColor = new Schema( {
    R: Number,
    G: Number,
    B: Number
} )

const ColorSchema = new Schema( {
    name: String,
    hexCode: String,
    rgb: RGBColor
} )

module.exports = ColorSchema
