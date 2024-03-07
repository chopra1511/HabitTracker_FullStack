const express = require("express");

const path = require("path");
const dashboardData = require("./routes/dashboard.js");
const homeData = require("./routes/homePage.js");

const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(dashboardData.routes);
app.use(homeData.routes);

app.use((req, res, next) => {
  res.status(404).render("404");
});


mongoose.connect(
  "mongodb+srv://rahul:rahul1511@habittacker.pji7f43.mongodb.net/HabitTracker?retryWrites=true&w=majority"
).then((result) => {
  app.listen(3000)
}).catch((err) => {
  console.log(err);
});