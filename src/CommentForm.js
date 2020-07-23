import React, { useState, useContext } from "react";
import uuidv4 from "uuid/v4";
// import "./NewPostForm";
import PostContext from './PostContext'
import { useHistory, useParams } from 'react-router-dom';

const DEFAULT_FORM = {
  comment:""
};

function CommentForm({addComment} ) {
  const [form, setForm] = useState(DEFAULT_FORM);
  const history = useHistory();
  const { id } = useParams();
  const {addPost} = useContext(PostContext)
  function handleSubmit(e) {
    e.preventDefault();
    // console.log([...form])
    console.log(form);
    addComment({...form , id: uuidv4(), postId:id})
    // addPost([form])
    // addPost({...form, id: uuidv4() })
    setForm(DEFAULT_FORM);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  return (
    <div>
      <h2>Make a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">comment</label>
        <input
          type="text"
          name="comment"
          id="comment_form"
          onChange={handleChange}
          value={form.comment}
        />
        <button type="submit" id="form_submit">
          Add Comment
        </button>
       

      </form>
    </div>
  );
}

export default CommentForm;
