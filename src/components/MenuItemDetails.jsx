import React, { useState } from 'react'
import styledComponents from 'styled-components'
import { PLACE_ORDER_LINK } from '../shared/constants';


function MenuItemDetails(properties) {
    const [isCreole, setLingo] = useState(true);


    const handleClick = () => {
        properties.parentCallback(false);
    }

    
    function handleLingoClick(  ) {
        setLingo(!isCreole);
    }
    return(
    <Wrapper className='wrapper-menuItem-details' >

        <DetailsCard className='details-card'>
            <div className='details-header'>
                <div className='title'>{isCreole ? properties.selectedMenuItem.menuItem.mainText: properties.selectedMenuItem.menuItem.subText}</div>
                <div className='img-container'>
                    <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' alt="" className='menu-item-image' />
                </div>
                <div className='lingo-set'>
                    <div className={'select'} onClick={handleLingoClick}>{isCreole? 'Switch to English': 'Switch to Creole'}</div>
                </div>
            </div>

            <div className='details-content'>
                <div className='descript-container'>
                    <div className='descript'>{isCreole ? properties.selectedMenuItem.menuItem.creoleDescrip : properties.selectedMenuItem.menuItem.engDescrip} </div>
                </div>

                <div className='action-container'>
                    <div className='price'>${properties.selectedMenuItem.menuItem.price}</div>        
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

    display: flex;
    align-items: center;  
    justify-content: center;
    width: 100%;
    height: 100%;
        
    
`;

const DetailsCard = styledComponents.div `
    
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-width: thick;
    border: outset;
    border-radius: 16px;
    background: linear-gradient(178deg,hsla(223,23%,70%,.9) 33%,hsla(210,53%,69%,0.9) 94%);

    .details-header {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        align-items: center;
        position: relative;
    }
    .img-container {
        width: 150px;
        height: 150px;
        border: 2px solid #fff;
        border-radius: 100px;
        margin-top: 16px;
        margin-bottom: 16px;
        box-shadow: 11px 14px 19px rgba(0, 0, 0, 0.5);
    }

    .lingo-set {
        display: flex;
        position: absolute;
        right: 24px;
        top: 16px;
        cursor: pointer;

        .select {
            text-decoration: underline;
            color: var(--text-color-secondary);

        }

    }

    .menu-item-image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .title { 
        text-decoration: underline;
    }

    .details-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .descript-container {
        display: flex;
        font-size: .8rem;
        height: 70%;
        width: 100%;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 16px;
        padding-right: 16px;
    }
    
    .descript {
        overflow: auto;
        height: 100%;
        width: 100%;
        font-size: 1.2rem;
        text-align: center;
        text-shadow: 0px 2px #8f8f8f;
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
    }
    .price {
        text-shadow: 0px 2px #8f8f8f;
        margin-left: 32px;
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 36px;
    }
    .button-container {
        display: flex;
    }
    .button-container .btn {
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
        margin-right: 16px;
        transition: .2s;
        &:hover {
            transform: scale(1.15);            
        }
    }



    @media only screen and (max-width: 767px) and (orientation: portrait) {
        
        width: 95%;
        height: 460px;
        justify-content: space-evenly;
    

        .img-container {
            width: 130px;
            height: 130px;
        }
  
        .menu-item-image {
            width: 130px;
            height: 130px;
        }
       
        .title {
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
        

        width: 90%;
        transform: translateY(28px);
        height: 280px;
        justify-content: space-evenly;
    

        .img-container {
            width: 90px;
            height: 90px;
            margin-bottom: 8px;
            box-shadow: 7px 10px 19px rgb(0 0 0 / 50%);
        }

        .menu-item-image {
            width: 90px;
            height: 90px;
        }

        .title {
            font-size: 1.5rem;
            margin-bottom: 8px;
        }

        .details-content {
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
