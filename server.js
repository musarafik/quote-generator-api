const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const mongoose = require("mongoose");
const secrets = require("./secrets");
const bodyParser = require("body-parser");
const quotesRoute = require("./routes/quotes_route");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/", quotesRoute);

mongoose.connect(secrets.db_uri, {useNewUrlParser: true});
const db = mongoose.connection;

db.once("open", () => {
    console.log("Connected to MongoDB");
});

db.on("error", (err) => {
    console.error(err);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});