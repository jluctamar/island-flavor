import React, { useEffect } from 'react'
import styled from 'styled-components';
import {HERO_OVERLAY_MESSAGE} from '../shared/constants'


function HeroSlider() {

  
  useEffect(() => {
    let counter = 1;

    setInterval(() => {
     document.getElementById('radio' + counter).checked = true;
     counter ++
     if(counter > 4) {
       counter = 1 
     } 
    }, 3000);
  })


  return (
    <Wrapper className='hero-slider-wrapper'>
      <Slider className='slider'>
        <Slides className='slides'>
          <input type="radio" name='radio-btn' id='radio1'></input>
          <input type="radio" name='radio-btn' id='radio2'></input>
          <input type="radio" name='radio-btn' id='radio3'></input>
          <input type="radio" name='radio-btn' id='radio4'></input>

          <div className='slide first'>
            <img src='./assets/dinning1.jpg' alt=''  className='dinning'></img>
          </div>
          <div className='slide'>
            <img src='./assets/dish2.jpg' alt=''></img>
          </div>
          <div className='slide'>
            <img src='./assets/dinning2-1.jpg' alt='' className='second-dinning'></img>
          </div>
          <div className='slide'>
            <img src='./assets/hero3.jpg' alt=''></img>
          </div>
        </Slides>

        <TextOverlay className="text-overlay">
          <div className="text">{HERO_OVERLAY_MESSAGE} </div>
        </TextOverlay>

        <NavigationAuto className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </NavigationAuto>

        <NavigationManual className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </NavigationManual>

      </Slider>

    </Wrapper>
  )
}

//CSS
const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-item: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  


`
const Slider =  styled.div`
position: relative;
  width: 100vw;
  height: 100vh;
  border-radius: 10px;  
`
const Slides =  styled.div`
  width: 500%;
  height: 100%;
  display: flex;


  input {
    display: none;
  }

  #radio1:checked ~ .first {
    margin-left: 0
  }
  #radio2:checked ~ .first {
    margin-left: -20%
  }
  #radio3:checked ~ .first {
    margin-left: -40%
  }
  #radio4:checked ~ .first {
    margin-left: -60%
  }
  .slide {
    width: 20%;
    transition: 1s
  
  }

  img {
    width: 100%;
    height: 100%;

    &.dinning {
      filter: blur(2px);
    }
    &.second-dinning {
      filter: blur(1px) brightness(1.2) contrast(1.1);
    }
  }

`

const TextOverlay = styled.div`
  position: absolute; 
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 2000px rgb(255 255 255 / 50%);
  backdrop-filter: blur(4px);
  height: 150px;
  width: 350px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 8px;
  padding: 16px;
  top: 55%;
  left: 8vw;

  .text {
    font-size: 2em;
    font-weight: bold;
    color: #e8e8e3;
    text-align: center;
    line-height: 48px;
    text-shadow: black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px;
  }
`

const NavigationManual = styled.div`
position: absolute; 
width: 100%;
display: flex;
justify-content: center;
margin-top: -150px;

.manual-btn {
  border: 4px solid red;
  padding 8px;
  border-radius: 10px;
  cursor: pointer;
  transition: 2s
}
.manual-btn:not(:last-child) {
  margin-right 40px;
}
.manual-btn:hover {
  background : red;
}
`

const NavigationAuto = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: -150px;

  div {
    border: 4px solid red;
    padding 8px;
    border-radius: 10px;
    cursor: pointer;
    transition: 2s
  }

   div:not(:last-child) {
    margin-right 40px;
  }
  .manual-btn:hover {
    background : red;
  }

  #radio1:checked ~ .navigation-auto .auto-btn1 {
    margin-left: 0
  }
  #radio2:checked ~ .navigation-auto .auto-btn2 {
    margin-left: -20%
  }
  #radio3:checked ~ .navigation-auto .auto-btn3 {
    margin-left: -40%
  }
  #radio4:checked ~ .navigation-auto .auto-btn4 {
    margin-left: -60%
  }
`
 
export default HeroSlider