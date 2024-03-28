import styled from "styled-components";
import colors from "../colors";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
`;

const Span = styled.span`
    font-size: 4rem;
`;

const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
`

function Project() {
  return (
    <Wrapper>
      <h3>Note-Taker</h3>
      <Span>🗒️✍️</Span>
      <BtnContainer>
      <Button
        onClick={() =>
          (window.location.href =
            "https://github.com/lifewawj/note-taker?tab=readme-ov-file")
        }
      >
        GitHub
      </Button>
      <Button
        onClick={() =>
          (window.location.href =
            "https://ucsd-ajs-note-taker-6c105c85e30a.herokuapp.com/")
        }
      >
        Deployed App
      </Button>
      </BtnContainer>
    </Wrapper>
  );
}

export default Project;
