import * as Colors from "./colors";
import { Theme } from "../../../types";
import { createTheme } from "@mui/material";

const baseUae: Theme = createTheme({
  palette: {
    primary: {
      main: Colors.PRIMARY,
    },
    secondary: {
      main: Colors.ACTION,
    },
    error: {
      main: Colors.ERROR,
    },
    info: {
      main: Colors.INFO,
    },
  },
});

export default baseUae;
