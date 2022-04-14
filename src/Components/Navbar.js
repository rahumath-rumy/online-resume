import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import '../css/main.css';

const Navbar = () => {
    return (
      <div id="page">
        <NavBar>
            <ul>
                <li><NavLink exact to= "/" className='nav' activeClassName='active-nav'> Home</NavLink></li>
                <li><NavLink exact to="/about"  className='nav'  activeClassName='active-nav'> About Me</NavLink></li> 
                <li><NavLink exact to="/contact" className='nav'  activeClassName='active-nav'>Contact</NavLink></li>
            </ul>
        </NavBar>
        </div>
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
      padding-right:3rem;
      font-size: 20px;
      top:0px;
      left:0px;
      width:100%
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
            padding-right: 2rem;
            padding-top:0rem;
          }
        }
      }

      @media (max-width: 768px) {

       ul {
        position: absolute;
        display: block;
      }
      
      li {
        right: 0;
        top: 0;
        padding-left:10px;
      }
    }
      

      @media (max-width: 640px)  {
        max-width:80%;
        flex-direction: column;
        fontSize:6px;
        
        ul {
          padding-left:10px ;
          display:block;
          padding-top:0px;
          margin-left:-50px;
         
          
          li {
            padding-right:0px;
            text-align:left;
            margin-top:-17px;
          }
        }
      }

      @media (max-width: 420px) {
        flex-direction: column;
        padding: 0rem 0rem;
        
        ul {
          padding-left:10px ;
          display:block;
          padding-top:0px;

          li {
            padding-right:1rem;
            text-align:left;
            fontSize:06px;
           
          }
        }
      }
      
    `;
    
    
export default Navbar;