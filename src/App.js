import "./App.css";
import "./Matches.css"
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import Players from "./views/Players";
import Layout from "./master/Layout";
import PreFetchEvents from "./components/PreFetchEvents";
import PreFetchConfig from "./components/PreFetchConfig";
import PreFetchPlayers from "./components/PreFetchPlayers";
import MatchesNavContainer from "./components/fixtures/MatchesNavContainer";
import FixtureContainer from "./components/fixtures/FixtureContainer";
import ResultsContainer from "./components/fixtures/ResultsContainer";

const App = () =>
    <Routes>
      <Route element={<Layout/>}>
        <Route element={<PreFetchConfig />}>
          <Route element={<PreFetchEvents/>}>
            <Route path="/" element={<Home/>}/>
            <Route index element={<Home/>}/>
            <Route path="matches" element={<MatchesNavContainer/>}>
              <Route index element={<Navigate to="fixtures"/>}/>
              <Route path="fixtures" element={<FixtureContainer />} />
              <Route path="results" element={<ResultsContainer />} />
            </Route>
          </Route>
          <Route element={<PreFetchPlayers />}>
            <Route path="players" element={<Players/>}/>
          </Route>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Route>
    </Routes>
;

export default App;