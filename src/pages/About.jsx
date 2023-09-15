import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ADDRESS_FIRST_LINE, ADDRESS_SECOND_LINE, COPYRIGHT, CUSTOMER_SERVICE_AIM } from '../shared/constants';

function About( properties) {
  const simulateScrollHeight = -1;
  
  const handleSubmit = () =>{
    console.log("Simulate Form Submission");
  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   const { name, email, message } = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   let response = await fetch("", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   setStatus("Submit");
  //   let result = await response.json();
  //   alert(result.status);
  // };

  useEffect(() => {
    properties.parentCallback(simulateScrollHeight);
  });
  return (
    <Wrapper className='wrapper-about'>
      <div className="customer-service">
        <div className="header">What Makes Us Unique?</div>
        <div className="text">{CUSTOMER_SERVICE_AIM}</div>
      </div>
      {/* <div className="customer-testimonials">
        <div className="header">Customer Feedback</div>
      </div> */}
      <div className="info">
        <div className="header">Get In Touch!</div>
        <div className="contact-info">
          <div className="address">
            <div className="title">Address</div>
            <div className="content">
              <div>{ADDRESS_FIRST_LINE}</div>
              <div>{ADDRESS_SECOND_LINE}</div>
            </div>
          </div>
          <div className="num">
            <div className="title">Contact</div>
            <div className="content">555-555-5555</div>
          </div>
          <div className="hours">
            <div className="title">Hours</div>
            <div className="content">
              <div>Mon-Th: 11: 30 am - 9: 00 pm</div>
              <div>Fri-Sat: 11: 30 am - 10:00 pm</div>
              <div>Sun: 11:30 am- 7: 00 pm</div>
            </div>
          </div>
        </div>
        <div className="more-info">DINE IN-TAKE OUT, CATERING, FREE DELIVERY, AND MORE</div>
      </div>
      <div className="contact-form">
        <div className="header">Drop Us A Message</div>
        
        <div className="copyright"> {COPYRIGHT}</div>       
      </div>
      {/* <Footer className='footer' /> */}
    </Wrapper>
  )
}

// CSS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-image: url(${process.env.PUBLIC_URL + '/assets/wood-background.png'});
  background-repeat: no-repeat;  
  background-size: cover;
  overflow-y: auto;
  overflow-x: hidden;

  .customer-service {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: white;
    padding: 8em;
    opacity: .7;
    .header {
      margin-bottom: 48px;
      font-size: 3rem;
      text-align: center;
    }
    .text {
      font-size: 1.5rem;
      padding-left: 8em;
      padding-right: 8em;
      text-align: center;

    }
    
  }
  .customer-testimonials {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header {
      margin-top: 4em;
      margin-bottom: 8em;
      font-size: 3rem;
    }

  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: hsla(210, 31%, 61%, 1);
    background: linear-gradient(180deg, hsl(30deg 130% 92%) -4%, hsl(228deg 34% 52%) 95%);
    padding-left: 8em;
    padding-right: 8em;
    padding-top: 4em;
    padding-bottom: 4em;
    
    .header {
      font-size: 3rem;
      margin-bottom: 1em;
    }
    
    .contact-info {
      display: flex; 
      flex-direction: row;
      justify-content: space-between;
      width: 70%;
      
      .address, .num, .hours {
        display:flex;
        flex-direction: column;
        .title {
          font-weight: bold;
          margin-bottom: 8px;
          font-size: 1.3rem;
        }
        .content {
          display: flex;
          flex-direction: column;
          line-height: 24px;
          font-size: 1.1rem;
        }
      }
    }

    .more-info {
      align-self: center;
      margin-top: 2em;
      font-size: 1.2rem;
    }


  }
  .contact-form {
    display: flex;
    width: 100%;
    background: #0a1524;
    background: linear-gradient(180deg, hsl(228deg 33% 53%) -3%, hsl(228deg 15% 10%) 70%);
    color: white;
    flex-direction: column;
    align-items: center;
    padding-top: 4em;
    padding-bottom: 4em;

    .header {
      font-size: 3rem;
      padding-bottom: 1em;
    }

    form {
      width: 40%;
      div {
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;

        input {
          line-height: 32px;
          border-radius: 8px;
          text-indent: 4px;
          font-size: 1.2rem;
        }
        textarea {
          border-radius: 8px;
          height: 100px;
          text-indent: 4px;
          font-size: 1.2rem;
        }
      }
    }
    button {
      background-image: linear-gradient(#42A1EC, #0070C9);
      border: 1px solid #0077CC;
      border-radius: 4px;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      direction: ltr;
      display: block;
      font-family: "SF Pro Text","SF Pro Icons","AOS Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
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
  }


  .copyright {
    color: white;
    letter-spacing: 1px;
    margin-top: 32px;
    margin-bottom: 16px;
    font-size: 1rem;
}

  @media only screen and (max-width: 767px) and (orientation: portrait) {
    .customer-service {
      padding: 1.2em;
      .header {
        font-size: 2rem;
      }
      .text{
        font-size: 1.2rem;
        padding-left: 2em;
        padding-right: 2em;
      }
    }

    .info {
      padding: 1em;
      .header {
        font-size: 2rem;
      }
      .contact-info {
        flex-direction: column;
        margin-bottom: 16px;
        width: 80%;
        align-items: self-start;

        .address, .num, .hours {
          margin-bottom: 24px;
        }
        
      }


      .more-info {
        font-size: .8rem;
        margin-bottom: 8px;
      }
    }

    .contact-form {
      padding-top: 2em;
      .header {
        font-size: 2rem;
      }

      form {
        width:80%;
      }
    }

  }
  @media only screen and (max-width: 767px) and (orientation: landscape) {
    .customer-service {
      padding: 1.2em;
      .header {
        font-size: 2rem;
      }
      .text{
        font-size: 1.2rem;
        padding-left: 2em;
        padding-right: 2em;
      }
    }
  
  

  
  .info {
    padding: 1em;
    // height: 130vh;
    .header {
      font-size: 2rem;
    }
    .contact-info {
      flex-direction: column;
      margin-bottom: 16px;
      width: 80%;
      align-items: self-start;

      .address, .num, .hours {
        margin-bottom: 24px;
      }
      
    }


    .more-info {
      font-size: .8rem;
      margin-bottom: 8px;
    }
  }

  .contact-form {
    // height: 165vh;
    padding-top: 2em;
    .header {
      font-size: 2rem;
    }

    form {
      width:80%;
    }
  }
}


@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .customer-service {
    .text{
      padding-left: 5em;
      padding-right: 5em;
    }
  }
  .info {
    padding-left: 1em; 
    padding-right: 1em;
    .contact-info {
      width: 80%;
    }
  }

  .contact-form {
    form {
      width: 80%;
    }
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .customer-service {
    .text{
      padding-left: 5em;
      padding-right: 5em;
    }
  }
  .info {
    padding-left: 1em; 
    padding-right: 1em;
    // height: 80vh;
    .contact-info {
      width: 80%;
    }
  }

  .contact-form {
    // height: 165vh;
    form {
      width: 80%;
    }
  }
}
@media only screen and (min-width: 1025px) and (max-width: 1200px) and (orientation: landscape) {

  .info {
    padding-left: 1em; 
    padding-right: 1em;
    // height: 80vh;
    .contact-info {
      width: 80%;
    }
  }

  .contact-form {
    // height: 165vh;
    form {
      width: 80%;
    }
  }
}
`

export default About