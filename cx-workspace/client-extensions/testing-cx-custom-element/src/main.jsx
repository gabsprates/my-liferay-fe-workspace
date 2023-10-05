import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

class WebComponent extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}

const ELEMENT_ID = "testing-cx-custom-element";

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, WebComponent);
}
