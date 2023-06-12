import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ThemeProvider } from "@emotion/react";
import Themes from "./components/Themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<ThemeProvider theme={Themes}>
  <App />
  //</ThemeProvider>
);
