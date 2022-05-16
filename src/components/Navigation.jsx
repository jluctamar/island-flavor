import React from 'react'
import {NavLink} from 'react-router-dom'; 
import styled from 'styled-components';


function Navigation() {
  return (
    <Wrapper>
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
    color: black;
    &.active {
      
      text-decoration: underline;
    }
  }
`


export default Navigation