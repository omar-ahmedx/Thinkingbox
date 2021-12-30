import { useEffect } from "react";
import Footer from "./global/Footer";
import dragonVideo from "../styles/videos/dragon.mp4";
import kite from "../styles/videos/kite.mp4";
import portfolio from "../styles/videos/portfolio.mp4";
import indie from "../styles/videos/indie.mp4";

import "../styles/work.css";
import { motion } from "framer-motion";

import case1 from "../styles/imgs/UI UX/INDIE/THUMBNAIL.png";
import case2 from "../styles/imgs/UI UX/KITE/THUMBNAIL.png";
import case3 from "../styles/imgs/UI UX/PORTFOLIO WEBSITE/PORTFOLIO WEBSITE.png";

import case4 from "../styles/imgs/FRONTEND/Clone Artist website THUMBNAIL.png";

import case5 from "../styles/imgs/SOCIAL MEDIA STRATEGY/strategy thumbnail.png";

import case6 from "../styles/imgs/WEBSITE ARTWORK/Thumbnail.png";
import { NavLink } from "react-router-dom";

function Work() {
  useEffect(() => {
    const videoContainer = document.querySelectorAll(".work-shape-wrapper");
    videoContainer.forEach((wrapper) => {
      wrapper.addEventListener("mouseover", (e) => {
        e.target.querySelector(".work-video").currentTime = 0;
        e.target.querySelector(".work-video").play();
      });
    });
  }, []);

  useEffect(() => {
    const sliderImages = document.querySelectorAll(".slide");
    document.addEventListener("scroll", () => {
      sliderImages.forEach((e, i) => {
        let top = e.getBoundingClientRect().top;
        setTimeout(() => {
          if (top < 1600) {
            e.classList.add("active");
          }
        }, 100 * i);
      });
    });
  }, []);
  return (
    <motion.div exit={{ opacity: 0 }} className="work-section sections-padding">
      <main className="work">
        <div className="work-container mouse-hover">
          <NavLink to="/indie">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img alt="style" src={case1} />
                <div>
                  <video className="work-video" loop="True" muted="True">
                    <source src={indie} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="info">
              <p>INDIE</p>
              <p className="sub-info">
                PepsiCo <span className="dot"></span> Digital
              </p>
            </div>
          </NavLink>
        </div>

        <div className="work-container mouse-hover">
          <NavLink to="/kite">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img alt="style" src={case2} />
                <div>
                  <video className="work-video" loop="True" muted="True">
                    <source src={kite} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="info">
              <p>KITE</p>
              <p className="sub-info">
                PepsiCo <span className="dot"></span> Digital
              </p>
            </div>
          </NavLink>
        </div>

        <div className="work-container mouse-hover">
          <NavLink to="/portfolio">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img alt="style" src={case3} />
                <div>
                  <video className="work-video" loop="True" muted="True">
                    <source src={portfolio} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="info">
              <p>Portofolio</p>
              <p className="sub-info">
                PepsiCo <span className="dot"></span> Digital
              </p>
            </div>
          </NavLink>
        </div>

        <div className="work-container mouse-hover">
          <NavLink to="/frontend">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img alt="style" src={case4} />
                <div>
                  <video className="work-video" loop="True" muted="True">
                    <source src={dragonVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="info">
              <p>Mountain Dew Rise</p>
              <p className="sub-info">
                PepsiCo <span className="dot"></span> Digital
              </p>
            </div>
          </NavLink>
        </div>

        <div className="work-container mouse-hover">
          <NavLink to="/socialmedia">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img alt="style" src={case5} />
                <div>
                  <video className="work-video" loop="True" muted="True">
                    <source src={dragonVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="info">
              <p>Mountain Dew Rise</p>
              <p className="sub-info">
                PepsiCo <span className="dot"></span> Digital
              </p>
            </div>
          </NavLink>
        </div>

        <div className="work-container mouse-hover">
          <NavLink to="/artwork">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img alt="style" src={case6} />
                <div>
                  <video className="work-video" loop="True" muted="True">
                    <source src={dragonVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="info">
              <p>Mountain Dew Rise</p>
              <p className="sub-info">
                PepsiCo <span className="dot"></span> Digital
              </p>
            </div>
          </NavLink>
        </div>

        {/* <div className="btn-container archive-btn">
          <div className="btn-link">
            <NavLink to="/archive">
              <div className="btn">
                <div className="line-btn"></div> <div>The Archive</div>
              </div>
            </NavLink>
          </div>
  </div>*/}
      </main>
      <div className="work-footer">
        <Footer />
      </div>
    </motion.div>
  );
}
export default Work;
