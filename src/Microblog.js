import React from "react";
import { Link } from "react-router-dom";
// import Cart from "./Cart";
// import ProductDetails from "./ProductDetails";
// import ProductList from "./ProductList";


function Microblog() {
  return (
    <div>
        <h1>Microblog</h1>
        <h5>Got in the Rithm of blogging!</h5>
        <Link to="/" className="navbar-brand text-light">
            Blog   
        </Link>
        <Link to="/new" className="navbar-brand text-light">
             Add a new post
        </Link>
    </div>
  );
}

export default Microblog;
