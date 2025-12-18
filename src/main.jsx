import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import QRGenerator from "./App.jsx";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QRGenerator />
  </StrictMode>
);
