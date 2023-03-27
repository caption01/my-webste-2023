import React from 'react';
import styled from 'styled-components';

import * as cssType from '@/component/types/css';

type StyledTextProps = {
  fontSize?: cssType.fontSize;
  fontWeight?: cssType.fontWeight;
};

interface TextProps extends StyledTextProps {
  children: React.ReactNode;
}

const StyledDiv = styled.div<StyledTextProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

const Text = ({
  fontSize = '10rem',
  fontWeight = 400,
  ...props
}: TextProps) => {
  return (
    <StyledDiv fontSize={fontSize} fontWeight={fontWeight}>
      {props.children}
    </StyledDiv>
  );
};

export default Text;
