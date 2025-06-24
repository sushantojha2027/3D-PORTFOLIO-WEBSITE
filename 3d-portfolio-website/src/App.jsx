import styled, { ThemeProvider } from "styled-components"
import { darkTheme } from "./utils/Themes"
import NavBar from "./component/Navbar.jsx"
import { BrowserRouter } from "react-router-dom"
import Hero from "./component/section/hero.jsx";
import Skills from "./component/section/Skills.jsx";
import Experience from "./component/section/Experience.jsx"
import Education from "./component/section/Education.jsx";
import StartCanvas from "./component/canvas/Stars.jsx";
import Projects from "./component/section/Project.jsx";
import Contact from "./component/section/Contact.jsx";
import Footer from "./component/section/Footer.jsx";

const Body = styled.div`
background-color: ${({theme})=> theme.bg};
color:  ${({theme})=> theme.text_primary};
width:100%;
height: 90vh;
overflow-x: hidden;
position: relative;
`;
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
   return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
       <NavBar/>
       <Body>
        <StartCanvas />
        <div>
        <Hero />
        <Wrapper>
           <Skills />
        <Experience />
        </Wrapper>
        <Projects />
       <Wrapper>
          <Education />
          <Contact />
       </Wrapper>
      <Footer />
        </div>
       </Body>
      </BrowserRouter>
      
    </ThemeProvider>
  )
}

export default App
