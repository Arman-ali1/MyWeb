import { Router } from "express";
import { createQuiz,createUser,getCurrentUser ,updateUserActivity} from "../controller/quizControler.js";
// import {verifyJWT} from "../middlewares/auth.middleware.js";

const router = Router()

// router.route("/allnotes").get(allNotes);

router.route("/createquiz").post(createQuiz);
router.route("/createuser").post(createUser);
router.route("/getcurrentuser").get(getCurrentUser);
router.route("/update-quiz").post(updateUserActivity);

export default router;