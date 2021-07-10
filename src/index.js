const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const route = require("./routes");
const db = require("./config/db");
const app = express();
const port = 5323;

//connect to db
db.connect();

//morgan
app.use(morgan("combined"));

//body-parser
app.use(express.urlencoded());
  
//handlebars
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resourses/views"));

//static file
app.use(express.static(path.join(__dirname, "public")));

//routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/login`);
});
