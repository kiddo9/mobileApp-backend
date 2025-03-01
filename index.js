require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Home = require("./src/routes/Home");
const Signin = require("./src/routes/Authentication/Signin");
const Login = require("./src/routes/Authentication/Login");
const conutryCode = require("./src/routes/countryCode");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
// Enable CSRF protection
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Home);
app.use(Signin);
app.use(Login);
app.use(conutryCode);

const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(`Sever is runing of port ${port}`);
});
