import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Text from "../components/Text";
import useAppSettings from "../hooks/useAppSettings";
import { getLanguagesData, isRTLRequired } from "../utils";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import { LANGUAGE_CODES, SETTINGS_FIELD_NAMES } from "../types";
import { useDispatch } from "react-redux";
import { setValue } from "../state/actions";
import Box from "@mui/material/Box";
import { LTR, RTL } from "../constants";

const SelectLanguage = (props: { show: boolean; onDismiss: () => void }) => {
  const { show = false, onDismiss } = props;
  const { t, i18n } = useTranslation();
  const { language } = useAppSettings();
  const dispatch = useDispatch();

  const onSelection = (languageCode: LANGUAGE_CODES) => {
    dispatch(setValue(SETTINGS_FIELD_NAMES.LANGUAGE, languageCode));
    const isRTLNeeded = isRTLRequired(languageCode);

    // Apply the language change
    i18n.changeLanguage(languageCode);
    document.body.style.direction = isRTLNeeded ? RTL : LTR;

    onDismiss && onDismiss();
  };

  return (
    <Dialog open={show} onClose={onDismiss}>
      <DialogTitle
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text variant={"h6"}>Select Language</Text>
        <IconButton onClick={onDismiss}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {getLanguagesData(t).map((item) => {
          const { label, value, id } = item;
          return (
            <Box mt={2} key={id}>
              <Button
                variant="outlined"
                onClick={() => onSelection(value)}
                color={"info"}
                fullWidth
              >
                {label}
              </Button>
            </Box>
          );
        })}
      </DialogContent>
    </Dialog>
  );
};

export default SelectLanguage;
