import Note from "../models/Note.js";
import mongoose from "mongoose";
export const getallnotes = async (req, res) => {   
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.log(error);
        res.status(500).send("server error");
    }
}

export const getNoteById = async (req, res) => {
    const id = req.params.id;

    // ✅ First: Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid note ID" });
    }

    try {
        const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(note);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
}

 export const createnote = async(req, res) => {
try {
    const{title , content} = req.body;
    const newNote = new Note({title,content})
    await newNote.save();
    res.status(200).json({title , content}).send("note created");

} catch (error) {
    console.log(error);
    res.status(500).send("server error",error);
    
}}

 export const deletenote = async(req, res) => {
try {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({message : "note id is invalid"});
    }
    await Note.findByIdAndDelete(id);
    res.status(200).json({message : "note deleted"});
} catch (error) {
    res.status(500).json({message : error.message});
}
}

 export const updatenote = async (req, res) => {
    try {
        const { id } = req.params;

        // ✅ Check if the ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid note ID" });
        }

        const { title, content } = req.body;

        const updatednote = await Note.findByIdAndUpdate(
            id,
            { title, content },
            { new: true }
        );

        if (!updatednote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({ message: "Note updated", note: updatednote });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};