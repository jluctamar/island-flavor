import React from 'react'
import {NavLink} from 'react-router-dom'; 
import styled from 'styled-components';
import { Spin as Hamburger } from 'hamburger-react';
import { BrowserView, MobileView } from 'react-device-detect';


function Navigation() {
  return (
    <Wrapper>
      <BrowserView className='browser-view'>
        <NavLink to={'/'}>
          <h4>Home</h4>
        </NavLink>
        
        <NavLink to={'/about'}>
          <h4>About</h4>
        </NavLink>
        
        <NavLink to={'/menu'}>
          <h4>Menu</h4>
        </NavLink>
        
        <NavLink to={'/contact'}>
          <h4>Contact</h4>
        </NavLink>
      </BrowserView>

      <MobileView>
        <Hamburger color='var(--text-color-primary)' />
      </MobileView>

    </Wrapper>
  )
}

//CSS
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    margin-right: 8px;
    text-decoration: unset;
    color: white;
    &.active {
      text-decoration: underline;
    }
  }

  h4 {
    color: var(--text-color-primary);
    font-size: 1.3rem;
    text-shadow: 0px 2px black;
  }

  .browser-view {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

`


export default Navigation