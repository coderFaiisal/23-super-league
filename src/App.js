import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import { createContext, useState } from "react";
import ClubDetail from "./components/ClubDetail/ClubDetail";

export const ClubContext = createContext();

function App() {
  const [clubInfo, setClubInfo] = useState([]);
  return (
    <ClubContext.Provider value={[clubInfo, setClubInfo]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Router path="/contact">
            <Contact></Contact>
          </Router>
          <Router path="/club/:idTeam">
            <ClubDetail></ClubDetail>
          </Router>
          <Router path="*">
            <NotFound></NotFound>
          </Router>
        </Switch>
      </Router>
    </ClubContext.Provider>
  );
}

export default App;
