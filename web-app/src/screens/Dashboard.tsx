import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Text from "../components/Text";
import { useTranslation } from "react-i18next";
import { BLACK } from "../constants/colors";

const Dashboard = () => {
  const { t } = useTranslation();

  const country = "IN";
  const language = "en";

  return (
    <Container component="main" maxWidth="md">
      <Text component="h1" variant="h6" noWrap sx={{ flexGrow: 1 }}>
        {t("dashboard.welcome")}
      </Text>
      <Text color={BLACK}>
        {t("dashboard.country")} - {country}
      </Text>
      <Text color={BLACK}>
        {t("dashboard.language")} - {language}
      </Text>
    </Container>
  );
};

export default Dashboard;
