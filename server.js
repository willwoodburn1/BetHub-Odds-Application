const express = require("express");
const cors = require("cors");
const session = require("express-session");
var passport = require("./config/passport");
var compression = require("compression");

// require('dotenv').config()

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

const db = require("./models")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(compression());

// Routes
require("./controllers/user-controller")(app);
require("./controllers/betsController")(app);
require("./controllers/notesController")(app);


// app.listen(PORT, function () {
//   console.log("App listening on PORT " + PORT);
// });

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
  });
});



