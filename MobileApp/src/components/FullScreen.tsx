import React from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';

const FullScreen = (props: {children: React.ReactNode}): JSX.Element => {
  return (
    <Modal coverScreen={true} {...props}>
      <Container>{props.children}</Container>
    </Modal>
  );
};

const Container = styled.View`
  margin: 0;
  flex-grow: 1;
`;

FullScreen.defaultProps = {
  animationType: 'slide',
  transparent: true,
  onDismiss: () => {},
};

export default FullScreen;
