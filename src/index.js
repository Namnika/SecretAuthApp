import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AuthProvider } from "./context/AuthProvider";

const rootEle = document.getElementById("root")

const root = ReactDOM.createRoot(rootEle)

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
