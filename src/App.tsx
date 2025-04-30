// import { useState } from "react";
import "./App.css";
import React from "react";
import Tooltip from "./components/Tooltip";
import BasicExamplePortal from "./components/BasicExamplePortal";

function App() {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  return (
    <div>
      <div>
        <p>Aqui esta um exemplo feito por Alan</p>
        <BasicExamplePortal />
      </div>

      <div style={{ padding: 10 }}>
        <p>Aqui esta um exemplo feito por chatGPT</p>
        <button
          onMouseEnter={(e) => {
            setPosition({ x: e.clientX + 20, y: e.clientY + 30 });
            setShowTooltip(true);
          }}
          onMouseLeave={() => setShowTooltip(false)}
        >
          Hover me
        </button>
        {showTooltip && <Tooltip position={position}>Sou uma tooltip!</Tooltip>}
      </div>
    </div>
  );
}

export default App;
