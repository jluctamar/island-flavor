import React, { useEffect } from 'react';
import styled from 'styled-components';
import {HERO_OVERLAY_MESSAGE} from '../shared/constants';
import { Fade } from "react-awesome-reveal";

function HeroSlider() {

   // capture relevant elements in variables for use
   let slidesContainer; 
   let slidesArr = [];
   let navBtns;
   let navBtnsArr = []; 
   let slideWidth;
   
  //  const setSlidePosition = (slide, index) => {
  //    slide.style.left = slideWidth * index + 'px';
  //  };
 
   // const currentSlide = slidesContainer.querySelector('.current-slide');
   // const targetSlide = currentSlide.nextElementSibling;
 
   // when manual buttons are clicked they should display the associating slide
   const moveToSlide = (currentSlide, targetSlide) => {
    // slides.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');    
   }
 
   const updateNavBtns = (current, target) => {
     current.classList.remove('current-slide');
     target.classList.add('current-slide');
   }
 
 




   const handleClick = (event) => {
     const targetBtn = event.target.closest('button');
   
     if(!targetBtn) return;
 
     const currentSlide = slidesContainer.querySelector('.current-slide');
     const currentBtn = navBtns.querySelector('.current-slide');
     const targetIndex = navBtnsArr.findIndex(btn => btn === targetBtn);
     const targetSlide = slidesArr[targetIndex];
 

     moveToSlide(currentSlide, targetSlide);
     updateNavBtns(currentBtn, targetBtn);
   };


  
  useEffect(() => {

    slidesContainer = document.querySelector('.slides');
    slidesArr = Array.from(slidesContainer.children) ;
    navBtns = document.querySelector('.navigation-manual') ;
    navBtnsArr = Array.from(navBtns.children);
    slideWidth = slidesArr[0].getBoundingClientRect().width;
    // slidesArr.forEach((elem, i) => setSlidePosition(elem, i));




    let counter = 1;

    setInterval(() => {
      // Simulate button click in sequential order
      let autoTarget = slidesArr[counter];
      let autoTargetBtn = navBtnsArr[counter];
      let autoCurrentSlide = slidesContainer.querySelector('.current-slide');
      let autoCurrentBtn = navBtns.querySelector('.current-slide');
      moveToSlide(autoCurrentSlide, autoTarget);
      updateNavBtns(autoCurrentBtn,autoTargetBtn );
     counter ++
     if(counter > slidesArr.length - 1 ){
       counter = 0 
     } 
    }, 2500);
  })


  return (
    <Wrapper className='hero-slider-wrapper' >
      <Slider className='slider'>
        <Slides className='slides'>
          
            <div className='slide current-slide'>
              <img src='./assets/dinning1.jpg' alt=''  className='dinning'></img>
            </div>
            <div className='slide ' >
              <img src='./assets/dish2.jpg' alt=''></img>
            </div>
            <div className='slide '>
              <img src='./assets/dinning2-1.jpg' alt='' className='second-dinning'></img>
            </div>
            <div className='slide '>
              <img src='./assets/hero3.jpg' alt=''></img>
            </div>

        </Slides>

        <TextOverlay className="text-overlay">
          <div className="text">{HERO_OVERLAY_MESSAGE} </div>
        </TextOverlay>

        <NavigationManual className="navigation-manual" onClick={handleClick}>
          <button className="manual-btn current-slide"></button>
          <button className="manual-btn"></button>
          <button className="manual-btn"></button>
          <button className="manual-btn"></button>
        </NavigationManual>

        {/* <NavigationAuto className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </NavigationAuto> */}
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
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;


  .slide {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition:  400ms opacity ease-in-out;
    transition-delay: 400ms;


  }

  .current-slide {
    transition-delay: 0s;
    z-index;
    opacity: 1;
  }




  img {
    width: 100%;
    height: 100%;
    object-fit: fill;


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
    color: var(--text-accent-gold);
    text-align: center;
    line-height: 48px;
    letter-spacing: 1px;
    text-shadow: black 0px 2px 1px, black 0px 0px 1px, black 0px 0px 1px;
  }
`

const NavigationManual = styled.div`
position: absolute; 
width: 100%;
display: flex;
justify-content: center;
bottom: 24px;

.manual-btn {
  background: rgba(0,0,0,.3);
  padding: 8px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 500ms;
}
.manual-btn:not(:last-child) {
  margin-right 40px;
}
.manual-btn.current-slide {
  background: rgba(0,0,0, .8);
  transform: scale(1.5);
}
`

// const NavigationAuto = styled.div`
//   position: absolute;
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   margin-top: -100px;

//   div {
//     display: none;   // Hiding the buttons for simplicity
//     border: 4px solid red;
//     padding: 5px;
//     border-radius: 10px;
//     cursor: pointer;
//     transition: 2s;
//   }

//    div:not(:last-child) {
//     margin-right: 40px;
//   }
//   .manual-btn:hover {
//     background : red;
//   }

// `
 
export default HeroSlider