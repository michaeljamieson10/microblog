import React, {useState} from 'react';
import './App.css';
import Routes from './Routes';
// import Navbar from './Navbar';
import Microblog from './Microblog'
import PostContext from './PostContext'
function App() {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const addPost = postObj => {
    console.log('hello from add post')
    console.log(postObj)
    setPost(post => [...post, postObj]);
  };

  return (
    <div>
        {/* <Navbar/> */}
        <PostContext.Provider value={{ post, setPost, addPost, comments, setComments }}>
          <Microblog/>
          <Routes/>
        </PostContext.Provider>
    </div>
  );
}

export default App;
