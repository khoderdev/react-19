import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { Provider as JotaiProvider } from "jotai";
import jotaiStore from "./atom/store.ts";
import IsLoggedIn from "./components/IsLoggedIn.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JotaiProvider store={jotaiStore}>
      <IsLoggedIn>
        <DarkModeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DarkModeProvider>
      </IsLoggedIn>
    </JotaiProvider>
  </React.StrictMode>
);
