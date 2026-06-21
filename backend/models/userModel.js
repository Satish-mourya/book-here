import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // to have unique id
  password: { type: String, required: true },
  image: { type: String ,default:""},
  address: { type: Object, required: true , default:{line1:"",line2:""} },
  gender:{type:String, default:"Not Selected"},
  dob:{type:String, default:"Not selected"},
  phone:{type:String,default:'00000000'}
}); // to store empty object

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
