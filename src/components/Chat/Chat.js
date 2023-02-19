import React, { useState }from "react";
import "./Chat.css";
import ChatBody from "../chatBody/ChatBody";
import Home from '../Home/Home'
function App() {
  const [bg,setbg]=useState(Array(4).fill(false))
  bg[1]=true;
  return (
    <div>
      <Home  bg={bg}/>
    <div className="__main">
      <ChatBody />
    </div>
    </div>
  );
}

export default App;