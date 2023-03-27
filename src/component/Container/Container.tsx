import React from 'react';
import styled from 'styled-components';

import * as cssType from '@/component/types/css';

type StyledContainerProps = {
  display?: cssType.display;
  justifyContent?: cssType.justifyContent;
  alignItems?: cssType.alignItems;
  flexDirection?: cssType.flexDirection;
};

interface ContainerProps extends StyledContainerProps {
  children: React.ReactNode;
}

const StyledDiv = styled.div<StyledContainerProps>`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
`;

const Container = ({
  display = 'flex',
  justifyContent = 'center',
  alignItems = 'center',
  flexDirection = 'row',
  ...props
}: ContainerProps) => {
  return (
    <StyledDiv
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
    >
      {props.children}
    </StyledDiv>
  );
};

export default Container;
