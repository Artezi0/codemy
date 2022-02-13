// Import dependencies
import React from 'react'
import img from './img/mozaic.svg'
import styled from 'styled-components'
import { GrFormClose } from 'react-icons/gr'

const HeroText = styled.section`

width: 100%;
height: 100vh;
position: relative;

.hero__items {
    width: 100%;
    height: 100%;
    padding: 0 8%;
    
    &-left {
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;

        h1 {
            font-size: 110px;
            font-weight: 400;
            margin-right: 4em;
            line-height: 85%;
            font-family: 'Space Grotesk';
        }

        p {
            font-size: 20px;
            padding: 20px 0;
            margin-right: 28em;
            font-family: 'PP Neue Montreal';
        }

        img {
            top: 20%;
            right: 0;
            width: 35%;
            position: absolute;
        }

        .hero__cta {
            button {
                font-size: 20px;
                border-radius: 100px;
                font-family: 'PP Neue Montreal';
            }

            .signup {
                transition: .3s;
                padding: 10px 50px;
                background-color: #D5FC31;
                
                &:hover {
                    color: white;
                    background-color: black;
                }
            }

            .signin {
                transition: .3s;
                margin-left: 20px;
                padding: 10px 25px;
                border: 1px solid black;
               
                &:hover {
                    color: white;
                    background-color: black;
                }
            }
        }
    }
}

.hero__popup {
    bottom: 0;
    width: 100%;
    height: 70px;
    position: fixed;
    background-color: #D5FC31;
    
    .hero__popup-items {
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
        justify-content: center;

        p {
            height: 100%;
            display: flex;
            align-items: center;
            font-family: 'PP Neue Montreal';
        }

        button {
            font-size: 25px;
            padding-top: 6px;
        }
    }
}
`
// Functions
function hide() {
    let popup = document.getElementById('popup')
    popup.style = "display: none;"
}

// Hero elements
function Hero() {
  return (
    <HeroText>
      <div className="hero__items">
        <div className="hero__items-left">
          <h1>Learn Code Never Been So Fast</h1>
          <p>Create a successful and fulfilling career as an expert programmer.
             We'll teach you the in-demand skills you need to get there.</p>
          <ul className="hero__cta">
            <button className='signup'>Sign Up</button>
            <button className='signin'>Sign In</button>
          </ul> 
          <img src={img} alt="mozaic" />
        </div>
      </div>

      {/* Popup banner */}
      <div className="hero__popup" id='popup'>
        <div className="hero__popup-items">
          <p>A whole new year discount, get 80% on all courses. 
             You can cancel it anytime you want 🌏</p>
          <button><GrFormClose onClick={hide}/></button>
        </div>
      </div>
    </HeroText>
  )
}

export default Hero