import React, { useState } from "react";
import { Link } from "react-router-dom";

function Post({title,description, body,id}) {

  return (
    <div>
        <Link to={`/post/${id}`}>{title}</Link>
        <p>{description}</p>
        <p>{id}</p>
        {/* {body} */}
      {/* <NewBoxForm createBox={add} /> */}
      {/* {postComponents} */}
    </div>
  );
}

export default Post;
