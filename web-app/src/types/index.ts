export enum LANGUAGE_CODES {
  ENGLISH = "en",
  ARABIC = "ar",
  URDU = "ur",
  HINDI = "hi"
}

export enum COUNTRY {
  AE = "AE",
  IN = "IN",
  PK = "PK",
  EG = "EG"
}

export interface Theme {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    error: {
      main: string;
    };
  };
}

export enum SIGNUP_INPUTS {
  USERNAME = "username",
  PASSWORD = "password"
}
