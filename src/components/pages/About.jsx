import styled from "styled-components";
import colors from "../colors";

const H2 = styled.h2`
    font-size: 2rem;
`

const P = styled.div`
    font-size: 1rem;
`
// TODO: Add an IMG to About Component and styles
function About() {
    return(
        <div>
            <H2>About Me</H2>
            <img></img>
            <P>A UCSD Bootcamp Student</P>
        </div>
    )
}

export default About;