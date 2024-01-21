import React from "react";
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Text = (props: TypographyProps ) => {
    const theme = useTheme();
    const {children, color = theme.palette.primary.main, ...rest} = props;

    return <Typography {...rest} color={color}>{children}</Typography>
}

export default Text;