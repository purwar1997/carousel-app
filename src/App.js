import "./App.css";
import Carousel from "./components/Carousel";
import { useState } from "react";

function App({ user: userName, company = "LCO" }) {
  const [index, setIndex] = useState(0);

  if (index > 9) {
    setIndex(0);
  }

  if (index < 0) {
    setIndex(9);
  }

  return (
    <>
      <h1>
        Welcome to {company}, {userName}
      </h1>
      <p>Which technology do you want to learn ?</p>

      <Carousel index={index} setIndex={setIndex} />

      <button onClick={() => setIndex(0)}>
        <i class="fa-solid fa-rotate-right"></i>
      </button>
    </>
  );
}

export default App;
