import {BrowserRouter, Route, Routes} from "react-router-dom";
import styled from 'styled-components';
import Navigation from "./components/Navigation";
import { APP_NAME } from "./shared/constants";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";

function App() {


  const handleCallback = (childScrollData) =>{
    let navbar = document.querySelector(".nav-wrapper");
    // for elements that dont need the scroll effect expect -1 value for childScrollData
   
    navbar.classList.toggle("standard-placement", childScrollData === -1 ); 
    navbar.classList.toggle("top-stick", childScrollData > navbar.offsetHeight
    );
  }

  const handleHamburgerCallback = (showMobileNav) =>{
    let navbar = document.querySelector(".nav-wrapper");
    navbar.classList.toggle("fullscreen", showMobileNav );
  }


  return (
    <Wrapper className='wrapper-app' >
      <BrowserRouter>
        <NavWrapper className='nav-wrapper'>
            <h1>{APP_NAME}</h1>
           <Navigation parentCallback = {handleHamburgerCallback}/> 
        </NavWrapper>
        
        <Routes>
            <Route path='/' element={<Home parentCallback = {handleCallback}/>} />
            <Route path='/menu' element={<Menu parentCallback = {handleCallback}  />} />
            <Route path='/about' element={<About parentCallback = {handleCallback} />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
  
}

// CSS 
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

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
  transition: all .2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background: linear-gradient(145deg,hsla(29,100%,96%,1) 8%,hsla(29,73%,71%,1) 32%,hsla(206, 82%, 59%, 1) 53%,hsla(229,89%,62%,1) 67%,hsla(346,57%,43%,1) 86%,hsla(0,71%,45%,1) 100%);
}

&.standard-placement {
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background: linear-gradient(145deg,hsla(29,100%,96%,1) 8%,hsla(29,73%,71%,1) 32%,hsla(206, 82%, 59%, 1) 53%,hsla(229,89%,62%,1) 67%,hsla(346,57%,43%,1) 86%,hsla(0,71%,45%,1) 100%);
}


&.fullscreen {
  position: absolute !important;
  flex-direction: column;
  background: black;
  background-image: linear-gradient(1deg,#000000 0%,#434343 74%);
  height: 100%;
  width: 100%;

  h1 {
    align-self: flex-start;
    margin-top: 8px;
  }

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

// @media only screen and (max-width: 767px) and (orientation: landscape) {
//   height: 15vh;
// }

`






export default App;
