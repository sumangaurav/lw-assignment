import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CommentDisplay from "./components/CommentDisplay";
import CommentDiscussion from "./components/CommentDiscussion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CommentDiscussion />
      {/* <CommentDisplay
        commentText="Hello there"
        date={new Date()}
        name={"Shyam Sundar"}
      /> */}
    </>
  );
}

export default App;
