import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import User from './components/User';
import Page404 from './components/Fatal404';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li id='sidebar'>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li id='sidebar'>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li id='sidebar'>
              <NavLink
                to="/users"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path="users" element={<Users />}>
          <Route path=':id' element={<User />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
