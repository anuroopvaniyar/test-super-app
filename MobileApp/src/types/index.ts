export enum LANGUAGE_CODES {
  ENGLISH = 'en',
  ARABIC = 'ar',
  URDU = 'ur',
}

export enum TEXT_SIZE {
  BIG = 'BIG',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

export enum COUNTRY {
  AE = 'AE',
  IN = 'IN',
  PK = 'PK',
  EG = 'EG',
}

export interface Theme {
  colors: {
    primary: string;
    accent: string;
    action: string;
  };
}
