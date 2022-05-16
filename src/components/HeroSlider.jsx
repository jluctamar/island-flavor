import React, { useEffect } from 'react'
import styled from 'styled-components';


function HeroSlider() {

  
  useEffect(() => {
    let counter = 1;

    setInterval(() => {
     document.getElementById('radio' + counter).checked = true;
     counter ++
     if(counter > 4) {
       counter = 1 
     } 
    }, 4000);
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
            <img src='./assets/dining1.jpg' alt=''></img>
          </div>
          <div className='slide'>
            <img src='./assets/dish2.jpg' alt=''></img>
          </div>
          <div className='slide'>
            <img src='./assets/dining2.jpg' alt=''></img>
          </div>
          <div className='slide'>
            <img src='./assets/hero3.jpg' alt=''></img>
          </div>
        </Slides>

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
  }

`

const NavigationManual = styled.div`
position: absolute; 
width: 100vw;
display: flex;
justify-content: center;
margin-top: -150px;

.manual-btn {
  border: 4px solid red;
  padding 5px;
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
    padding 5px;
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