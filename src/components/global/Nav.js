import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../../styles/commonStyles/nav.css";
import logo from "../../styles/imgs/logo.png";
import Home from "../Home";
import Work from "../Work";
import Contact from "../Contact";
import Archive from "../Archive";
import Careers from "../Careers";
import Culture from "../Culture";
function Nav() {
  return (
    <div>
      <Router>
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Thinking box" />
            </Link>
          </div>
          <div className="links">
            <Link to="/work">
              <div className="deconstructed">
                Work
                <div>Work</div>
                <div>Work</div>
                <div>Work</div>
                <div>Work</div>
              </div>
            </Link>
            <Link to="/culture">
              <div className="deconstructed">
                Culture
                <div>Culture</div>
                <div>Culture</div>
                <div>Culture</div>
                <div>Culture</div>
              </div>
            </Link>
            <Link to="/careers">
              <div className="deconstructed">
                Careers
                <div>Careers</div>
                <div>Careers</div>
                <div>Careers</div>
                <div>Careers</div>
              </div>
            </Link>

            <Link to="/contact">
              <div className="deconstructed">
                Contact
                <div>Contact</div>
                <div>Contact</div>
                <div>Contact</div>
                <div>Contact</div>
              </div>
            </Link>

            <Link to="/archive">
              <div className="deconstructed">
                Archive
                <div>Archive</div>
                <div>Archive</div>
                <div>Archive</div>
                <div>Archive</div>
              </div>
            </Link>
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
