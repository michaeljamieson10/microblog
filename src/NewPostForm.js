import React, { useState, useContext } from "react";
import uuidv4 from "uuid/v4";
// import "./NewPostForm";
import PostContext from './PostContext'
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
const DEFAULT_FORM = {
  title: "s",
  description: "s",
  body: "s"
};

function NewPostForm( ) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(DEFAULT_FORM);
  // const add = () => dispatch({type: "CREATE_FORM",id});
  const history = useHistory()
  const {addPost} = useContext(PostContext)
  function handleSubmit(e) {
    e.preventDefault();
    console.log(addPost)
    // addMeme({ ...form, id: uuidv4() });
    // console.log([...form])
    console.log(form)
    // addPost([form])
    addPost({...form, id: uuidv4() })
    setForm(DEFAULT_FORM);
    history.push('/')
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  return (
    <div>
      <h2>Make a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="form_title"
          onChange={handleChange}
          value={form.title}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="form_description"
          onChange={handleChange}
          value={form.description}
        />
        <label htmlFor="body">Body</label>
        <input
          type="text"
          name="body"
          id="form_body"
          onChange={handleChange}
          value={form.body}
        />
        <button type="submit" id="form_submit">
          Save
        </button>
        <button onClick={() => {
          history.push('/')
        }}> Cancel </button>

      </form>
    </div>
  );
}

export default NewPostForm;
