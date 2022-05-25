import React from 'react'
import styledComponents from 'styled-components'

function MenuItem(properties) {
  return (
    <Wrapper className="wrapper-menu-item">
        <div className="names">
            <div className="text">{properties.creole}</div>
            <div className="text sub">{properties.english}</div>
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
  background: rgba(123, 155, 186, .8);;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  padding: 1em;

  :hover {
      transform: scale(1.01);
  }


  .text, .price {
    font-size: 1.2rem;
    
    &.sub {
        font-size: 1rem;
        opacity: .7;
    }
  }


`

export default MenuItem