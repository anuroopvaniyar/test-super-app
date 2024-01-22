import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./utils";
import AppRoute from "./route";
import useAppSettings from "./hooks/useAppSettings";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const { country } = useAppSettings();

  return (
    <ErrorBoundary>
      <ThemeProvider
        theme={getTheme({
          countryCode: country,
        })}
      >
        <AppRoute />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
