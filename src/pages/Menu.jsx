import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/footer';
import MenuItem from '../components/MenuItem';
import { PLACE_ORDER_LINK } from '../shared/constants';
import { fullMenu } from '../shared/menuData';

function Menu(properties) {
  const simulateScrollHeight = -1;
  let meatLegumArr = [];
  let saladsArr = [];
  let appArr = [];
  let burgersArr = [];
  let tacosArr = [];
  let seafoodArr = [];
  let soupArr = [];
  let sideDishesArr = [];
  let beveragesArr = [];
  let dessertsArr = [];
  let extrasArr = [];

  Object.entries(fullMenu.appitizers).forEach((entry) => {
    appArr.push(entry);
  });
  Object.entries(fullMenu.salads).forEach((entry) => {
    saladsArr.push(entry);
  });
  Object.entries(fullMenu.meatsAndLegumes).forEach((entry) => {
    meatLegumArr.push(entry);
  });
  Object.entries(fullMenu.burgers).forEach((entry) => {
    burgersArr.push(entry);
  });
  Object.entries(fullMenu.tacos).forEach((entry) => {
    tacosArr.push(entry);
  });
  Object.entries(fullMenu.seafood).forEach((entry) => {
    seafoodArr.push(entry);
  });
  Object.entries(fullMenu.soups).forEach((entry) => {
    soupArr.push(entry);
  });
  Object.entries(fullMenu.sideDishes).forEach((entry) => {
    sideDishesArr.push(entry);
  });
  Object.entries(fullMenu.beverages).forEach((entry) => {
    beveragesArr.push(entry);
  });
  Object.entries(fullMenu.desserts).forEach((entry) => {
    dessertsArr.push(entry);
  });
  Object.entries(fullMenu.extras).forEach((entry) => {
    extrasArr.push(entry);
  });



  useEffect(() => {
    properties.parentCallback(simulateScrollHeight);
  });
  return (
    <Wrapper className='wrapper-menu'>
      
      <div className="meal-sections">
        <form action={PLACE_ORDER_LINK}>
          <button type="submit">Order Now</button>
        </form>
        <div className='meal-types'>
          <div className="header">Appetizers</div>
          <div className='items'>  
            {appArr.map((elem, index) => <MenuItem key={index} mainText={elem[1].mainText} subText={elem[1].subText} price={elem[1].price}/>)}
          </div>
        </div>
        
        <div className='meal-types'>
          <div className="header">Salads</div>
          <div className="items">
            {saladsArr.map((elem, index) => <MenuItem key={index} mainText={elem[1].mainText} subText={elem[1].subText} price={elem[1].price}/>)}
          </div>
        </div>
        
        <div className='meal-types'>
          <div className="header">Meats And Legumes</div>
          <div className="items">
            {meatLegumArr.map((elem, index) => <MenuItem key={index} mainText={elem[1].mainText} subText={elem[1].subText} price={elem[1].price}/>)}
          </div>
        </div>

        <div className='meal-types'>
          <div className="header">Burgers</div>
          <div className="items">
            {burgersArr.map((elem, index) => <MenuItem key={index} mainText={elem[1].mainText} subText={elem[1].subText} price={elem[1].price}/>)}
          </div>
        </div>

        <div className='meal-types'>
          <div className="header">Tacos</div>
          <div className="items">
            {tacosArr.map((elem, index) => <MenuItem key={index} mainText={elem[1].mainText} subText={elem[1].subText} price={elem[1].price}/>)}
          </div>
        </div>

        <div className='meal-types'>
          <div className="header">Seafood</div>
          <div className="items">
            {seafoodArr.map((elem, index) => <MenuItem key={index} mainText={elem[1].mainText} subText={elem[1].subText} price={elem[1].price}/>)}
          </div>
        </div>

        <div className='meal-types'>
          <div className="header">Soup</div>
          <div className="items">
            {soupArr.map((elem, index) => <MenuItem key={index} mainText={elem[1].mainText} subText={elem[1].subText} price={elem[1].price}/>)}
          </div>
        </div>

        <div className='meal-types'>
          <div className="header">Side Dishes</div>
          <div className="items">
            {sideDishesArr.map((elem, index) => <MenuItem key={index} mainText={elem[1].mainText} subText={elem[1].subText} price={elem[1].price}/>)}
          </div>
        </div>

        <div className='meal-types'>
          <div className="header">Beverages</div>
          <div className="items">
            {beveragesArr.map((elem, index) => <MenuItem key={index} mainText={elem[1].mainText} subText={elem[1].subText} price={elem[1].price}/>)}
          </div>
        </div>

        <div className='meal-types'>
          <div className="header">Desserts</div>
          <div className="items">
            {dessertsArr.map((elem, index) => <MenuItem key={index} mainText={elem[1].mainText} subText={elem[1].subText} price={elem[1].price}/>)}
          </div>
        </div>

        <div className='meal-types'>
          <div className="header">Extras</div>
          <div className="items">
            {extrasArr.map((elem, index) => <MenuItem key={index} mainText={elem[1].mainText} subText={elem[1].subText} price={elem[1].price}/>)}
          </div>
        </div>

        <div className="order-action">
          <div className='text'>Order Pickup or Delivery With Uber Eats</div> 
          <form action={PLACE_ORDER_LINK}>
              <button type="submit">Order Now</button>
            </form>
        </div>
      </div>
      <Footer />
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

  background-image: url(${process.env.PUBLIC_URL + '/assets/wood-background.png'});
  background-repeat: no-repeat;  
  background-size: cover;
  
  .meal-sections {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: fit-content;
    padding: 3em;
    padding-left: 7.5em;
    align-items: flex-start;
    background: rgb(255 255 255 / 10%);
    backdrop-filter: blur(8px);
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

    .meal-types {
      width: 100%;
    }
  
    form {
      align-self: flex-end;
    }
    button {
      background-image: linear-gradient(#42A1EC, #0070C9);
      border: 1px solid #0077CC;
      border-radius: 16px;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      direction: ltr;
      display: block;
      font-family: inherit;
      font-size: 17px;
      font-weight: 400;
      letter-spacing: -.022em;
      line-height: 1.47059;
      min-width: 30px;
      overflow: visible;
      padding: 4px 15px;
      text-align: center;
      vertical-align: baseline;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
    }


    .header {
      font-size: 3rem;
      margin-bottom: 16px;
      color: var(--text-color-secondary);
      text-shadow: 0px 2px #595959;
    }
    .items {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5em;
      justify-content: flex-start;
      margin-left: 2em;
      margin-bottom: 3em;
    }


    .order-action {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-self: center;
      width: 75%;
      .text {
        font-size: 2rem;
      }
    }
  }


  @media only screen and (max-width: 767px) { 
    
    .meal-sections {
      padding: 1em;

      .header {
        font-size: 2.5rem;
      }
      .items {
        justify-content: center;
        margin-left: 0em;
      }

      .order-action {
        flex-direction: column;
        width: 100%;
        .text {
          font-size: 1.5rem;
          text-align: center;
        }
        form {
          align-self: center;
          margin-top: 8px;
        }
      }
    }
  }

  
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) { 
    .meal-sections {
      padding: 1em;

      .items {
        margin-left: 0em;
        justify-content: center;
      }
      .order-action {
        flex-direction: column;
        width: 100%;
        .text {
          font-size: 1.5rem;
          text-align: center;
        }

        form {
          align-self: center;
          margin-top: 8px;
        }
      }
    }
  }
  
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) { 
    .meal-sections {
      padding: 1em;

      .items {
        margin-left: 0em;
        justify-content: center;
      }
      .order-action {
        flex-direction: column;
        width: 100%;
        .text {
          font-size: 1.5rem;
          text-align: center;
        }

        form {
          align-self: center;
          margin-top: 8px;
        }
      }
    }
  }

`

export default Menu