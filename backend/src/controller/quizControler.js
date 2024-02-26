import { asyncHandler } from "../utils/ayncHandler.js";
import Quizquestion from "../Models/QuizSchema.js";
import User from "../Models/userSchema.js";



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
        const quizQuestion=await Quizquestion.findById(questions);
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
            const options = {
              httpOnly: true,
              secure: true
            }
            console.log("User created");
            res.status(201).json(savedUser);
        }catch(err){
            console.log(err);
            res.status(500).json({error: err.message})
        }
})
//============================Update user activity===================

const updateUserActivity = asyncHandler(async (req,res)=>{
    const {email="shivam@gmail.com",userAnswers} = req.body
    const numberOfProducts = Object.keys(userAnswers).length
    // console.log(numberOfProducts);
    if(numberOfProducts!==5){
        return res.status(400).json({ message: 'Invalid Activity provite all entity' });
    }
    // console.log(email,userAnswers);
    // res.status(200).json({"arman":activity})
    try {
      // Update the document based on the email
      let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // const userQuesFind=await Quizquestion.findById(user.questions);
    // console.log("user",user);
    // if (!userQuesFind) {
    //     return res.status(404).json({ error: 'User question not found' });
    //   }
    console.log("userQuesFind",user.questions);
    
        for(let i=0;i<5;i++){
            user.questions[i].userAns=userAnswers[i].ans
        }
      console.log(user.questions);

      user.questions.forEach(element => {
        console.log(element.userAns);
      });
    const result=await User.updateOne(
        { _id: user._id },
        { $set: { questions: user.questions} }
    )
    //   const result = await Dashboard.updateOne(
    //     { email },
    //     { $push: { activity: activity} }
    //   );
      // Check if the document was found and updated
    //   if (result.nModified === 0) {
    //     return res.status(404).json({ error: 'User not found or no update performed' });
    //   }
  
      res.status(200).json({ message: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
        // res.status(200).json({"arman":user})

})
//============================get current user===================
const getCurrentUser = asyncHandler(async (req,res)=>{
    const {email="arman@gmail.com"} = req.body;
    console.log(email);
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
    //   console.log("user",user.questions);
    //   const ques=await Quizquestion.findById(user.questions);
    //   const userWithQues = {...user._doc , questions : ques};
    //   console.log(userWithQues);
      console.log("user",user);
    return res
    .status(200)
    .json(user)
})
// //==========================================================
// const allNotes = asyncHandler(async (req,res)=>{
//     console.log("allnote exexuted");
//     try{
//         const allNotes = await Note.find();
        
//         console.log("note listed");
//         res.status(201).json(allNotes);
//     }catch(err){
//         console.log(err);
//         res.status(500).json({error: err.message})
//     }
// })
// //dashbpard============getCurrentUser===========dashboard===

// const deleteNote = asyncHandler(async (req,res)=>{
//     const id = req.body.id;
//     const note = await Note.findById(id);
//   if (!note) { 
//     return res.status(500).json({
//         success: failed,
//         message: "note not found",
//       });
//   }
//   await note.deleteOne();
//   res.status(200).json({
//     success: true,
//     message: "product deleted successfully",
//   });
// })

// const updateNote = asyncHandler(async (req,res)=>{
//         const {id,noteTitle,contentText} = req.body
//         const _id=id
//     console.log(id);
//     console.log(noteTitle);
//     console.log(contentText);
//     // if(!updateField) {
//     //     return res.status(400).json({msg: 'Please enter all fields'})
//     // }
//     if(noteTitle){
//          await Note.findByIdAndUpdate(_id, {
//             $set: {
//                 title: noteTitle
//             }
//         },
//         {
//             new: true
//         }
//         )
//     }
//     if(contentText){
//           await Note.findByIdAndUpdate(_id, {
//             $set: {
//                 content: contentText
//             }
//         },
//         {
//             new: true
//         }
//         )

//     }
    
//     res.json(id)
//   });  
export {createQuiz,createUser,getCurrentUser,updateUserActivity}



// app.post('/update-note', async(req, res) => {
//     const {_id,updateField,flage} = req.body
//     console.log(_id);
//     console.log(updateField);
//     console.log(flage);
//     // if(!updateField) {
//     //     return res.status(400).json({msg: 'Please enter all fields'})
//     // }
//     if(flage){
//          await Note.findByIdAndUpdate(_id, {
//             $set: {
//                 title: updateField
//             }
//         },
//         {
//             new: true
//         }
//         )
//     }
//     else{
//           await Note.findByIdAndUpdate(_id, {
//             $set: {
//                 content: updateField
//             }
//         },
//         {
//             new: true
//         }
//         )

//     }
    
//     res.json(_id)
// }
// )


 