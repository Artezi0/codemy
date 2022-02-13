// Import dependencies
import React from 'react'
import styled from 'styled-components'
import { AiOutlineGithub,
         AiOutlineInstagram,
         AiOutlineTwitter, 
         AiOutlineClose } from 'react-icons/ai'

// Styled components
const Nav = styled.div`

width: 100%;
z-index: 800;
height: 80px;
position: fixed;

.nav__items {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 8%;
  user-select: none;
  justify-content: space-between;

  .nav__right {
    height: 100%;
    display: flex;
    position: relative;

    &-logo {
      display: flex;
      font-size: 24px;
      font-weight: 600;
      align-items: center;
      font-family: 'PP Neue Montreal';
    }
    
    &-links {
      gap: 30px;
      display: flex;
      font-size: 16px;
      margin-left: 50px;
      align-items: center;
      
      li {
        position: relative;
        a { font-family: 'PP Neue Montreal'; }

        &::after {
          left: 0;
          width: 0;
          bottom: 0;
          content: '';
          height: 1.2px;
          position: absolute;
          background-color: black;
        }
        
        &:hover::after {  
          width: 100%;
          transition: .3s ease-in-out;
        }
      }

      .icons,
      .watermark,
      .nav__right-links-btn {
        display: none;
      }
    }
  }

  .nav__socials {
    height: 100%;
    display: flex;
    position: relative;
    
    &-btn {
      height: 100%;
      display: flex;
      visibility: hidden;
      align-items: center;

      button {
        font-size: 15px;
        padding: 5px 18px;
        border-radius: 100px;
        border: 1px solid black;
        font-family: 'PP Neue Montreal';
      }
    }

    &-icons {
      gap: 10px;
      display: flex;
      align-items: center;
      
      li {
        font-size: 20px;
        transition: .3s;
        &:hover { color: #D5FC31; }
      }
    }
  }
}

/* Media query */
@media screen and (max-width: 1024px) { /* No changes */ }
@media screen and (max-width: 768px) { /* No changes */ }
@media screen and (max-width: 425px) { 
  .nav__items {
    .nav__right {
      .nav__right-logo {
        font-size: 18px;
      }
      .nav__right-links {
        top: -100vh;
        width: 100%;
        left: -11.8%;
        height: 100%;
        z-index: 900;
        display: block;
        position: fixed;
        transition: .5s ease-in-out;
        background-color: #D5FC31;

        li {
          font-size: 4em;
          line-height: 85%;
          text-align: center;
        }
        
        .nav__right-links-btn {
          width: 100%;
          display: flex;
          font-size: 30px;
          margin-top: 50%;
          justify-content: center;
        }

        .icons, .watermark { display: block; }
        .icons {
          gap: 10px;
          width: 100%;
          height: 40px;
          display: flex;
          margin-top: 180px;
          align-items: flex-end;
          justify-content: center;

          li { font-size: 25px; }
        }

        .watermark {
          text-align: center;
          font-family: 'PP Neue Montreal';
        }
      }

      .nav__right-links.active {
        top: 0;
      }
    }
  }  

  .nav__socials {
    .nav__socials-btn {
      visibility: visible;
    }
    
    .nav__socials-icons {
      display: none;
    }
  }
}
@media screen and (max-width: 375px) {
  .nav__items {
    .nav__right {
      .nav__right-links {
        left: -13.4%;
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .nav__items {
    .nav__right {
      .nav__right-links {
        left: -15.5%;
        top: -110vh;
      }
    }
  }
}
`

// Functions
// Variables
const submenu = document.getElementById("submenu")
function showMenu() {
  submenu.classList.add('active')
}
function closeMenu() {
  submenu.classList.remove('active')
}

// Navbar elements
function Navbar() {
  return (
    <Nav>
      <div className="nav__items">
        <div className="nav__right">
          <div className="nav__right-logo">Codemy™</div>
          <ul className="nav__right-links" id='submenu'>
              <button className="nav__right-links-btn"
                      onClick={closeMenu}><AiOutlineClose/></button>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Courses</a></li>

              <ul className="icons">
                <li><a href="https://twitter.com"><AiOutlineTwitter/></a></li>
                <li><a href="https://instagram.com"><AiOutlineInstagram/></a></li>
                <li><a href="https://github.com"><AiOutlineGithub/></a></li>
              </ul>

              <p className="watermark">2022 Codemy Prototype. <br />
                                       Made by Artezio</p>
          </ul>
        </div>
        <div className="nav__socials">
          <div className='nav__socials-btn'>
            <button onClick={showMenu}>Menu</button>
          </div>
          <ul className="nav__socials-icons">
              <li><a href="https://twitter.com"><AiOutlineTwitter/></a></li>
              <li><a href="https://instagram.com"><AiOutlineInstagram/></a></li>
              <li><a href="https://github.com"><AiOutlineGithub/></a></li>
          </ul>
        </div>
      </div>
    </Nav>
  )
}

export default Navbar