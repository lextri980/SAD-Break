const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const route = require('./routes')
const app = express();
const port = 3000;

//morgan
app.use(morgan("combined"));

//handlebars
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helper: {
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
  console.log(`Example app listening at http://localhost:${port}`);
});
