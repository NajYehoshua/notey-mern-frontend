import { useState } from "react";
import { postNote } from "../features/notes";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const resetState = () => {
    setTitle("");
    setBody("");
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (e) => {
    setBody(e.target.value);
  };

  const onSubmitData = (e) => {
    e.preventDefault();

    if (!title && !body) {
      alert("Empty fields");
    } else {
      const form = new FormData();

      form.append("title", title);
      form.append("body", body);

      dispatch(postNote(form));

      resetState();
    }
  };

  return (
    <form className="form-panel">
      <input
        className="input-text"
        type="text"
        name="title"
        value={title}
        onChange={onChangeTitle}
      />
      <textarea
        className="body-input"
        name="body"
        id="body"
        cols="30"
        rows="2"
        value={body}
        onChange={onChangeBody}
      ></textarea>

      <button className="btn" onClick={onSubmitData}>
        Save
      </button>
    </form>
  );
};

export default Form;
