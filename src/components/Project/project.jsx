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

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function Project() {
  return (
    <div>
      <h3>Note-Taker</h3>

      <BtnContainer>
        <Button
          onClick={() =>
            (window.location.href =
              "https://github.com/lifewawj/my-portfolio")
          }
        >
          GitHub
        </Button>
      </BtnContainer>
    </div>
  );
}

export default Project;
