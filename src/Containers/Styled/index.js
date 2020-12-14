import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  border: 3px solid darksalmon;
  background-color: ${(props) => props.bgColor};
  border-radius: 8px;
  padding: 15px;
`;
const Color = styled.button`
  background-color: ${(props) => props.color};
  margin: 10px;
  padding: 5px;
`;
const TomatoColor = styled(Color)`
  background-color: tomato;
  color: white;

  &:hover {
    background-color: darkred;
    color: yellow;
  }

  ${(props) =>
    props.dark &&
    css`
      background-color: black;
      color: white;

      &:hover {
        background-color: lightpink;
        color: darkgray;
      }
    `}
`;

function Styled() {
  const [bgColor, setBgColor] = useState('lightsalmon');

  return (
    <Container bgColor={bgColor}>
      Hello
      {[
        'blue',
        'red',
        'salmon',
        'cyan',
        'orange',
        'gray',
        'yellow',
        'green',
      ].map((color) => {
        return (
          <Color key={color} color={color} onClick={(e) => setBgColor(color)}>
            {color}
          </Color>
        );
      })}
      <TomatoColor onClick={(e) => setBgColor('tomato')} dark>
        TOMATO
      </TomatoColor>
    </Container>
  );
}

export default Styled;
