require('dotenv').config()

const request = require( 'request-promise' )
const API_KEY = process.env.API_KEY

class ColorsApi {
    async fetchColorByName( colorHexCode ) {
        let response = await request.get( `https://www.thecolorapi.com/id?hex=${colorHexCode}` )

        response = JSON.parse( response )

        const color = {
            name: response.name.value,
            hexCode: colorHexCode,
            rgb: {
                r: response.rgb.r,
                g: response.rgb.g,
                b: response.rgb.b
            }
        }

        return color
    }
}

module.exports = ColorsApi
