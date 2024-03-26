import "./App.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

const Wrapper = styled.div`
    margin: 25px;
`

function App() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <Wrapper>
        <Outlet></Outlet>
      </Wrapper>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
