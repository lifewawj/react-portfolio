import styled from "styled-components";
import colors from "../colors";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const H3 = styled.h3`
    margin-top: 25px;
`

const Ul = styled.ul`
    margin-left: 25px;
    margin-top: 10px;
`

const DownloadContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

//TODO: A downloadable link to download my resume
function Resume() {
    return(
        <Wrapper>
            <h2>Resume</h2>
            <H3>Frontend Skills</H3>
            <Ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </Ul>
            <H3>Backend Skills</H3>
            <Ul>
                <li>APIs</li>
                <li>Express</li>
            </Ul>
            <DownloadContainer>
                <p>Click the Icon to Download my Resume</p>
                <a href="/src/assets/example-resume.pdf">
                    <img src="/src/assets/download-icon.png"/>
                </a>
            </DownloadContainer>
        </Wrapper>
    );
}

export default Resume;