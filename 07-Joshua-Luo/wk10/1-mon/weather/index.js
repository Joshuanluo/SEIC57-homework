const express = require("express");
const ejs = require("ejs");
const axios = require("axios");

const server = express();
server.set("view-engine", ejs);
const PORT = 2022;
const URL = "http://api.openweathermap.org/data/2.5/weather";

server.get("/", (req, res) => {
	res.render("home.ejs");
});

server.get("/result", (req, res) => {
	console.log(req.query.city);
	const weatherParams = {
		q: req.query.city,
		units: "metric",
		appid: "87f3530b034ce83f07479771285f8bdf", // Thanks random Github user
	};
	axios.get(URL, { params: weatherParams }).then((result) => {
		res.render("result.ejs", {
			name: result.data.name,
			currently: result.data.main.temp,
			icon: `http://openweathermap.org/img/w/${result.data.weather[0].icon}.png`,
		});
	});
});

server.listen(PORT, () => {
	console.log(`server is running at http://localhost:${PORT}/`);
});
