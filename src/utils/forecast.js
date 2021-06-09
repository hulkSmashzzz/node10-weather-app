const request = require('request')

const forecast = (address, callback) => {
    const API='4c35ec236584fe7257f393796f8d658c'
    const url = 'http://api.weatherstack.com/current?access_key='+API+'&query='+address
    //http://api.weatherstack.com/current?access_key=4c35ec236584fe7257f393796f8d658c&query=

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            if(body.current === undefined){
                callback('something went wrong! please search again with full location name.',undefined)
            }else{
                callback(undefined, body.current.weather_descriptions[0]+ '.\n\nIt is currently ' + body.current.temperature + ' degress out.')
            }
        }
    })
}

module.exports = forecast