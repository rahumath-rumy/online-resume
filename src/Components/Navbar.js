import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    return (
        <NavBar>
            <ul>
                <li><a href="" style={{color: "#EE6C4D"}} > Home</a></li>
                <li><a href=""> About Us</a></li>
                <li><a href="">Contact</a></li>
            </ul>

        </NavBar>
    )
}

const NavBar = styled.nav`
    min-height : 3vh;
    display: flex;
    align-items:center;
    padding: 10rem 10rem; 
    font-family: 'Crimson Pro', san-serif;
    a {
        color:black;
        text-decoration:none;
        margin-top:1px;
        padding-right:1rem;
    }
    
    a:hover {
        text-decoration:none;
        color: #EE6C4D;
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