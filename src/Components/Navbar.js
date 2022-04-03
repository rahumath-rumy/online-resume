import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import '../css/main.css';

const Navbar = () => {
    return (
        <NavBar>
       
            <ul>
                <li><NavLink exact to= "/" className='nav' activeClassName='active-nav'> Home</NavLink></li>
                <li><NavLink exact to="/about"  className='nav'  activeClassName='active-nav'> About Us</NavLink></li> 
                <li><NavLink exact to="/contact" className='nav'  activeClassName='active-nav'>Contact</NavLink></li>
            </ul>

        </NavBar>
    )
}

const NavBar = styled.nav`
    min-height : 3vh;
    display: flex;
    align-items:center;
    padding: 50rem 50rem; 
    margin-left: 100px;
    font-family: 'Crimson Pro', san-serif;

    .nav {
      color:black;
      text-decoration:none;
      margin-top:1px;
      padding-right:1rem;
  }
  
  .nav:hover {
      text-decoration:none;
      color: #EE6C4D;
  }

  .active-nav {
    color: #ee6c4d;
  }

    ul {
        display: flex;
        list-style: none;
        text-decoration :none;
        padding : 0rem;
      }

      li {
        padding: 2rem;
        position: relative;
      }

      @media (max-width: 1300px) {
        flex-direction: column;
        padding: 0rem 0rem;
        
        ul {
          padding: 1rem ;
          justify-content: center;
          width: 100%;
          li {
            padding-right: 5rem;
            padding-top:0rem;
          }
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        padding: 0rem 0rem;
        
        ul {
          padding: 0rem ;
          justify-content: space-around;
          width: 70%;
          li {
            padding:0rem;
            text-align:center;
           
          }
        }
      }
    `;
    
    // const Line = styled(motion.div)`
    //   height: 0.3rem;
    //   background: #23d997;
    //   width: 0%;
    //   position: absolute;
    //   bottom: -80%;
    //   left: 60%;
    //   @media (max-width: 1300px) {
    //     left: 0%;
    //   }
    //`;
    
export default Navbar;