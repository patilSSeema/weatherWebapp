import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import WeatherProvider from "./Context/WeatherProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WeatherProvider >
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </WeatherProvider>
);
