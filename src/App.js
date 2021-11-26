import { Router, Switch, Route, NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";

import "./App.css";
import Book from "./pages/Book";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import Topic1 from "./pages/Topic1";
import Topic2 from "./pages/Topic2";
import Search from "./pages/Search";
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <header>
        <p id="titleGroup">LEARN</p>
      </header>

      <Switch>
        <Route  path="/" exact component = {Book} />
        <Route path="/book" exact component = {Book} />
        <Route path="/book/search" component ={Search} />
        <Route path="/profile" component ={Profile} />
        <Route path="/topic/topic1" component ={Topic1} />
        <Route path="/topic/topic2" component ={Topic2} />
        <Route path="/book/:id" component ={Detail} />
      </Switch>

      <footer>
        <NavLink to="/book" className="iconWrapper">
          <HiHome className="icon" />
          Book
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </NavLink>
      </footer>
    </Router>
  );
}

export default App;
