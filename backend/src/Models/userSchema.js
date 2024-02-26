import mongoose, {Schema} from "mongoose";


const userSchema = new Schema(
    {
        name:{
            type:String,
            required: true,
        },
        contact:{
            type:String,
            required: true,
        },
        email:{
            type:String,
            required: true,
        },
        questions: {
            type: Array,
            default:[],
          },
        timeTaken: {
            type:Number ,
            required: true,
        },
    },
    {
        timestamps: true
    }
)


const User = mongoose.model("User", userSchema);
export default User;