import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    // origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended: true, limit: "20kb"}))

app.use(cookieParser())


//routes import
import quizRouter from './routes/quizRouter.js'


//routes declaration
app.use("/api/v1/quiz", quizRouter);


export { app }