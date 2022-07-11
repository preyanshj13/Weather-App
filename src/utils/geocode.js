const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicHJleWFuc2gxIiwiYSI6ImNsNWNnN2hrdzAwbnUzcG1wNnU5b2Q2MmUifQ.Ohn2I7DsU-1uoiK96cHVxw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('The place could not be found! Try Again', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode




// // const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHJleWFuc2gxIiwiYSI6ImNsNWNnN2hrdzAwbnUzcG1wNnU5b2Q2MmUifQ.Ohn2I7DsU-1uoiK96cHVxw&limit=1'

// request({ url: geocodeURL, json: true}, (error, response) => {
//     if(error) {
//         console.log("Unable to connect to location services!")
//     } else if ((response.body.features).length === 0) {
//         console.log("The place could not be found! Try Again")
//     } else {
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(longitude, latitude)
//     }
// })