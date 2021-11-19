const express = require("express");
const router = express.Router();

//link database to this file to work with
require("../Db/Connection");
const User = require("../Model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello World from router");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  //checks is any field is not empty in req.body
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all fields" });
  }

  //then check this is already register user or not
  User.findOne({ email: email }).then((userExist) => {
    if (userExist) {
      return res.status(422).json({ message: "Email already exists" });
    }

    // if not then  take req.body data n save
    const user = new User({ name, email, phone, work, password, cpassword });
    user
      .save().then(() => {
        return res.status(201).json({ message: "User register successfully" });
      }).catch((err) => {
        return res.status(500).json({ error: "failed to register" });
      });
  }).catch(err => {console.log(err)})
});

module.exports = router;
