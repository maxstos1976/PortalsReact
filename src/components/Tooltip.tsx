// Exemplo do chatGPT
import ReactDOM from "react-dom";

function Tooltip({ children, position }) {
  return ReactDOM.createPortal(
    <div
      className="tooltip"
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        border: "1px solid red",
        padding: "10px",
        backgroundColor: "lightsalmon",
      }}
    >
      {children}
    </div>,
    document.getElementById("tooltip-root") as HTMLElement
  );
}

export default Tooltip;
