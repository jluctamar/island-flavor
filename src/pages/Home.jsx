import React from 'react';
import styled from 'styled-components';
import HeroSlider from '../components/HeroSlider';
import {APP_NAME, APP_PRENAME} from '../shared/constants'
import Navigation from '../components/Navigation';
import Specials from '../components/Specials';
import Footer from '../components/footer';


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
      <Footer className='footer' />

    </Wrapper>
  )
}

// CSS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: url(../../assets/wood-background.png);
  background-repeat: no-repeat;  
  background-size: cover;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  
  .footer {
    position: absolute;
    bottom: 0px;
  }

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
  height: 12vh;
  

  transition: all .2s ease-in-out;


  &.top-stick {
    background: black;
    transition: all .2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    background: linear-gradient(316deg, hsla(29, 100%, 96%, 1) 8%, hsla(29, 73%, 71%, 1) 32%, hsla(241, 56%, 58%, 1) 53%, hsla(229, 89%, 62%, 1) 67%, hsla(346, 57%, 43%, 1) 86%, hsla(0, 71%, 45%, 1) 100%)
  }

  h1 {
    font-family: var(--cursive-font);
    font-weight: bolder;
    font-size: 2.5rem;
    margin: 0;
    align-self: center;
    color: var(--text-color-primary);
    text-shadow: 0px 2px black;
  }
  @media only screen and (max-width: 768px) and (orientation: landscape) {
    height: 20vh;
    .footer {
      height: fit-content;
    }
  } 

`
export default Home