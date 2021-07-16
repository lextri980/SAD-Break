const homeRouter = require("./home");
const loginRouter = require("./login");
const signupRouter = require("./signup");
const announceRouter = require("./announce");
const coursesRouter = require("./courses");
const accountRouter = require("./account");
const logoutRouter = require("./logout");
const markRouter = require("./mark");
const subjectRouter = require("./subject");
const studentRouter = require("./student");
const teacherRouter = require("./teacher");
const profileRouter = require("./profile");
const { ensureAuthenticated } = require("../config/auth");

function route(app) {
  app.use("/profile", ensureAuthenticated, profileRouter);
  app.use("/teacher", ensureAuthenticated, teacherRouter);
  app.use("/student", ensureAuthenticated, studentRouter);
  app.use("/subject", ensureAuthenticated, subjectRouter);
  app.use("/mark", ensureAuthenticated, markRouter);
  app.use("/account", ensureAuthenticated, accountRouter);
  app.use("/home", ensureAuthenticated, homeRouter);
  app.use("/courses", ensureAuthenticated, coursesRouter);
  app.use("/announce", ensureAuthenticated, announceRouter);
  app.use("/signup", signupRouter);
  app.use("/login", loginRouter);
  app.use("/logout", logoutRouter);
}
module.exports = route;
