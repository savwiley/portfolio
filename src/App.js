import React, { useEffect } from "react";
import Header from "./components/Header.js";

function App() {


  useEffect(() => {
    const header = document.querySelector(".header");

    for (let i = 0; i < 5; i++) {
      const bubble = document.createElement("div");
      bubble.setAttribute("class", "bubble");
      bubble.setAttribute("id", `bubble${i}`)
      header.appendChild(bubble);
    }
  })

  return (
    <>
      <Header />
    </>
  );
}

export default App;
