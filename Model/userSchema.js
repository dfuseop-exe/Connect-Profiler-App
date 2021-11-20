const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});


//here we hashing the password

userSchema.pre('save' , async function (next){
  console.log(this.password);
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(this.password, salt);
  console.log("pre function")
  if (this.isModified('password')){
      this.password = secPass ;
      this.cpassword = secPass;
  }
  console.log(this.password)
  next();
})


// model function takes 2 arguments Collection name that you want to create and UserSchama whatever you created
const User =  mongoose.model('USER' , userSchema);
module.exports = User ;

