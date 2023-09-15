import React from 'react'
import styledComponents from 'styled-components'
import { PLACE_ORDER_LINK } from '../shared/constants';


function MenuItemDetails(properties) {

    const handleClick = () => {
        properties.parentCallback(false);
    }
    const handleOrderClick = () => {
        properties.parentCallback(false);
    }
    
    return(
    <Wrapper className='wrapper-menuItem-details' >

        <DetailsCard className='details-card'>
            <div className='details-header'>
                <div className='title'>{properties.selectedMenuItem.mainText}</div>
                <div className='img-container'>
                    {/* <img src="{{ dish.imgSrc }}" alt="" className="dish-image" /> */}
                </div>
            </div>

            <div className='details-content'>
                <div className='descript-container'>
                    <p className='descript'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

                <div className='action-container'>
                    <div className='price'>${properties.selectedMenuItem.price}</div>        
                    <div className='button-container'>
                        <form action={PLACE_ORDER_LINK}>
                            <button type="submit" className='btn'>Place Order</button>
                        </form>
                        <button className='btn' onClick={handleClick}>Close</button>
                    </div>
                </div>
            </div>
        </DetailsCard>
   
    </Wrapper>);
}

const Wrapper = styledComponents.div`

    .wrapper-menuItem-details {
        display: flex;
        align-items: center;  
        justify-content: center;
        width: 100%;
        height: 100%;
        
    }
`;

const DetailsCard = styledComponents.div `
    .details-card {
        width: 500px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-width: thick;
        border: outset;
        background: linear-gradient(178deg,hsla(223,23%,70%,.9) 33%,hsla(210,53%,69%,0.9) 94%);
    }
    .details-header {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        align-items: center;
    }
    .img-container {
        width: 150px;
        height: 150px;
        border: 2px solid #fff;
        border-radius: 100px;
        margin-bottom: 16px;
        box-shadow: 11px 14px 19px rgba(0, 0, 0, 0.5);
    }

    .details-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .descript-container {
        font-size: .8rem;
        padding-left: 16px;
        padding-right: 16px;
    }
    
    .descript {
        padding-bottom: 8px;
        padding-right: 8px;
        padding-left: 8px;
        border-bottom-style: dashed;
        border-color: slategrey;
    }

    .action-container {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        width: 100%;
        margin-top: 32px;
    }
    .price {
        margin-left: 32px;
        font-weight: bold;
        line-height: 36px;
    }
    .button-container {
        
    }
    .button-container .button {
        background-color: red;
        color: grey;
        margin-right: 8px;
        font-size: 1rem;
        transition: .2s;
        &:hover {
            background-color: white;
        }
    }



    @media only screen and (max-width: 767px) and (orientation: portrait) {
        .details-card {
          width: 95%;
          height: 460px;
          justify-content: space-evenly;
        }

        .img-container {
            width: 130px;
            height: 130px;
        }
  
        .dish-image {
            width: 130px;
            height: 130px;
        }
       
        .dish-title {
            font-size: 1.2rem;
        }

        .details-content {
        }

        .descript-container {
        }

        .descript {
            max-height: 90px;
            overflow-y: scroll;
        }
    
        .action-container {
        }

        .price {
            margin-left: 8px;
        }

        .button-container {
        }

        .button {
            margin-right: 4px;
        }

  
    
    }
   
    
    @media only screen and (max-width: 767px) and (orientation: landscape) {
        
        .details-card  {
          width: 90%;
          transform: translateY(28px);
          height: 260px;
          justify-content: space-evenly;
        }

        .img-container {
            width: 90px;
            height: 90px;
            margin-bottom: 8px;
            box-shadow: 7px 10px 19px rgb(0 0 0 / 50%);
        }

        .dish-image {
            width: 90px;
            height: 90px;
        }

        .dish-title {
            font-size: 1.5rem;
            margin-bottom: 8px;
        }

        dish-content {
        }
        
        .descript-container {
        }

        .descript {
        max-height: 80px;
        overflow-y: scroll;
        margin-bottom: 4px;
        }
        
        .action-container { 

            margin-top: 0px;
        }

        .price {
        margin-bottom: 0px;
        }
    }
`
export default MenuItemDetails
