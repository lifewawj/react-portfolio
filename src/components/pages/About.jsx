import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
`;

const H2 = styled.h2`
  /* Add your styles for the header here */
  text-align: left;
  font-size: 24px;
  color: #333;
  text-decoration: underline;
`;

const P = styled.p`
  /* Add your styles for the paragraph here */
  text-align: left;
  font-size: 16px;
  color: #666;
`;

function About() {
  return (
    <Div>
      <H2>ABOUT ME</H2>
      <P>A UCSD Bootcamp Student!</P>
    </Div>
  );
}

export default About;
