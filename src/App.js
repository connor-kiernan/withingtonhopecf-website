import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './master/Header.jsx'
import {Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import Footer from "./master/Footer";

const App = () => {
  return (
      <>
        <Header/>
        <Container>
          <Container className="flex-grow-1 d-flex flex-column justify-content-center">
            <main className="mt-4">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                {/*<Route path="players" element={<Players/>}/>*/}
                {/*<Route path="fixtures" element={<Fixtures/>}/>*/}
                <Route path="contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound />}/>
              </Routes>
            </main>
          </Container>
          <Footer />
        </Container>
      </>
  )
};

export default App;