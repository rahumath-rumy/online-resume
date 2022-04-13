import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import '../css/main.css';

const Navbar = () => {
    return (
        <NavBar>
            <ul>
                <li><NavLink exact to= "/" className='nav' activeClassName='active-nav'> Home</NavLink></li>
                <li><NavLink exact to="/about"  className='nav'  activeClassName='active-nav'> About Me</NavLink></li> 
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
      font-size: 20px;
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

       ul {position: relative;}
 li {
    
    right: 0;
    top: 0;
  }
        flex-direction: column;
        padding: 0rem 0rem;
        
        ul {
          padding: 0rem ;
          justify-content: space-around;
          width: 70%;
          position:relative;
          li {
            padding:0rem;
            text-align:center;
           
          }
        }
      }

      @media (max-width: 640px)  {
        max-width:80%;
        flex-direction: column;
        padding: 0rem 0rem;
        fontSize:10px;
        
        ul {
          padding:10px ;
          justify-content: space-around;
          
          li {
            padding-right:10px;
            text-align:center;
           
          }
        }
      }

      @media (max-width: 420px) {
        flex-direction: column;
        padding: 0rem 0rem;
        fontSize:10px;
        
        ul {
          padding:0rem ;
          justify-content: space-around;
          
          li {
            padding-right:1rem;
            text-align:center;
           
          }
        }
      }
      
    `;
    
    
export default Navbar;