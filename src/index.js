import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return <p>Hi.</p>;
}
ReactDOM.createRoot(document.getElementById("app")).render(<Hi />);
