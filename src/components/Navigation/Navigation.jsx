import styled from "styled-components";
import colors from "../colors";
import { NavLink } from "react-router-dom";

const Button = styled.button`
  color: ${colors.textColor};
  background-color: transparent;
  border: none;
  border-radius: 50px;
  padding: 0;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: ${colors.hoverTextColor};
  }
`;


function Navigation() {
  return (
    <>
      <NavLink to="/">
        <Button>About</Button>
      </NavLink>

      <NavLink to="/portfolio">
        <Button>Portfolio</Button>
      </NavLink>

      <NavLink to="/contact">
        <Button>Contact</Button>
      </NavLink>

      <NavLink to="/resume">
        <Button>Resume</Button>
      </NavLink>
    </>
  );
}


export default Navigation;
