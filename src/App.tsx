import { useState } from "react";
import { io } from "socket.io-client";

const socket = io("ws://localhost:8080");

const App: React.FC = () => {
  const [data, setData] = useState("");

  socket.on("data", (text) => {
    setData(text.data);
    console.log(text);
  });

  return (
    <div>
      <h1>Hello World!</h1>
      <p>{data}</p>
    </div>
  );
};

export default App;
