const info  = require("./info-controller");

module.exports = {
    InfoController: info,
    AirplaneController: require('./airplane-controller'),
    CityController: require('./city-controller')
}