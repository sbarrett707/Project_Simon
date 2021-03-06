var mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema(
  {
    _id: {
	type: String,
	unique: true,
	required: true,
    },
    
    password: {
	type: String,
	required: true,
    },
    
    highScore: {
	type: Number,
	defualt: 0,
    }
  },
);
 
const User = mongoose.model('User', userSchema);
 
module.exports=User;
