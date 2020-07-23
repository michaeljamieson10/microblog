import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
// import Cart from "./Cart";
// import ProductDetails from "./ProductDetails";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import Microblog from "./Microblog";
import NewPostForm from "./NewPostForm"
import EditPostForm from "./EditPostForm";


function Routes() {
  
  return (
    <Switch>
      <Route path="/" exact>
        <PostList/>
      </Route>
      <Route path="/post/:id" exact>
        <PostDetail/>
      </Route>
      <Route path="/post/:id/edit" exact>
        <EditPostForm/>
      </Route>
      <Route path="/new" exact>
        <NewPostForm/>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
