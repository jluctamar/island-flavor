import React, { useEffect } from 'react';
import styled from 'styled-components';
import HeroSlider from '../components/HeroSlider';
import Specials from '../components/Specials';
import Footer from '../components/footer';


function Home(properties) {
  const handleScroll = (event) => {
      properties.parentCallback(event.target.scrollTop);
      event.preventDefault();
  };

  useEffect(() => {
    let initialScrollValue = 0;
    properties.parentCallback(initialScrollValue );
  }, [properties])
  
  return (
    <Wrapper onScroll={handleScroll} className='wrapper-home'>
      <HeroSlider />
      <Specials />
      <Footer className='footer' />

    </Wrapper>
  )
}

// CSS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(../../assets/wood-background.png);
  background-repeat: no-repeat;  
  background-size: cover;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

`


export default Home