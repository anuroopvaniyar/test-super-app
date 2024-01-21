import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./utils";
import AppRoute from "./route";
import useAppSettings from "./hooks/useAppSettings";

function App() {
  const { country } = useAppSettings();

  return (
    <ThemeProvider
      theme={getTheme({
        countryCode: country,
      })}
    >
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;
