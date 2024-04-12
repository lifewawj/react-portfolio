import styled from "styled-components";
import colors from "../colors";

// TODO: 
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const H3 = styled.h3`
    margin-top: 15px
`

const MsgInput = styled.input`
    padding: 10rem;
`

const Input = styled.input`
    padding: 10px;
`

const Button = styled.button`
    margin-top: 15px;
    padding: 10px;

    cursor: pointer;

    &:hover {
        color: white;
    }
`
function Contact() {
    return(
        <Wrapper>
            <h2>Contact me</h2>

            <H3>Name:</H3>
            <Input></Input>

            <H3>Email Address:</H3>
            <Input></Input>

            <H3>Message:</H3>
            <MsgInput></MsgInput>

            <Button>
                Submit
            </Button>
        </Wrapper>
    )
}

export default Contact;