import React, { useState, useContext } from "react";
import Post from "./Post";
import PostContext from "./PostContext";
import { useSelector } from "react-redux";

function PostList() {
    
//   const add = postObj => {
//     setPost(post => [...posts, postObj]);
//   };

const {post} = useContext(PostContext)
//   const remove = id => {
//     setBoxes(boxes => boxes.filter(box => box.id !== id));
//   };

  const postComponents = post.map(post => (
    <Post
    title={post.title}
    description={post.description}
    body={post.body}
    key={post.id}
    id={post.id}
    />
  ));
console.log(post,'inside post list')
  return (
    <div>
        
      {/* <NewBoxForm createBox={add} /> */}
      {postComponents}
    </div>
  );
}

export default PostList;
