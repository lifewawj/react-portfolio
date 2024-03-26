import styled from "styled-components";
import colors from "../colors";
import Navigation from "../Navigation/Navigation";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px;
  background-color: ${colors.background};
  width: auto;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const H1 = styled.h1`
  color: ${colors.textColor};
  font-size: 2rem;
  cursor: pointer;
`;

function Header() {
  return (
    <Wrapper>
      <H1>lifewawj</H1>
      <NavLinks>
        <Navigation></Navigation>
      </NavLinks>
    </Wrapper>
  );
}

export default Header;
