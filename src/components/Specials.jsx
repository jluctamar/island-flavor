import React from 'react';
import styled from 'styled-components';
import LegumesImageList from './LegumesImageList';
import {specialties} from '../shared/menuData.js';
import AppitizersImageList from './AppitizersImageList';
import MeatsImageList from './MeatsImageList';
import MiscImageList from './MiscImageList';
import { Slide } from "react-awesome-reveal";

function Specials() {
    let legArr = [];
    let meatArr = [];
    let appArr = [];
    let miscArr = [];
    Object.entries(specialties.legumes).forEach((entry) => {
        legArr.push(entry);
      });
    Object.entries(specialties.meats).forEach((entry) => {
        meatArr.push(entry);
      });
    Object.entries(specialties.appitizers).forEach((entry) => {
        appArr.push(entry);
      });
    Object.entries(specialties.salads).forEach((entry) => {
        miscArr.push(entry);
      });
 
    Object.entries(specialties.beverages).forEach((entry) => {
        miscArr.push(entry);
      });
 
    Object.entries(specialties.desserts).forEach((entry) => {
        miscArr.push(entry);
      });



  return (
    <Wrapper className='wrapper-specials'>
        <div  className='section-header'>Our Specialties</div>
        <div className="first"> 
            <div className="odd">
                <div className="pics">
                    <Slide direction="right">
                        <AppitizersImageList />
                    </Slide>
                </div>
                <div className="details">
                    {appArr.map(elem => <span>{elem[1]} ({elem[0]})</span> )}
                </div> 
            </div>
            <div className="even">
                    <div className="pics">
                        <Slide direction='left'>             
                            <LegumesImageList />
                        </Slide>  
                    </div>
                    <div className="details">
                        {legArr.map(elem => <span>{elem[1]} ({elem[0]})</span> )}
                    </div>       
            </div> 
        </div>
        
        <div className="second">
            <div className="odd">
                <div className="pics">
                    <Slide direction='right'>
                        <MeatsImageList />
                    </Slide>
                </div>
                <div className="details">
                    {meatArr.map(elem => <span>{elem[1]} ({elem[0]})</span> )}
                </div> 
            </div>
            <div className="even">
                <div className="pics">
                    <Slide direction='left'>
                        <MiscImageList />
                    </Slide>

                </div>
                <div className="details">
                    {miscArr.map(elem => <span>{elem[1]} ({elem[0]})</span> )}
                </div> 
            </div> 
        </div>

        
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .section-header {
        text-align: center;
        font-size: 5rem;
        font-weight: bold;
        text-decoration: underline;
        margin: 28px;
    }

    .first, .second {
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
    }


    .odd, .even {
        display: flex;
        flex-basis: 50%;
        margin-left: 20em;
        margin-right: 20em;
    }
    .odd {
        flex-direction: row;
    }
    .even { 
        flex-direction: row-reverse;
    }


    .pics, .details {
        display: flex;
        flex-basis: 50%;
        padding: 16px;

    }
    .details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2em;
        text-align: center;
        line-height: 40px;
        font-size: 1.3rem;
        color: var(--text-color-secondary);
        text-shadow: white 0px 0px 1px, black 0px 0px 1px, white 0px 0px 1px;
        backdrop-filter: blur(3px);
        background: rgba(255,255,255,0.2);
        box-shadow: rgb(0 0 0 / 15%) 0px 2px 8px;
        border-radius: 8px;
    }
    .pics{ 
        display: flex;
        align-self: center;
    }




    @media only screen and (max-width: 767px) {
        .section-header {
            font-size: 2.5rem;
        }
        .odd, .even {
            margin-left: 1em;
            margin-right: 1em;
            flex-direction: column-reverse;
        }
        .details {
            margin: 1em;
            font-size: 1em;
        }
    }    
    
    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
        .odd, .even {
            flex-direction: column-reverse;
            margin-left: 10em;
            margin-right: 10em;
        }
    } 

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        .odd, .even {
            margin-left: 5em;
            margin-right: 5em;
        }
    } 


    @media only screen and (min-width: 1025px) and (max-width: 1200px) and (orientation: landscape) {
        .odd, .even {
            margin-left: 10em;
            margin-right: 10em;
        }
    } 

    
`

export default Specials