import styled from 'styled-components';

const Nav = styled.nav`

`

function NavBar() {
  return (
    <nav>
      <div>
        <h1>lifewawj</h1>
      </div>
      <div>
        <ul>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Resume</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;