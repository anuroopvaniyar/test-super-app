import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { COUNTRY } from "./types";
import { getTheme } from "./utils";

function App() {
  return <ThemeProvider theme={getTheme(COUNTRY.IN)}></ThemeProvider>;
}

export default App;
