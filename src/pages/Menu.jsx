import React, { useEffect } from 'react';
import styled from 'styled-components';
import LegumesImageList from '../components/LegumesImageList';
import MenuItem from '../components/MenuItem';
import { fullMenu } from '../shared/menuData';

function Menu(properties) {
  const simulateScrollHeight = -1;
  let meatLegumArr = [];
  let saladsArr = [];
  let appArr = [];
  
  Object.entries(fullMenu.appitizers).forEach((entry) => {
    appArr.push(entry);
  });
  Object.entries(fullMenu.salads).forEach((entry) => {
    saladsArr.push(entry);
  });
  Object.entries(fullMenu.meatsAndLegumes).forEach((entry) => {
    meatLegumArr.push(entry);
  });


  useEffect(() => {
    console.log(appArr);
    properties.parentCallback(simulateScrollHeight);
  });
  return (
    <Wrapper className='wrapper-menu'>
      
      <div className='meal-types'>
        <div className="header">Appetizers</div>
        <div className='items'>  
          {appArr.map((elem, index) => <MenuItem key={index} creole={elem[1].creole} english={elem[1].english} price={elem[1].price}/>)}
        </div>
      </div>
      
      <div className='meal-types'>
        <div className="header">Salads</div>
        <div className="items">
          {saladsArr.map((elem, index) => <MenuItem key={index} creole={elem[1].creole} english={elem[1].english} price={elem[1].price}/>)}
        </div>
      </div>
      
      <div className='meal-types'>
        <div className="header">Meats And Legumes</div>
        <div className="items">
          {meatLegumArr.map((elem, index) => <MenuItem key={index} creole={elem[1].creole} english={elem[1].english} price={elem[1].price}/>)}
        </div>
      </div>
    </Wrapper>
  )
}

// CSS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  padding-left: 8em;
  padding-right: 8em;
  padding-top: 2em;
  align-items: flex-start;

  // background-image: url(../../assets/wood-background.png);
  // background-repeat: no-repeat;  
  // background-size: cover;
  

  .header {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5em;
    justify-content: flex-start;
    margin-left: 2em;
    margin-bottom: 3em;
  }

`

export default Menu