import { Router } from "express";
import { allNotes,getCurrentUser, login,createNote, deleteNote, updateNote, createUser,updateUserActivity } from "../controller/noteController.js";
import {verifyJWT} from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/allnotes").get(allNotes);

router.route("/createquiz").post(createQuiz);
// router.route("/dashboard").post(dashboard);
router.route("/getCurrentUser").get(verifyJWT, getCurrentUser)
router.route("/createUser").post(createUser);
router.route("/updateUserActivity").post(updateUserActivity);
router.route("/updatenote").post(updateNote);
router.route("/deletenote").delete(deleteNote);


export default router;