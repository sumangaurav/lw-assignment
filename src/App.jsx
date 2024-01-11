import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CommentDisplay from "./components/CommentDisplay";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CommentDisplay />
    </>
  );
}

export default App;
