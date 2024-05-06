import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { Provider as JotaiProvider } from "jotai";
import jotaiStore from "./atom/store.ts";
import IsLoggedIn from "./components/IsLoggedIn.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JotaiProvider store={jotaiStore}>
      <AuthProvider>
        <IsLoggedIn>
          <DarkModeProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </DarkModeProvider>
        </IsLoggedIn>
      </AuthProvider>
    </JotaiProvider>
  </React.StrictMode>
);
