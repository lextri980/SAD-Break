const homeRouter = require("./home");
const loginRouter = require("./login");
const signupRouter = require("./signup");
const announceRouter = require("./announce");
const coursesRouter = require("./courses");
const accountRouter = require("./account");
const logoutRouter = require("./logout");
const { ensureAuthenticated } = require("../config/auth");

function route(app) {
  app.use("/account", ensureAuthenticated, accountRouter);
  app.use("/home", ensureAuthenticated, homeRouter);
  app.use("/courses", ensureAuthenticated, coursesRouter);
  app.use("/announce", ensureAuthenticated, announceRouter);
  app.use("/signup", signupRouter);
  app.use("/login", loginRouter);
  app.use("/logout", logoutRouter);
}
module.exports = route;
