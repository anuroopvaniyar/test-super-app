import React from 'react';
import styled from 'styled-components';
import {TEXT_SIZE} from 'types';
import {getTextFontSize} from 'utils';
import {useTheme} from 'react-native-paper';

const Text = (props: any) => {
  const theme = useTheme();
  const {
    children,
    bold = false,
    size = TEXT_SIZE.BIG,
    style = {},
    color = theme.colors.primary,
    ...rest
  } = props;

  const customStyle = {
    ...(bold && {
      fontWeight: 'bold',
    }),
    ...getTextFontSize(size),
    color,
  };

  return (
    <PrimaryText {...rest} style={{...style, ...customStyle}}>
      {children}
    </PrimaryText>
  );
};

export default Text;

const PrimaryText = styled.Text`
  text-align: ${({align}) => (align ? align : 'left')};
` as any;
