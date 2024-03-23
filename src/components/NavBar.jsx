import styled from "styled-components";

const Header = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 25px;
  background-color: #252526;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem
`;

const H1 = styled.nav`
    color: white;
    font-size: 2rem;
    cursor: pointer;
`;

const A = styled.a`
    color: white;
    text-decoration: none;
`

function NavBar() {
  return (
    <Header>
      <H1>lifewawj</H1>
      <NavLinks>
        <A href="">About</A>
        <A href="">Portfolio</A>
        <A href="">Contact</A>
        <A href="">Resume</A>
      </NavLinks>
    </Header>
  );
}

export default NavBar;
