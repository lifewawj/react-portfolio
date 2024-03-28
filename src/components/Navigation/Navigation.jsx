import styled from "styled-components";
import colors from "../colors";
import { Link } from "react-router-dom";

const Button = styled.button`
  color: ${colors.textColor};
  background-color: transparent;
  border: none;
  borner-radius: 50px;
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
      <Link to="/">
        <Button>About</Button>
      </Link>

      <Link to="/portfolio">
        <Button>Portfolio</Button>
      </Link>

      <Link to="/contact">
        <Button>Contact</Button>
      </Link>

      <Link to="/resume">
        <Button>Resume</Button>
      </Link>
    </>
  );
}

export default Navigation;
