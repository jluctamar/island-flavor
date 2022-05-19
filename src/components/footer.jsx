import React from 'react'
import styled from 'styled-components';
import { COPYRIGHT } from '../shared/constants';

function Footer() {
  return (
    <Wrapper className='wrapper-footer'>
        <div className="text">
            <div className="info-text"> Call Or Visit Us Today! </div>
            <div className="info-text"> 555 Street Address, City, State, 10101 </div>
            <div className="info-text"> 555-555-5555 </div>
    
        </div>
        <div className="copyright"> {COPYRIGHT}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
    width: 100%;
    min-height: 20vh;
    box-shadow: rgb(9 30 66 / 25%) 0px -5px 10px 0px, rgb(9 30 66 / 8%) -4px -15px 12px 0px;

    // gradient Background
    background: black;
    background-image: linear-gradient(1deg, #000000 0%, #434343 74%);

    .text {
        line-height: 28px;
        .info-text {
            color: white;
            text-align: center;
        }
    }
    .copyright {
        color: white;
        letter-spacing: 1px;
        margin-bottom: 16px;
        font-size: 1rem;
    }
`

export default Footer