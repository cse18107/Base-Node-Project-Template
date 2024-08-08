const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async() => {
  console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
  // const { City, Airport } = require("./models");
  // const bengaluru = await  City.findByPk(1);
  // // const airport = await Airport.create({name: 'Kempegowda Airport', code: 'BLR', cityId: 1});
  // const kmpairport = await bengaluru.createAirport({
  //   name: "Huballi Airport",
  //   code: "HBL",
  // });
  // console.log(kmpairport)
  // const airportsInBlr = await bengaluru.getAirports();
  // console.log(airportsInBlr)
  // await City.destroy({
  //   where: {
  //     id: 2
  //   }
  // });
  // const city = await City.findB/ "Indore airport", code: "IND" });
  // await City.destroy({
  //   where: {
  //     id: 3
  //   }
  // });
});

