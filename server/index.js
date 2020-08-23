const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRouter = require("./api/index").router
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(helmet());
app.use(morgan("tiny"));


// Only redirect to SSL if developer allows and states that machine running this has SSL to prevent crashes on computers without SSL
if (process.env.SSL == "true") {
	app.enable("trust proxy");

	app.use(function (req, res, next) {
		if (req.headers["x-forwarded-proto"] === "https") {
			return next();
		}
		res.redirect("https://" + req.headers.host + req.url);
	});
}

// Connect to db
mongoose.connect(
	process.env.DB_CONNECT, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	},
	() => {
		console.log("Connected to db!");
	}
);

const port = process.env.PORT || 3000;

app.use("/api", apiRouter)

app.use("/", (req, res) => {
	res.send("Welcome to Leonid Metlitsky's portfolio backend.");
});



// Start the Express server
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});