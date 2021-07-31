import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="navbar-brand">Miras Blog</h1>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="features.html">Create Blog</a>
            </li>
            <li>
              <a href="docs.html">Docs</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
