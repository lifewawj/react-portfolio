import styled from "styled-components";
import colors from "../colors";
import ProjectImage from "../../assets/placeholder-project-img.svg"

const Wrapper = styled.div`

`

const H3 = styled.div`
  margin-bottom: 10px;
`

function Projects() {
  return (
    <Wrapper>
      <H3>Project 1</H3>
      <a href="">
      <img src={ProjectImage} alt="500x500" />
      </a>
    </Wrapper>
  );
}

export default Projects;
