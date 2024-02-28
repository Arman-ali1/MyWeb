import { asyncHandler } from "../utils/ayncHandler.js";
import Quizquestion from "../Models/QuizSchema.js";
import User from "../Models/userSchema.js";


//============================create quiz=======Admin============
const createQuiz = asyncHandler(async (req,res)=>{
    const {id, questions} = req.body
        console.log("req",req);
        console.log("id",id);
        console.log("questions",questions);
        if (!id || !questions){
            return res.status(400).json({msg: 'Please enter all fields'})
        }
        try{
            const newQuiz = new Quizquestion({
                id,
                questions
            })
            const savedQuiz = await newQuiz.save();
            console.log("Quiz created");
            res.status(201).json(savedQuiz);
        }catch(err){
            console.log(err);
            res.status(500).json({error: err.message})
        }
}) 
//=====================get quizs======== for Admin===========
const getallQuizs = asyncHandler(async (req,res)=>{
    const quizs = await Quizquestion.find()
    if (!quizs) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
    
      console.log("quizs",quizs);
    return res
    .status(200)
    .json(quizs)
})


//============================create user===================
const createUser = asyncHandler(async (req,res)=>{
    const {name,contact, email,questions,timeTaken} = req.body
    console.log(name,contact, email,questions,timeTaken);
    if (!name || !contact || !email || !questions || !timeTaken){
        return res.status(400).json({msg: 'Please enter all fields'})
    }
    
        const user = await User.findOne({ email: email });
        if(user){
            return res.status(400).json({ message: 'User already exists' });
        }
        const quizQuestion=await Quizquestion.findOne({id:questions});
        if(!quizQuestion){
            return res.status(400).json({ message: 'Question not found' });
        }
        console.log(quizQuestion.questions[0].question);
        try{
        
            const newUser = new User({
                name,
                contact,
                email,
                questions:quizQuestion.questions,
                timeTaken
            })
            const savedUser = await newUser.save();
          
            console.log("User created");
            res.status(201).json(savedUser);
        }catch(err){
            console.log(err);
            res.status(500).json({error: err.message})
        }
})
//============================Update user activity===================

const updateUserActivity = asyncHandler(async (req,res)=>{
    const {email,userAnswers} = req.body
    const numberOfProducts = Object.keys(userAnswers).length
    console.log(numberOfProducts,email);
    if(numberOfProducts!==5){
        return res.status(400).json({ message: 'Invalid Activity provite all entity' });
    }
   

    try {
      // Update the document based on the email
      let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    console.log("userQuesFind",user.questions);
    
        for(let i=0;i<5;i++){
            user.questions[i].userAns=userAnswers[i]
        }
      console.log(user.questions);

      user.questions.forEach(element => {
        console.log(element.userAns);
      });
    const result=await User.updateOne(
        { _id: user._id },
        { $set: { questions: user.questions} }
    )
   
  
      res.status(200).json({ message: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
       

})
//============================get current user===================
const getCurrentUser = asyncHandler(async (req,res)=>{
    const {email} = req.body;
    console.log(email);
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
    
      console.log("user",user);
    return res
    .status(200)
    .json(user)
})
//===================admin ===============get all user===================
const getAlluser = asyncHandler(async (req,res)=>{
    const users = await User.find()
    if (!users) {
        return res.status(404).json({ error: 'User not found' });
      }
    
      console.log("users",users);
    return res
    .status(200)
    .json(users)
})


export {createQuiz,createUser,getCurrentUser,updateUserActivity,getAlluser,getallQuizs}



 



 