import React, { useEffect } from 'react';
import styled from 'styled-components';

function About( properties) {
  const simulateScrollHeight = 150;

  useEffect(() => {
    properties.parentCallback(simulateScrollHeight);
  });
  return (
    <Wrapper className='wrapper-about'>

    </Wrapper>
  )
}

// CSS
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-image: url(../../assets/wood-background.png);
  background-repeat: no-repeat;  
  background-size: cover;
  overflow-y: auto;
  overflow-x: hidden;
`

export default About