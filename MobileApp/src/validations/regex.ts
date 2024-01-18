import {SPCL_CHAR} from 'appConstants/keys';

export const Regex = {
  ALPHA_NUMERIC_ONLY: `^[a-zA-Z0-9]+$`,
  ALPHA_NUMERIC_STARTING_WITH_LETTER: `^[a-zA-Z][a-zA-Z0-9]+$`,
  ALPHA_NUMERIC_SPL_CHARS_ONLY: `^[a-zA-Z0-9${SPCL_CHAR}]*$`,
};
