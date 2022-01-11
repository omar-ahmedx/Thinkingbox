import { useEffect } from "react";
import Footer from "./global/Footer";
import kite from "../styles/videos/kite.mp4";
import portfolio from "../styles/videos/portfolio.mp4";
import indie from "../styles/videos/indie.mp4";
import frontEndvideo from "../styles/videos/frontendCase.mp4";
import creativeCase from "../styles/videos/creativeCase.mp4";
import socialCase from "../styles/videos/socialCase.mp4";
import kiteArtwork from "../styles/videos/KITE SOCIAL MEDIA CASE STUDY VIDEO.mp4";
import techniekArtwork from "../styles/videos/TECHNIEK SOCIAL MEDIA CASE STUDY VIDEO.mp4";

import "../styles/work.css";
import { motion } from "framer-motion";

import case1 from "../styles/imgs/UI UX/INDIE/THUMBNAIL.png";
import case2 from "../styles/imgs/UI UX/KITE/THUMBNAIL.png";
import case3 from "../styles/imgs/UI UX/PORTFOLIO WEBSITE/PORTFOLIO WEBSITE.png";

import case4 from "../styles/imgs/FRONTEND/Clone Artist website THUMBNAIL.png";

import case5 from "../styles/imgs/SOCIAL MEDIA STRATEGY/strategy thumbnail.png";

import case6 from "../styles/imgs/WEBSITE ARTWORK/Thumbnail.png";
import case7 from "../styles/imgs/KITE SOCIAL MEDIA ARTWORK/kiteThumbnail.png";
import case8 from "../styles/imgs/TECHNIEK SOCIAL MEDIA ARTWORK CASE STUDY/techniekThumbnail.png";
import { NavLink } from "react-router-dom";

function Work(props) {
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
  useEffect(() => {
    document.querySelector("body").classList.add("loaded");
    document.querySelector("nav").classList.add("animate-nav");
    if (document.querySelector(".slide-header")) {
      document.querySelector(".slide-header").classList.add("animate-header");
    }
    let list = document.querySelectorAll(".mouse-hover");
    list.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        document.querySelector(".cursor-dot").classList.add("eye");
        document
          .querySelector(".cursor-dot-outline")
          .classList.add("eye-outline");
        props.delay(false);
      });
      item.addEventListener("mouseleave", () => {
        document.querySelector(".cursor-dot").classList.remove("eye");
        document
          .querySelector(".cursor-dot-outline")
          .classList.remove("eye-outline");
        props.delay(true);
      });
    });
  });

  const eyeRemove = () => {
    document.querySelector(".cursor-dot").classList.remove("eye");
    document
      .querySelector(".cursor-dot-outline")
      .classList.remove("eye-outline");
    props.delay(true);
  };
  return (
    <motion.div exit={{ opacity: 0 }} className="work-section sections-padding">
      <main className="work">
        <div className="work-container mouse-hover">
          <NavLink onClick={eyeRemove} to="portfolio">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={case3}
                />
                <div>
                  <video
                    className="work-video black-bg"
                    loop="True"
                    muted="True"
                    src={portfolio}
                    type="video/mp4"
                  />
                </div>
              </div>
            </div>

            <div className="info">
              <p>Portfolio</p>
              <p className="sub-info">
                Portfolio <span className="dot"></span> UI/UX
              </p>
            </div>
          </NavLink>
        </div>

        <div className="work-container mouse-hover">
          <NavLink onClick={eyeRemove} to="indie">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={case1}
                />
                <div>
                  <video
                    className="work-video white-bg"
                    loop="True"
                    muted="True"
                    src={indie}
                    type="video/mp4"
                  />
                </div>
              </div>
            </div>

            <div className="info">
              <p>INDIE</p>
              <p className="sub-info">
                Mobile app <span className="dot"></span> UI/UX
              </p>
            </div>
          </NavLink>
        </div>
        <div className="work-container mouse-hover">
          <NavLink onClick={eyeRemove} to="kite">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={case2}
                />
                <div>
                  <video
                    className="work-video grey-bg"
                    loop="True"
                    muted="True"
                    src={kite}
                    type="video/mp4"
                  />
                </div>
              </div>
            </div>

            <div className="info">
              <p>KITE</p>
              <p className="sub-info">
                Web application <span className="dot"></span> UI/UX
              </p>
            </div>
          </NavLink>
        </div>

        <div className="work-container mouse-hover">
          <NavLink onClick={eyeRemove} to="socialmedia">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={case5}
                />
                <div>
                  <video
                    className="work-video black-bg"
                    loop="True"
                    muted="True"
                    src={socialCase}
                    type="video/mp4"
                  />
                </div>
              </div>
            </div>

            <div className="info">
              <p>Social Media Strategy</p>
              <p className="sub-info">
                Kite <span className="dot"></span> Social media strategy
              </p>
            </div>
          </NavLink>
        </div>

        <div className="work-container mouse-hover">
          <NavLink onClick={eyeRemove} to="kiteArtwork">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={case7}
                />
                <div>
                  <video
                    className="work-video white-bg"
                    loop="True"
                    muted="True"
                    src={kiteArtwork}
                    type="video/mp4"
                  />
                </div>
              </div>
            </div>

            <div className="info">
              <p>Social Media Artwork</p>
              <p className="sub-info">
                Kite <span className="dot"></span> social media artworks
              </p>
            </div>
          </NavLink>
        </div>
        <div className="work-container mouse-hover">
          <NavLink onClick={eyeRemove} to="techniekArtwork">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={case8}
                />
                <div>
                  <video
                    className="work-video white-bg"
                    loop="True"
                    muted="True"
                    src={techniekArtwork}
                    type="video/mp4"
                  />
                </div>
              </div>
            </div>

            <div className="info">
              <p>Techniek</p>
              <p className="sub-info">
                Techniek <span className="dot"></span> Social media creatives
              </p>
            </div>
          </NavLink>
        </div>
        <div className="work-container mouse-hover">
          <NavLink onClick={eyeRemove} to="frontend">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={case4}
                />
                <div>
                  <video
                    className="work-video black-bg"
                    loop="True"
                    muted="True"
                    src={frontEndvideo}
                    type="video/mp4"
                  />
                </div>
              </div>
            </div>

            <div className="info">
              <p>Front End Websites</p>
              <p className="sub-info">
                Kite <span className="dot"></span> Front End Websites
              </p>
            </div>
          </NavLink>
        </div>
        <div className="work-container mouse-hover">
          <NavLink onClick={eyeRemove} to="artwork">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={case6}
                />
                <div>
                  <video
                    className="work-video white-bg"
                    loop="True"
                    muted="True"
                    src={creativeCase}
                    type="video/mp4"
                  />
                </div>
              </div>
            </div>

            <div className="info">
              <p>Creative Artworks</p>
              <p className="sub-info">
                Kite <span className="dot"></span> creative artworks
              </p>
            </div>
          </NavLink>
        </div>

        {/* <div className="btn-container archive-btn">
          <div className="btn-link">
            <NavLink onClick={eyeRemove} to="archive">
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
