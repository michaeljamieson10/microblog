import React, { useContext, useState, useEffect } from "react";
import PostContext from "./PostContext";

function Comment({id, comment}) {
    const {comments, setComments} = useContext(PostContext)
  const removeComment = () => {
    console.log('hello from remove post')
    setComments(c => c.filter(c => c.id !== id ));
  };
  
  return (
   <div>
       <button onClick={() => removeComment()}>Remove</button>
        {comment}
   </div>
  );
}

export default Comment;
