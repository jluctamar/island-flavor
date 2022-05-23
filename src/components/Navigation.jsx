import React, { useEffect, useRef, useState } from 'react'
import {NavLink} from 'react-router-dom'; 
import styled from 'styled-components';
import { Spin as Hamburger } from 'hamburger-react';
import { BrowserView, MobileView } from 'react-device-detect';


function Navigation(properties) {
  const [showNav, setShowNav]  = useState(false);
  const [toggled, toggle] = useState();

  const handleClick= () => {
    setShowNav(false);
    toggle(false);
  }
  
  useEffect(() => {
    properties.parentCallback(showNav);
  })
  


  return (
    <Wrapper>
      <BrowserView className='browser-view'>
        
        <NavLink to={'/'}>
          <h4>Home</h4>
        </NavLink>
        
        <NavLink to={'/menu'}>
          <h4>Menu</h4>
        </NavLink>
        
        <NavLink to={'/about'}>
          <h4>About</h4>
        </NavLink>
        
        
      </BrowserView>

      <MobileView className='mobile-view-wrapper'>
        <Hamburger color='var(--text-color-primary)' onToggle={setShowNav}  toggle={toggle} toggled={toggled}  />
          { showNav &&  <div className="mobile-nav">
          <NavLink to={'/'} onClick={handleClick}>
            <h4>Home</h4>
          </NavLink>
          
          <NavLink to={'/menu'} onClick={handleClick}>
            <h4>Menu</h4>
          </NavLink>
          
          <NavLink to={'/about'} onClick={handleClick}>
            <h4>About</h4>
          </NavLink>
          
        </div> }
      </MobileView>

    </Wrapper>
  )
}

//CSS
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;

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

  .mobile-view-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;


    .hamburger-react {
      position: absolute !important;
      top: 8px;
      right: 8px;
    }
  
    .mobile-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 100%;
      width: 100%;

      h4 {
        font-size: 3rem;
        margin: 0px;
      }

    }
  }

`


export default Navigation