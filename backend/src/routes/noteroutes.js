import express from "express";
import { createnote, deletenote, getallnotes, updatenote , getNoteById} from "../controller/notecntroller.js";

const router = express.Router();

router.get("/",getallnotes );
router.get("/:id",getNoteById);
router.post("/",createnote);
router.delete("/:id",deletenote);
router.put("/:id",updatenote);

export default router;
