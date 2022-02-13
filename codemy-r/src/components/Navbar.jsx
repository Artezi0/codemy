// Import dependencies
import React from 'react'
import styled from 'styled-components'
import { AiOutlineGithub,
         AiOutlineInstagram,
         AiOutlineTwitter } from 'react-icons/ai'

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
      align-items: center;
      margin-left: 50px;

      li {
        position: relative;

        &::after {
          left: 0;
          width: 0;
          bottom: 0;
          content: '';
          height: 1.2px;
          position: absolute;
          background-color: black;
          transition: .3s ease-in-out;
        }

        &:hover::after {  
          width: 100%;
        }

        a {
          font-family: 'PP Neue Montreal';
        }
      }
    }
  }

  .nav__socials {
    height: 100%;
    display: flex;
    position: relative;

    &-icons {
      gap: 10px;
      display: flex;
      align-items: center;
      
      li {
        font-size: 20px;
        transition: .3s;
        &:hover {
            color: #D5FC31;
        }
      }
    }
  }
}
`

// Navbar elements
function Navbar() {
  return (
    <Nav>
      <div className="nav__items">
        <div className="nav__right">
          <div className="nav__right-logo">Codemy™</div>
          <ul className="nav__right-links">
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Courses</a></li>
          </ul>
        </div>
        <div className="nav__socials">
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