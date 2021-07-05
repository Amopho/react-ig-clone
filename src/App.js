import { useState } from "react";
import React from "react";
// import { useState } from "react";
import InfiniteList from "./components/InfiniteList";

function App() {
  const [state, setState] = useState([]);

  return (
    <div className="App">
      <InfiniteList state={state} setState={setState} />
    </div>
  );
}

export default App;
