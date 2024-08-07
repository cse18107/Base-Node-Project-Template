const express = require('express');

const { AirplaneController } = require('../../controllers');
const {AirplaneMiddlewares} = require('../../middlewares')

const router = express.Router();

router.post('/', AirplaneMiddlewares.validationCreateRequest, AirplaneController.createAirplane);
router.get("/", AirplaneController.getAirplanes);

module.exports = router;