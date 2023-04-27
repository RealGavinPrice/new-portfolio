import React from "react";

import './reset.css';
import './style.css';

function Home() {
  return (
    <header id="Home">
      <h1>Gavin Price</h1>
      <section className="profilepiccontainer">
        <div className="HiddenPic"></div>
      </section>
    </header>
  );
}

export default Home;