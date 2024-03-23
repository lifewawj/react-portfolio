import styled from "styled-components";
import colors from "./colors";

// Imported the Images needed
import githubLogo from "../assets/white-github.png";
import linkedInLogo from "../assets/white-linkedin.png";
import stackOverflow from "../assets/white-stack-overflow.png";

const Footing = styled.footer`
  cursor: pointer;

  padding: 25px;
  background-color: ${colors.background};


  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`

const IMG = styled.img`
    height: 25px;
    width: 25px;
`

function Footer() {
  return (
    <Footing>
      <IMG src={githubLogo} alt="GitHub Logo" />
      <IMG src={linkedInLogo} alt="LinkedIn Logo" />
      <IMG src={stackOverflow} alt="Stacked Overflow Logo" />
    </Footing>
  );
}

export default Footer;
