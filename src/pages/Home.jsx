import React from 'react';
import styled from 'styled-components';
import HeroSlider from '../components/HeroSlider';

function Home() {
  return (
    <Wrapper className='wrapper-home'>
      <HeroSlider />
    </Wrapper>
  )
}

// CSS
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: auto;
`
export default Home