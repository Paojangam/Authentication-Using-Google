require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const authRoute = require("./routes/auth");
require("./passport"); 

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,               
}));

app.use(express.json());

app.use(session({
  secret: "cyberwolve",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, 
    sameSite: "lax",  
    secure: false,    
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
