import React, { useState,useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PostContext from './PostContext';
import CommentForm from './CommentForm';
import Comment from './Comment';

function PostDetail({title,description, body}) {
  const [postThis,setPostThis] = useState(null)
  const [commentThis,setCommentThis] = useState(null)
  // const [comments, setComments] = useState([])
  const {post, setPost, comments, setComments} = useContext(PostContext)
  const { id } = useParams();
  const history = useHistory()
  // console.log(id,'id');

  const removePost = () => {
    console.log('hello from remove post')
    setPost(p => p.filter(p => p.id !== id ));
    history.push('/')
  };
  
  // setJobs(j => j.map(job => 
    // job.id === jobId ? { ...job, state: message} : job
  // ));
   const addCommentToPost = (commentObj) => {
    setComments(c => [...c, commentObj])
    // setPost(p => p.map(post => post.id === id ? {...post, ...comment} : post ))
  };
  useEffect(() => {
    setPostThis(p => post.filter(p => p.id === id ));
    setCommentThis(c => comments.filter(c => c.postId === id))
    // setComments(comments => [...comments, postThis.comments])
  }, [post, comments]);
  // addCommentToPost([])
  
  console.log("THIS IS THE DETAIL PAGE RIGHT")
  console.log(comments,'commentspost')
  console.log(commentThis,'commentThis')
  console.log(postThis,'postThis')
  console.log("THIS IS THE DETAIL PAGE RIGHT")
  if (postThis){
  return (
    <div>
      <h3>{postThis[0].title}</h3>
        <i>{postThis[0].description}</i>
        <p>{postThis[0].body}</p>
        {commentThis.map(c => (<Comment key={c.id} id={c.id} comment={c.comment}/>))}
        {/* <p>{postThis[0].comment}</p> */}
        <Link to={`/post/${id}/edit`}>Edit</Link>
        <button onClick={()=> removePost()}>Remove</button>
        <hr/>
        <CommentForm addComment={addCommentToPost} postId={id}/>
      {/* <NewBoxForm createBox={add} /> */}
      {/* {PostDetailComponents} */}
    </div>
  )
} else{
  return "Loading"
} 
}

export default PostDetail;
