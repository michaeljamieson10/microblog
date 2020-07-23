import React, { useState, useContext } from "react";
import uuidv4 from "uuid/v4";
// import "./NewPostForm";
import PostContext from './PostContext'
import { useHistory, useParams } from 'react-router-dom';

const DEFAULT_FORM = {
  title: "s",
  description: "s",
  body: "s"
};

function EditPostForm( ) {
  const [form, setForm] = useState(DEFAULT_FORM);
  const history = useHistory()
  const { id } = useParams();
  const {setPost} = useContext(PostContext)
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(addPost)
    // addMeme({ ...form, id: uuidv4() });
    // console.log([...form])
    console.log(form)
    // addPost([form])  
    // setJobs(j => j.map(job => 
      // job.id === jobId ? { ...job, state: message} : job
      // ));
      setPost(p => p.map(post => post.id === id ? {...form, id: uuidv4()} : p))
      setForm(DEFAULT_FORM);
      history.push('/')
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  return (
    <div>
      <h2>Make a edit to the Post</h2>
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

export default EditPostForm;
