import styled from "styled-components";
import colors from "../colors";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const H2 = styled.h2`
    font-size: 2rem;
`

const P = styled.div`
    font-size: 1rem;
`
// TODO: Add an IMG to About Component and styles
function About() {
    return(
        <Wrapper>
            <H2>About Me</H2>
            <img></img>
            <P>A Filipino-American that was born and raised in Kodiak, Alaska for most of his life. Until After High-school graduation, he than moved California to explore the new opportunities the world has to offer.</P>
        </Wrapper>
    )
}

export default About;