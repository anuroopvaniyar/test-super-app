import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Text from "../components/Text";
import { useTranslation } from "react-i18next";
import { BLACK } from "../constants/colors";
import { useLocation } from "react-router-dom";
import { AppBar, Button, Toolbar, useTheme } from "@mui/material";

const Dashboard = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { state = {} } = useLocation();

  const { username, country, language } = state;

  return (
    <>
      <AppBar color="inherit">
        <Toolbar>
          <Button onClick={() => {}} color={"info"}>
            {"Logout"}
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text component="h1" variant="h4" noWrap sx={{ flexGrow: 1 }}>
            {t("dashboard.welcome")}
          </Text>
          <Box mt={4} mb={2}>
            <Text color={BLACK}>
              {t("dashboard.username")} - {username}
            </Text>
          </Box>
          <Box mb={2}>
            <Text color={BLACK}>
              {t("dashboard.country")} - {country}
            </Text>
          </Box>
          <Text color={BLACK}>
            {t("dashboard.language")} - {language}
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
