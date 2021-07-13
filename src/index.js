const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const route = require("./routes");
const flash = require('connect-flash')
const session = require('express-session')
const path = require("path");
const db = require("./database/connection");
const app = express();
const port = process.env.PORT || 5001;

//connect to db
db.connect();

//morgan
app.use(morgan("combined"));

//static file
app.use(express.static(path.join(__dirname, "public")));

//body-parser
app.use(express.urlencoded());

//express session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))

//connect flash
app.use(flash())

//global vars
app.use((req,res,next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.success_error = req.flash('error_msg')
  next()
})

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
app.set("views", path.join(__dirname, "resources/views"));


//routes init
route(app);

//app listen port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/login`);
});
