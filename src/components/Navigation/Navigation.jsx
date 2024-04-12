import styled from "styled-components";
import colors from "../colors";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

// const Button = styled.button`
//   color: ${colors.textColor};
//   background-color: transparent;
//   border: none;
//   border-radius: 50px;
//   padding: 0;
//   cursor: pointer;
//   font-size: 1rem;

//   &:hover {
//     color: ${colors.hoverTextColor};
//   }
// `;

function Navigation() {
  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : "white",
            textDecoration: isActive ? "underline" : "none"
          };
        }}
      >
        About
      </NavLink>

      <NavLink
        to="/portfolio"
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : "white",
            textDecoration: isActive ? "underline" : "none"
          };
        }}
      >
        Portfolio
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : "white",
            textDecoration: isActive ? "underline" : "none"
          };
        }}
      >
        Contact
      </NavLink>

      <NavLink
        to="/resume"
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : "white",
            textDecoration: isActive ? "underline" : "none"
          };
        }}
      >
        Resume
      </NavLink>
    </>
  );
}

export default Navigation;
