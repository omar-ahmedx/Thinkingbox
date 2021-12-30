import React from "react";
import ReactDOM from "react-dom";
//import { Curtains } from "react-curtains";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* <Curtains
      pixelRatio={Math.min(1.5, window.devicePixelRatio)}
      autoRender={false} // we'll use gsap ticker in App.js instead
    >*/}
    <App />
    {/*</Curtains>*/}
  </React.StrictMode>,
  document.getElementById("root")
);
