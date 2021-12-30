import { Routes, Route, NavLink, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import "../../styles/commonStyles/nav.css";
import logo from "../../styles/imgs/LOGO.png";
import Home from "../Home";
import Work from "../Work";
import Contact from "../Contact";
import Archive from "../Archive";
import Careers from "../Careers";
import Culture from "../Culture";
import Case1 from "../cases/case1";
import Case2 from "../cases/case2";
import Case3 from "../cases/case3";
import Case4 from "../cases/case4";
import Case5 from "../cases/case5";
import Case6 from "../cases/case6";

function Nav(props) {
  const location = useLocation();
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    if (window.scrollY < 120) {
      document.querySelector(".pc-nav-container").classList.remove("scroll");
      if (document.querySelector("header")) {
        document.querySelector("header").style.marginTop = "0";
      }
    } else {
      if (document.querySelector("header")) {
        document.querySelector("header").style.marginTop = "79px";
      }
      let currentScrollPos = window.pageYOffset;
      document.querySelector(".pc-nav-container").classList.add("scroll");
      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".pc-nav-container").style.top = "0";
      } else {
        document.querySelector(".pc-nav-container").style.top = "-300px";
      }
      prevScrollpos = currentScrollPos;
    }
  };

  const open = () => {
    document.querySelector(".mobile-nav").classList.add("show");
    document
      .querySelector(".first-line")
      .classList.add("first-line-transition");
    document.querySelector(".sec-line").classList.add("sec-line-transition");
  };
  const close = () => {
    document.querySelector(".mobile-nav").classList.remove("show");
    document
      .querySelector(".first-line")
      .classList.remove("first-line-transition");
    document.querySelector(".sec-line").classList.remove("sec-line-transition");

    document.querySelectorAll(".mobile-links a").forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".mobile-nav").classList.remove("show");
      });
    });
  };

  return (
    <div>
      <div className="mobile-nav">
        <div className="mobile-nav-top">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="Thinking box" />
            </NavLink>
          </div>
          <div className="mobile-nav-exit" onClick={close}>
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect
                className="first-line"
                x="20"
                y="30"
                width="65"
                height="7"
              ></rect>
              <rect className="sec-line" y="50" width="65" height="7"></rect>
            </svg>
          </div>
        </div>
        <div className="mobile-links">
          <div className="links-container">
            <NavLink to="/work" onClick={close}>
              Work
            </NavLink>
            <div className="nav-border-expand"></div>
          </div>
          <div className="links-container">
            <NavLink to="/culture" onClick={close}>
              Culture
            </NavLink>
            <div className="nav-border-expand"></div>
          </div>
          {/*<div className="links-container">
              <NavLink to="/careers">Careers</NavLink>
              <div className="nav-border-expand"></div>
  </div>*/}
          <div className="links-container">
            <NavLink to="/contact" onClick={close}>
              Contact
            </NavLink>
            <div className="nav-border-expand"></div>
          </div>
          {/*<div className="links-container">
              <NavLink to="/archive">Archive</NavLink>
              <div className="nav-border-expand"></div>
  </div>*/}
        </div>
      </div>

      <div className="pc-nav-container">
        <nav className="pc-nav">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="Thinking box" />
            </NavLink>
          </div>
          <div className="mobile-nav-icon" onClick={open}>
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect x="20" y="30" width="65" height="7"></rect>
              <rect y="50" width="65" height="7"></rect>
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
            {/*<NavLink
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
              </NavLink>*/}

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

            {/* <NavLink
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
              </NavLink> */}
          </div>
        </nav>
      </div>

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home delay={props.delay} />}></Route>
          <Route
            exact
            path="./work"
            element={<Work delay={props.delay} />}
          ></Route>
          <Route exact path="./careers" element={<Careers />}></Route>
          <Route exact path="./contact" element={<Contact />}></Route>
          <Route exact path="./archive" element={<Archive />}></Route>
          <Route exact path="./culture" element={<Culture />}></Route>
          <Route exact path="./indie" element={<Case1 />}></Route>
          <Route exact path="./kite" element={<Case2 />}></Route>
          <Route exact path="./portfolio" element={<Case3 />}></Route>
          <Route exact path="./frontend" element={<Case4 />}></Route>
          <Route exact path="./socialmedia" element={<Case5 />}></Route>
          <Route exact path="./artwork" element={<Case6 />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
export default Nav;
