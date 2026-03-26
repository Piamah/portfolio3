import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";
import "./i18n/i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
     <HelmetProvider>
        <App />
     </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
