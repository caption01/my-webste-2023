import React from 'react';
import styled from 'styled-components';

import Avatar from '@/component/Avatar/Avatar';
import Text from '@/component/Text/Text';
import * as cssType from '@/component/types/css';
import { device } from '@/utils/styled';

const Main = () => {
  const [color, setColor] = React.useState('white');

  const onHover = (color: string) => {
    setColor(color);
  };

  const resetColor = () => {
    setColor('white');
  };

  return (
    <Layout color={color}>
      <TextContainer>
        <Text fontSize="5rem" fontWeight={500}>
          Hi, welcome to my space
        </Text>
        <Text fontSize="5rem" fontWeight={500}>
          Pick some topic
        </Text>
      </TextContainer>
      <LeftMenu>
        <MenuItem
          marginLeft="10rem"
          color="#302837"
          onMouseEnter={() => onHover('#302837')}
          onMouseLeave={() => resetColor()}
        >
          <Text fontSize="3rem" fontWeight={500}>
            WHERE
          </Text>
        </MenuItem>
        <MenuItem
          marginLeft="5rem"
          color="#D4775A"
          onMouseEnter={() => onHover('#D4775A')}
          onMouseLeave={() => resetColor()}
        >
          <Text fontSize="3rem" fontWeight={500}>
            WHAT
          </Text>
        </MenuItem>
        <MenuItem
          marginLeft="10rem"
          color="#5C3029"
          onMouseEnter={() => onHover('#5C3029')}
          onMouseLeave={() => resetColor()}
        >
          <Text fontSize="3rem" fontWeight={500}>
            WHO
          </Text>
        </MenuItem>
      </LeftMenu>
      <RightMenu>
        <MenuItem
          marginRight="10rem"
          color="#544CAF"
          onMouseEnter={() => onHover('#544CAF')}
          onMouseLeave={() => resetColor()}
        >
          <Text fontSize="3rem" fontWeight={500}>
            WHEN
          </Text>
        </MenuItem>
        <MenuItem
          marginRight="5rem"
          color="#2B5BA9"
          onMouseEnter={() => onHover('#2B5BA9')}
          onMouseLeave={() => resetColor()}
        >
          <Text fontSize="3rem" fontWeight={500}>
            WHY
          </Text>
        </MenuItem>
        <MenuItem
          marginRight="10rem"
          color="#55DFCB"
          onMouseEnter={() => onHover('#55DFCB')}
          onMouseLeave={() => resetColor()}
        >
          <Text fontSize="3rem" fontWeight={500}>
            HOW
          </Text>
        </MenuItem>
      </RightMenu>
      <ImageContainer>
        <Avatar />
      </ImageContainer>
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  transition: all 0.7s;
  background-color: ${(props) => props.color};
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 10rem;
`;

const LeftMenu = styled.section`
  @media ${device.mobileS} {
    width: 70%;
    margin: auto;

    position: static;
    transform: unset;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${device.tablet} {
    width: 50%;

    position: absolute;
    top: 60%;
    left: 0;
    transform: translateY(-50%);
    text-align: left;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RightMenu = styled.section`
  @media ${device.mobileS} {
    width: 70%;
    margin: auto;

    position: static;
    transform: unset;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${device.tablet} {
    width: 50%;

    position: absolute;
    top: 60%;
    right: 0;
    transform: translateY(-50%);
    text-align: right;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

type MenuItemProps = {
  marginLeft?: cssType.marginLeft;
  marginRight?: cssType.marginRight;
  children?: React.ReactNode;
};

const MenuItem = styled.div<MenuItemProps>`
  transition: all 0.5s;
  text-align: center;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.5rem 1.5rem;
    animation: lighting 0.75s infinite;
  }

  @media ${device.mobileS} {
    width: 80%;
    margin: 2rem 0;
  }

  @media ${device.tablet} {
    width: 30%;
    margin-top: 10rem;
    margin-bottom: 10rem;
    margin-left: ${(props) => props.marginLeft};
    margin-right: ${(props) => props.marginRight};
  }

  @keyframes lighting {
    0% {
      border-top: 0.2rem solid red;
      border-left: 0.2rem solid green;
      border-right: 0.2rem solid blue;
      border-bottom: 0.2rem solid white;
    }

    25% {
      border-top: 0.2rem solid white;
      border-left: 0.2rem solid red;
      border-right: 0.2rem solid green;
      border-bottom: 0.2rem solid blue;
    }

    50% {
      border-top: 0.2rem solid blue;
      border-left: 0.2rem solid white;
      border-right: 0.2rem solid red;
      border-bottom: 0.2rem solid green;
    }

    75% {
      border-top: 0.2rem solid white;
      border-left: 0.2rem solid blue;
      border-right: 0.2rem solid green;
      border-bottom: 0.2rem solid red;
    }

    100% {
      border-top: 0.2rem solid red;
      border-left: 0.2rem solid green;
      border-right: 0.2rem solid blue;
      border-bottom: 0.2rem solid white;
    }
  }
`;

const ImageContainer = styled.section`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  svg g {
    fill: transparent;
  }

  @media ${device.mobileS} {
    position: absolute;
    bottom: 0;
    width: 40%;
  }

  @media ${device.tablet} {
    width: 40%;
  }

  @media ${device.laptopL} {
    width: 33.33%;
  }
`;

export default Main;
