const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//link database to this file to work with
require("../Db/Connection");
const User = require("../Model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello World from router");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  //checks is any field is not empty in req.body
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all fields" });
  }

  try {
    //then check this is already register user or not
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ message: "Email already exists" });
    } else if (password !== cpassword) {
      return res.status(422).json({ message: "password are not matching" });
    } else {
      // if not then  take req.body data n save
      const user = new User({ name, email, phone, work, password, cpassword });

      const userRegister = user.save();

      if (userRegister) {
        res.status(201).json({ message: "User register successfully" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all fields" });
    }

    //ckeck email exist or not in db
    const emailExist = await User.findOne({ email: email });

    if (emailExist) {
      const passwordCompare = await bcrypt.compare(
        password,
        emailExist.password
      );

      if (!passwordCompare) {
        return res.status(400).json({ error: "Invalid credentials" });
      } else {
        const token = await emailExist.generateAuthToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 2592000000),
          httpOnly: true,
        });

        return res.status(200).json({ message: "log in" });
      }
    } else {
      return res
        .status(400)
        .json({ error: "no account associated with this Email" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
