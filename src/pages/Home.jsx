import React from 'react';
import styled from 'styled-components';
import HeroSlider from '../components/HeroSlider';
import {APP_NAME} from '../shared/constants'
import Navigation from '../components/Navigation';
import Specials from '../components/Specials';

function Home() {
  
  const handleScroll = (event) => {
    let navbar = document.querySelector(".nav-wrapper");
    navbar.classList.toggle("top-stick", event.target.scrollTop > navbar.offsetHeight );
  };
  
  return (
    <Wrapper onScroll={handleScroll} className='wrapper-home'>
      <NavWrapper className='nav-wrapper'>
        <h1>{APP_NAME}</h1>
        <Navigation />
      </NavWrapper>
      <HeroSlider />
      <Specials />

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

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 16px;
  padding-left: 16px;
  color: white;
  
  z-index: 2;
  background: transparent;
  position: absolute;
  top: 0px;
  width: 100%;

  transition: all .2s ease-in-out;


  &.top-stick {
    background: black;
    transition: all .5s ease-in-out;
  }

  h1 {
    font-family: var(--cursive-font);
    font-weight: bold;
    font-size: 2.5rem;
    color: var(--text-color-primary);
  }

`
export default Home