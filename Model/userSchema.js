const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

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
  tokens : [
    {
      token : {
        type: String,
        required: true,
      }
    }
  ]
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


//We are generating token

userSchema.methods.generateAuthToken = async function () {
  try {
    //exists user id
    let token = jwt.sign({_id : this._id} , process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token : token});
    await this.save();
    return token;
  } catch (err) {
    console.log(err)
  }
}


// model function takes 2 arguments Collection name that you want to create and UserSchama whatever you created
const User =  mongoose.model('USER' , userSchema);
module.exports = User ;

