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
  colors: {
    primary: string;
    accent: string;
    action: string;
  };
}

export enum SIGNUP_INPUTS {
  USERNAME = "username",
  PASSWORD = "password"
}
