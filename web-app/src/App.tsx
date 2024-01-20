import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { COUNTRY } from "./types";
import { getTheme } from "./utils";
import AppRoute from "./route";

function App() {
  return (
    <ThemeProvider
      theme={getTheme({
        countryCode: COUNTRY.IN
      })}
    >
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;
