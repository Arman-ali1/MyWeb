import { app } from './app.js';
import connectDB from './Database/db.js';
import dotenv from"dotenv" 

// .env configure
dotenv.config({path:"./.env"});

// Connect to MongoDB
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



















