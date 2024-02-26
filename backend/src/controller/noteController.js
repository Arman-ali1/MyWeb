import { asyncHandler } from "../utils/ayncHandler.js";
import Note from "../Models/noteSchema.js";
import Dashboard from "../Models/userDash.js";



const createNote = asyncHandler(async (req,res)=>{
    const {author, title, content} = req.body
        console.log("req",req);
        console.log("res",res);
        if (!title || !author){
            return res.status(400).json({msg: 'Please enter all fields'})
        }
        try{
            const newNote = new Note({
                author,
                title,
                content
            })
            const savedNote = await newNote.save();
            console.log("note created");
            res.status(201).json(savedNote);
        }catch(err){
            console.log(err);
            res.status(500).json({error: err.message})
        }
}) 
// ===================login user===========
const login = asyncHandler(async (req,res)=>{
    const {email, password} = req.body
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
        console.log(email,password);
        try {
          // Find the user by email
          const user = await Dashboard.findOne({ email: email });
  
          // Check if a user was found
          if (user) {
              // Compare the provided password with the hashed password stored in the database
              // const passwordMatch = await comparePassword(password, user.password);
              const passwordMatch = await user.isPasswordCorrect(password)
              if (passwordMatch) {
                const options = {
                  httpOnly: true,
                  secure: true
              }
                  return res.cookie("accessToken", email, options).
                  status(200).json(user);
              } else {
                  return res.status(401).json({ message: 'Invalid credentials' });
              }
          } else {
              return res.status(401).json({ message: 'Invalid credentials' });
          }
      } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal server error' });
      }
       
} )
//============================create user===================
const createUser = asyncHandler(async (req,res)=>{
    const {name,contact,username, email,password,activity} = req.body
        console.log(name,contact,username, email,password);
        const user = await Dashboard.findOne({ email: email });
        if(email===user.email){
            return res.status(400).json({ message: 'User already exists' });
        }
        try{
            const newUser = new Dashboard({
                username,
                contact,
                name,
                email,
                password,
                activity
            })
            const savedUser = await newUser.save();
            const options = {
              httpOnly: true,
              secure: true
            }
            console.log("User created");
            res.status(201).cookie("accessToken", email, options).json(savedUser);
        }catch(err){
            console.log(err);
            res.status(500).json({error: err.message})
        }
})
//============================Update user activity===================
const updateUserActivity = asyncHandler(async (req,res)=>{
    const {email,activity} = req.body
    const numberOfProducts = Object.keys(activity).length
    console.log(numberOfProducts);
    if(numberOfProducts!==6){
        return res.status(400).json({ message: 'Invalid Activity provite all entity' });
    }
    console.log(email,activity);
    // res.status(200).json({"arman":activity})
    try {
      // Update the document based on the email
      const user = await Dashboard.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
      const result = await Dashboard.updateOne(
        { email },
        { $push: { activity: activity} }
      );
      // Check if the document was found and updated
      if (result.nModified === 0) {
        return res.status(404).json({ error: 'User not found or no update performed' });
      }
  
      res.status(200).json({ message: 'Activity added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
    
    
})
//==========================================================
const allNotes = asyncHandler(async (req,res)=>{
    console.log("allnote exexuted");
    try{
        const allNotes = await Note.find();
        
        console.log("note listed");
        res.status(201).json(allNotes);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message})
    }
})
//dashbpard============getCurrentUser===========dashboard===
const getCurrentUser = asyncHandler(async (req,res)=>{
    return res
    .status(200)
    .json(req.user)
})

const deleteNote = asyncHandler(async (req,res)=>{
    const id = req.body.id;
    const note = await Note.findById(id);
  if (!note) { 
    return res.status(500).json({
        success: failed,
        message: "note not found",
      });
  }
  await note.deleteOne();
  res.status(200).json({
    success: true,
    message: "product deleted successfully",
  });
})

const updateNote = asyncHandler(async (req,res)=>{
        const {id,noteTitle,contentText} = req.body
        const _id=id
    console.log(id);
    console.log(noteTitle);
    console.log(contentText);
    // if(!updateField) {
    //     return res.status(400).json({msg: 'Please enter all fields'})
    // }
    if(noteTitle){
         await Note.findByIdAndUpdate(_id, {
            $set: {
                title: noteTitle
            }
        },
        {
            new: true
        }
        )
    }
    if(contentText){
          await Note.findByIdAndUpdate(_id, {
            $set: {
                content: contentText
            }
        },
        {
            new: true
        }
        )

    }
    
    res.json(id)
  });  
export {createNote,createUser,login,allNotes,getCurrentUser,updateUserActivity, deleteNote,updateNote}



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


 