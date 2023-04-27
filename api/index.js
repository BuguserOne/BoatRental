// yarn add express cors mongoose bcryptjs jsonwebtoken cookie-parser multer
// yarn add nodemon
// Import der Pakete
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// Importieren der Modelle
const User = require("./models/User.js");
const Boat = require("./models/Boat.js");
const Booking = require("./models/Booking.js");

//Lesen wir die Umgebungsvariablen
require("dotenv").config();

//Ertellen der Express Anwendung
const app = express();

const salt = bcrypt.genSaltSync(10);
const jwtSecret = "fasefraw4r5r3wq45wdfgw34twdfg";

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB ist verbunden!"))
  .catch((err) => console.log("Fehler beim Verbinden mit MongoDB: ", err));

function getUserDataFromReq(req) {
  if (req.cookies.token) {
    return new Promise((resolve, reject) => {
      jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        resolve(userData);
      });
    });
  }
}

app.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const userDocument = await User.create({
      fullName,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    res.status(200).json(userDocument);
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      res.status(422).json({ error: "E-mail Adresse ist bereits vorhanden" });
    }
    res.status(422).json(err);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDocument = await User.findOne({ email });
  if (userDocument) {
    const passwordIsOk = bcrypt.compareSync(password, userDocument.password);
    if (passwordIsOk) {
      jwt.sign(
        {
          email: userDocument.email,
          id: userDocument._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDocument);
        }
      );
    } else {
      res.status(422).json("Passwort nicht korrekt.");
    }
  } else {
    res.json("Benutzer nicht gefunden.");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, useData) => {
      if (err) throw err;
      const { fullName, email, _id } = await User.findById(useData.id);
      res.json({ fullName, email, _id });
    });
  } else {
    res.json({});
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.post("/boat", async (req, res) => {
  const userData = await getUserDataFromReq(req);
  const { title, description, price, imageUrl } = req.body;

  Boat.create({
    title,
    description,
    price,
    imageUrl,
    owner: userData.id,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      throw err;
    });
});

app.listen(4000, () => console.log("Server ist auf Port 4000 gestartet"));
