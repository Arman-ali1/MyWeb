import { Router } from "express";
import { createQuiz,createUser,getCurrentUser ,updateUserActivity,getAlluser,getallQuizs} from "../controller/quizControler.js";
// import {verifyJWT} from "../middlewares/auth.middleware.js";

const router = Router()



router.route("/createquiz").post(createQuiz);// for admin only
router.route("/createuser").post(createUser);//for user
router.route("/getcurrentuser").post(getCurrentUser); //for user
router.route("/update-quiz").post(updateUserActivity);//for user 
router.route("/getalluser").get(getAlluser);//admin only
router.route("/getallquizs").get(getallQuizs);//admin only

export default router;

// https://myweb-2t4i.onrender.com/api/v1/quiz/getalluser