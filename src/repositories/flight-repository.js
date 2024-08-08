const CrudRepository = require('./crud-repository');
const { Flight } = require('../models/index');


class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }
}

module.exports = FlightRepository;