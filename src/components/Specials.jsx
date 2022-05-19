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
    // min-height: 200vh;
    width: 100%;

    .section-header{
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
        flex-direction: column;
        flex-basis: 50%;
        margin-left: 20em;
        margin-right: 20em;
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

        .italics{

        }
    }
    .pics{ 
        display: flex;
        align-self: center;

        LegumesImageList, AppitizersImageList, MeatsImageList, MiscImageList {

        }
    }

    .first {
        // background: gray;
        .odd {
            display: flex;
            flex-direction: row;
            .pics {                
                // background: teal;


            }
            .details {
                // background: lightblue;

            }
            
        }
        .even { 
            display: flex;
            flex-direction: row-reverse;
            .pics {
                // background: teal;

            }
            .details {
                // background: lightblue;

            }
        }
    }

    .second {
       // background: lightgray;
       .odd {
        display: flex;
        flex-direction: row;
        .pics {
            // background: red;

        }
        .details {
            // background: crimson;

        }
        
    }
    .even { 
        display: flex;
        flex-direction: row-reverse;
        .pics {
            // background: red;

        }
        .details {
            // background: crimson;

        }
    }

    
`

export default Specials