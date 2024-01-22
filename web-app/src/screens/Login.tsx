import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Text from "../components/Text";
import { useTranslation } from "react-i18next";
import { SETTINGS_FIELD_NAMES, SIGNUP_INPUTS, SignInType } from "../types";
import { ROUTE_DASHBOARD } from "../constants/routes";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import SelectLanguage from "../uiviews/SelectLanguage";
import useApi from "../hooks/useApi";
import {
  API_BASE_URL,
  FETCH_ALL_SUPER_APP_USERS_ENDPOINT,
} from "../constants/endpoints";
import { useTheme } from "@mui/material/styles";
import useAppSettings from "../hooks/useAppSettings";
import { useDispatch } from "react-redux";
import { setValue } from "../state/actions";
import { getDecryptedValue, randomString } from "../utils";

const Login = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { language } = useAppSettings();
  const dispatch = useDispatch();

  const { fetchData, loading, data, error } = useApi();

  const [selectLanguage, setSelectLanguage] = React.useState(false);
  const [enteredData, setEnteredData] = React.useState<SignInType>({
    username: "",
    password: "",
  });
  const [userNotFound, setUserNotFound] = React.useState(false);

  useEffect(() => {
    if (data !== null) {
      handleLogin(data);
    }
  }, [data]);

  const handleLogin = (data: Array<SignInType>) => {
    const existingUser = data?.find(
      (user: { username: string; password: string }) =>
        user?.username?.toLowerCase() ===
          enteredData?.username?.toLocaleLowerCase() &&
        getDecryptedValue(user?.password) === enteredData?.password
    );

    if (existingUser) {
      dispatch(setValue(SETTINGS_FIELD_NAMES.COUNRTY, existingUser?.country));
      localStorage.clear();

      // This should come from backend
      const token = randomString() + randomString();
      localStorage.setItem("user-token", token);

      setTimeout(() => {
        navigate(ROUTE_DASHBOARD, {
          state: {
            username: existingUser?.username,
            country: existingUser?.country,
            language,
          },
        });
      }, 500);
    } else {
      setUserNotFound(true);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data !== null &&
      setEnteredData({
        username: data?.get(SIGNUP_INPUTS.USERNAME) as string,
        password: data?.get(SIGNUP_INPUTS.PASSWORD) as string,
      });

    userNotFound && setUserNotFound(false);
    fetchData(`${API_BASE_URL}/${FETCH_ALL_SUPER_APP_USERS_ENDPOINT}`);
  };

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
        <Text component="h1" variant="h5" mt={4}>
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
          {error && (
            <Text variant="body2" color={theme.palette.error.main} mt={4}>
              {error}
            </Text>
          )}
          {userNotFound && (
            <Text variant="body2" color={theme.palette.error.main} mt={4}>
              {t("login.invalidCredentials")}
            </Text>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t("login.login")}
          </Button>
          <Grid container>
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={() => setSelectLanguage(true)}
              >
                {t("login.changeLanguage")}
              </Link>
            </Grid>
          </Grid>
          <SelectLanguage
            show={selectLanguage}
            onDismiss={() => setSelectLanguage(false)}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
