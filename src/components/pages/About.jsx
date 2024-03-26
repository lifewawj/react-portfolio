import styled from "styled-components";
import colors from "../colors";

const H2 = styled.h2`
    font-size: 2rem;
`

const P = styled.div`
    margin-top: 25px;
    font-size: 1rem;
`

function About() {
    return(
        <div>
            <H2>About Me</H2>
            <P>A UCSD Bootcamp Student</P>
        </div>
    )
}

export default About;