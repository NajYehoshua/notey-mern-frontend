import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../features/notes";
import Note from "./Note";

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  console.log(notes);

  return (
    <>
      <div>{!notes.length && "Loading"}</div>
    </>
  );
};

export default Notes;
