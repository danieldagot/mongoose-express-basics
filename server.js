const express = require( 'express' )
const app = express()
const bodyParser = require( 'body-parser' )
const mongoose = require( 'mongoose' )
const port = 3030
const ColorModel = require( './models/ColorModel' )

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )

app.get( '/colors', ( req, res ) => {
    ColorModel.find( {}, ( err, data ) => res.json( data ) )
} )

app.post( '/color', ( req, res ) => {
    const colorBody = req.body
    const color = new ColorModel( colorBody )

    color.save( () => res.json( { success: true } ) )

    // Create a new color
} )

mongoose.connect( 'mongodb://localhost/colors', { useNewUrlParser: true } ).then( () => {
    app.listen( port, () => console.log( `Running server on port ${ port }` ) )
} )
