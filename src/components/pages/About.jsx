import styled from "styled-components";
import colors from "../colors";

const Wrapper = styled.div`
    margin: 25px;
`

const H1 = styled.div`
    font-size: 2rem;
`

const P = styled.div`
    margin-top: 25px;
    font-size: 1rem;
`

function About() {
    return(
        <Wrapper>
            <H1>About Me</H1>
            <P>A UCSD Bootcamp Student</P>
        </Wrapper>
    )
}

export default About;