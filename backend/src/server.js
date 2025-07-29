import express from  "express";
import router from "./routes/noteroutes.js";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv";
import { apiLimiter } from "./middleware/ratelimiter.js";
import cors from "cors";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors(
    {
        origin:"http://localhost:5173"
    }
));
app.use(express.json());
app.use(apiLimiter)
app.use("/api/notes",router);
connectdb().then(()=>{app.listen(PORT,()=>{console.log("server started on",PORT)});})




