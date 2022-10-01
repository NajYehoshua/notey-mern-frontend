import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNotes } from "./features/notes";

function App() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return (
    <>
      <h1>Hello World</h1>

      <p>Notes: {notes.length}</p>
    </>
  );
}

export default App;
