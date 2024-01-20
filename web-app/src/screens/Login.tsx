import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Text from "../components/Text";
import { useTranslation } from "react-i18next";
import { SIGNUP_INPUTS } from "../types";
import { ROUTE_DASHBOARD } from "../constants/routes";
import { useNavigate } from "react-router-dom";

const Login = (props: any) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = () => navigate(ROUTE_DASHBOARD);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Text component="h1" variant="h5">
          {t("login.login")}
        </Text>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id={SIGNUP_INPUTS.USERNAME}
            label={t("signUp.username")}
            name={SIGNUP_INPUTS.USERNAME}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name={SIGNUP_INPUTS.PASSWORD}
            label={t("signUp.password")}
            type="password"
            id={SIGNUP_INPUTS.PASSWORD}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t("login.login")}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
