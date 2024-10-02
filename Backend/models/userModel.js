import mongoos from "mongoose"

const userSchema = new mongoos.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

const userModel = mongoos.models.user || mongoos.model("user",userSchema);

export default userModel;