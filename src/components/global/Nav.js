import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "../../styles/commonStyles/nav.css";
import logo from "../../styles/imgs/logo.png";
import Home from "../Home";
import Work from "../Work";
import Contact from "../Contact";
import Archive from "../Archive";
import Careers from "../Careers";
import Culture from "../Culture";
import { useEffect } from "react/cjs/react.development";
function Nav() {
  const open = () => {
    document.querySelector(".mobile-nav-icon").addEventListener("click", () => {
      document.querySelector(".mobile-nav").classList.add("show");
    });
  };
  const close = () => {
    document.querySelector(".mobile-nav-exit").addEventListener("click", () => {
      document.querySelector(".mobile-nav").classList.remove("show");
    });
    document.querySelectorAll(".mobile-links a").forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".mobile-nav").classList.remove("show");
      });
    });
  };
  useEffect(() => {
    open();
    close();
  }, []);
  return (
    <div>
      <Router>
        <div className="mobile-nav">
          <div className="mobile-nav-top">
            <div className="logo">
              <NavLink to="/">
                <img src={logo} alt="Thinking box" />
              </NavLink>
            </div>
            <div className="mobile-nav-exit">
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="90" height="10"></rect>
                <rect y="30" width="90" height="10"></rect>
                <rect y="60" width="90" height="10"></rect>
              </svg>
            </div>
          </div>
          <div className="mobile-links">
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/culture">Culture</NavLink>
            <NavLink to="/careers">Careers</NavLink>

            <NavLink to="/contact">Contact</NavLink>

            <NavLink to="/archive">Archive</NavLink>
          </div>
        </div>

        <nav className="pc-nav">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="Thinking box" />
            </NavLink>
          </div>
          <div className="mobile-nav-icon">
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="90" height="10"></rect>
              <rect y="30" width="90" height="10"></rect>
              <rect y="60" width="90" height="10"></rect>
            </svg>
          </div>
          <div className="links">
            <NavLink
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid black" : "",
                };
              }}
              to="/work"
            >
              <div className="deconstructed">
                Work
                <div>Work</div>
                <div>Work</div>
                <div>Work</div>
                <div>Work</div>
              </div>
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid black" : "",
                };
              }}
              to="/culture"
            >
              <div className="deconstructed">
                Culture
                <div>Culture</div>
                <div>Culture</div>
                <div>Culture</div>
                <div>Culture</div>
              </div>
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid black" : "",
                };
              }}
              to="/careers"
            >
              <div className="deconstructed">
                Careers
                <div>Careers</div>
                <div>Careers</div>
                <div>Careers</div>
                <div>Careers</div>
              </div>
            </NavLink>

            <NavLink
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid black" : "",
                };
              }}
              to="/contact"
            >
              <div className="deconstructed">
                Contact
                <div>Contact</div>
                <div>Contact</div>
                <div>Contact</div>
                <div>Contact</div>
              </div>
            </NavLink>

            <NavLink
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid black" : "",
                };
              }}
              to="/archive"
            >
              <div className="deconstructed">
                Archive
                <div>Archive</div>
                <div>Archive</div>
                <div>Archive</div>
                <div>Archive</div>
              </div>
            </NavLink>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/work" element={<Work />}></Route>
          <Route exact path="/careers" element={<Careers />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/archive" element={<Archive />}></Route>
          <Route exact path="/culture" element={<Culture />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default Nav;
