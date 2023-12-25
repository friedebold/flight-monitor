import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import PitchGraph from "./PitchGraph";

const socket = io("http://127.0.0.1:8000");

export interface Telemetry {
  loop: number;
  pitch: number;
  roll: number;
}

const App: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [telemetry, setTelemetry] = useState<Telemetry>({
    loop: 0,
    pitch: 0,
    roll: 0,
  });

  socket.on("connect", () => {
    console.log("connected");
  });

  socket.on("serial", (data) => {
    setTelemetry(data);
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });

  useEffect(() => {
    socket.emit("mode", isActive);
  }, [isActive]);

  return (
    <div
      style={{
        backgroundColor: "light grey",
        display: "flex",
        flex: 1,
        height: "100vh",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <h1>Flight Monitor</h1>
      <div
        style={{ backgroundColor: isActive ? "green" : "grey", padding: 20 }}
        onClick={() => setIsActive((currState) => !currState)}
      >
        <p>{isActive ? "On" : "Off"}</p>
      </div>
      <p>Pitch</p>
      <PitchGraph pitch={telemetry.pitch} />
    </div>
  );
};

export default App;
