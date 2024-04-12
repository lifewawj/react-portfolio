import styled from "styled-components";
import colors from "../colors";
import Projects from "../Projects/projects"

const H2 = styled.h2`
  margin-bottom: 25px;
`

//TODO: Add styles to Portfolio component, and Create a portfolio container
function Portfolio() {
  return (
    <div>
      <H2>Portfolio</H2>
      <Projects></Projects>
    </div>
  );
}

export default Portfolio;