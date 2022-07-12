const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a42e6b269c7a6fecdc72969383c54598&query=' + latitude + ',' + longitude 

    request({url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body)
            // links = body.current.weather_icons
            callback(undefined, body.current.weather_descriptions[0] + '\n\n' + ("Temperature: ") + body.current.temperature + "\xB0C" + '\n\n' + "Wind Speed: " + body.current.wind_speed + " km/h" + '\n\n' + "Humidity: " + body.current.humidity +"%" + '\n\n' + "Visibility: " + body.current.visibility + " km" )
        }
    })
}
module.exports = forecast


// const url = 'http://api.weatherstack.com/current?access_key=a42e6b269c7a6fecdc72969383c54598&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if(response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + "\nIt is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")
//     }
// })
