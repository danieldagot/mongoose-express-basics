const ColorSchema = require( './ColorSchema' )
const mongoose = require( 'mongoose' )

const ColorModel = mongoose.model( 'color', ColorSchema )

module.exports = ColorModel
