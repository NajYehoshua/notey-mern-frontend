import axios from "axios";
import { NOTES_API_URL } from "../config/config";

//! GET - get all notes
const getNotes = async () => {
  const response = await axios.get(`${NOTES_API_URL}/`);

  return response.data.results;
};

//! POST - create new note
const postNote = async (note) => {
  const response = await axios.post(`${NOTES_API_URL}/`, note);

  return response.data.results;
};

//! Create a noteService object
const noteService = {
  getNotes,
  postNote,
};

export default noteService;
