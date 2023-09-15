import React from 'react'
import styledComponents from 'styled-components'

function MenuItem(properties) {

  const handleClick = () => {
    properties.parentCallback(true,properties);
  }
  return (
    <Wrapper className="wrapper-menu-item" onClick={handleClick}>
        <div className="names">
            <div className="text">{properties.mainText}</div>
            <div className="text sub">{properties.subText}</div>
        </div>
        <div className="price">
        {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(properties.price)}    
        </div>
    </Wrapper>
  )
}

const Wrapper = styledComponents.div`

  display: flex;
  height: 150px;
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: hsla(210, 31%, 61%, 1);
  background: linear-gradient(178deg, hsla(223, 23%, 70%, .9) 33%, hsla(210, 53%, 69%, 0.9) 94%);
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  padding: 1em;

  :hover {
      transform: scale(1.01);
  }


  .text, .price {
    font-size: 1.3rem;
    color: #040403;
    text-shadow: 0px 2px #8f8f8f;
    
    &.sub {
        font-size: 1rem;
        opacity: .7;
    }
  }

  @media only screen and (max-width: 767px) and (orientation: portrait) { 
    flex-direction: column;
    height: 160px;
    width: 120px;

    .text, .price {
        font-size: 1rem;
        text-align: center;

        &.sub {
          font-size: .7rem;
          opacity: .6;
          margin-top: 4px;
        }
      }
  }
  @media only screen and (max-width: 767px) and (orientation: landscape) { 
    flex-direction: column;
    height: 120px;
    width: 190px;

    .text, .price {
        font-size: 1rem;
        text-align: center;

        &.sub {
          font-size: .7rem;
          opacity: .6;
          margin-top: 4px;
        }
      }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) { 
      width: 300px;
  }


`

export default MenuItem