import { Router } from "express";
import { createQuiz,createUser,getCurrentUser ,updateUserActivity} from "../controller/quizControler.js";
// import {verifyJWT} from "../middlewares/auth.middleware.js";

const router = Router()



router.route("/createquiz").post(createQuiz);
router.route("/createuser").post(createUser);
router.route("/getcurrentuser").post(getCurrentUser);
router.route("/update-quiz").post(updateUserActivity);

export default router;