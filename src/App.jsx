import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Content from "./components/Content/content.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <Content></Content>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
