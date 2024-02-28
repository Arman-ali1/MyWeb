import mongoose, {Schema} from "mongoose";

const quizSchema = new Schema(
    {
        id:{
            type:Number,
            required: true,
        },
        questions:[
            {
                question:{
                    type:String,
                    required: true,
                },
                options:[
                    {
                        option1:{
                            type:String,
                            required: true,
                        },
                        option2:{
                            type:String,
                            required: true,
                        },
                        option3:{
                            type:String,
                            required: true,
                        },
                        option4:{
                            type:String,
                            required: true,
                        }
                        
                        
                    }
                ],
                userAns:{
                    type: String,
                    enum: ["not-marked", "A", "B","C","D"],
                    default: "not-marked",
                  },
                  correctAns:{
                    type:String,
                    required: true,
                },
                
            }
        ]
           
        
    },
    {
        timestamps: true
    }
)


const Quizquestion = mongoose.model("Quizquestion", quizSchema);
export default Quizquestion;