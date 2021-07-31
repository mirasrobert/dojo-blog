import React from "react";
import { useState } from "react";

function Home() {
  let personName = "Lex Jethro";

  const [name, setName] = useState("Robert");

  const handleClick = () => {
    setName("Russel Natividad");
  };

  return (
    <div className="container">
      <h2>Homepage</h2>
      <p> {name} </p>
      <button className="btn" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default Home;
