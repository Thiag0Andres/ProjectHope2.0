const path = require("path");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const { host, port, user, pass } = require("../config/mail.json");

let transportConfig = {
  host: host,
  port: port,
  auth: {
    user: user,
    pass: pass,
  },
};

const transport = nodemailer.createTransport(transportConfig);

const options = {
  viewEngine: {
    extName: ".html",
    partialsDir: path.resolve("./src/html/mail/"),
    layoutsDir: path.resolve("./src/html/mail/"),
    defaultLayout: "",
  },
  viewPath: path.resolve("./src/html/mail/"),
  extName: ".html",
};

transport.use("compile", hbs(options));

module.exports = transport;
