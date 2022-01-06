import { useEffect } from "react";
import Footer from "./global/Footer";
import "../styles/home.css";
import "../styles/commonStyles/header.css";
import "../styles/commonStyles/bottomList.css";
import UIUXimage from "../styles/imgs/uiUX.png";
import UIUXimagesmall from "../styles/imgs/uiUxsmall.png";
import frontEndimage from "../styles/imgs/frontEnd.png";
import frontEndimagesmall from "../styles/imgs/frontEndsmall.png";
import creativeArtworkimage from "../styles/imgs/creativeArtwork.png";
import creativeArtworkimagesmall from "../styles/imgs/creativeArtworksmall.png";
import socialMediaimage from "../styles/imgs/socialMedia.png";
import socialMediaimagesmall from "../styles/imgs/socialMediasmall.png";

import UIUXVideo from "../styles/videos/uiUx.mp4";
import frontEndvideo from "../styles/videos/frontEnd.mp4";
import creativeArtworkvideo from "../styles/videos/creativeArtwork.mp4";
import socialMediavideo from "../styles/videos/socialMedia.mp4";

import gif1 from "../styles/gifs/gif1.webp";
import gif2 from "../styles/gifs/gif2.webp";
import gif3 from "../styles/gifs/gif3.webp";
import holder from "../styles/imgs/holder.jpg";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

/*import Animation from "./an";*/

function Home(props) {
  useEffect(() => {
    const videoContainer = document.querySelectorAll(".shape-wrapper");
    videoContainer.forEach((wrapper) => {
      wrapper.addEventListener("mouseover", (e) => {
        e.target.querySelector(".shape-video").currentTime = 0;
        e.target.querySelector(".shape-video").play();

        e.target.nextSibling.style = "left:15%";
      });
    });
    videoContainer.forEach((wrapper) => {
      wrapper.addEventListener("mouseleave", (e) => {
        e.target.nextSibling.style = "left:0";
      });
    });

    const videoContainerFull = document.querySelectorAll(".full-wrapper");
    videoContainerFull.forEach((wrapper) => {
      wrapper.addEventListener("mouseover", (e) => {
        e.target.nextSibling.style = "margin-left:14%";
      });
    });
    videoContainerFull.forEach((wrapper) => {
      wrapper.addEventListener("mouseleave", (e) => {
        e.target.nextSibling.style = "left:0";
      });
    });
  }, []);

  useEffect(() => {
    let maxDeltaX = 30,
      maxDeltaY = 30;
    let shapeWrapper = document.querySelectorAll(".shape-wrapper");
    shapeWrapper.forEach((shape) => {
      shape.addEventListener("mousemove", (e) => {
        let shapeWidth = shape.clientWidth,
          shapeHeight = shape.clientHeight;

        let mouseX = (e.layerX / shapeWidth) * 2 - 1,
          mouseY = (e.layerY / shapeHeight) * 2 - 1;

        let translateX = mouseX * maxDeltaX,
          translateY = mouseY * maxDeltaY;

        let /*nextWidth = shape.nextSibling.clientWidth,*/
          nextHeight = shape.nextSibling.clientHeight;

        let mouseXNext = translateX; /*,
          mouseYNext = translateY / (shapeHeight / nextHeight)*/

        shape.childNodes[0].style.cssText = `transform: translate3D(${translateX}px, ${translateY}px,0 )`;

        shape.nextSibling.style.cssText = `transform: translate3D(${
          mouseXNext + 0.14 * shape.nextSibling.clientWidth
        }px, ${(translateY / (shapeHeight / nextHeight)) * 10}px,0 )`;
      });
      shape.addEventListener("mouseout", (e) => {
        shape.childNodes[0].style.cssText = `transform: translate(0, 0)`;
      });
    });
  }, []);

  useEffect(() => {
    const sliderImages = document.querySelectorAll(".shape");
    document.addEventListener("scroll", () => {
      sliderImages.forEach((e, i) => {
        let top = e.getBoundingClientRect().top;
        if (top < 1600) {
          e.classList.add("shape-active");
        }
      });
    });
  }, []);

  useEffect(() => {
    let list = document.querySelectorAll(".hover-container");
    list.forEach((item) => {
      item.addEventListener("mousemove", (e) => {
        console.log();
        item.childNodes[0].style.cssText = `left: ${
          e.layerX - 350 / 2
        }px; top: ${e.layerY - 350 / 2}px;`;
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
  return (
    <motion.div exit={{ opacity: 0 }} className="sections-padding">
      <header>
        <div className="slide-header">
          <h1>
            <span className="scribble">
              <span className="scribble-text">
                We are global creative collective
              </span>
            </span>
            <br />
            <span className="small-header">
              The web is beautiful and so is your website
            </span>
          </h1>
          <h2>
            <span>
              <p>
                Design and create the best user experiences and user interfaces
                that are meaningful, memorable and delightful.
              </p>
            </span>
          </h2>
        </div>
      </header>
      <main className="home-main">
        <div className="move-container full">
          <div className="shape-container">
            <div className="shape-wrapper mouse-hover full-wrapper">
              <div className="shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  src={holder}
                  data-src={UIUXimage}
                />
                <div>
                  <video
                    className="shape-video"
                    loop="True"
                    muted="True"
                    src={UIUXVideo}
                    type="video/mp4"
                  />
                </div>
              </div>
            </div>

            <div className="info">
              <p>UI UX</p>
            </div>
          </div>
        </div>

        <div className="move-container full">
          <div className="shape-container">
            <div className="shape-wrapper mouse-hover full-wrapper">
              <div className="shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  src={holder}
                  data-src={frontEndimage}
                />
                <div>
                  <video
                    className="shape-video"
                    loop="True"
                    muted="True"
                    src={frontEndvideo}
                    type="video/mp4"
                  />
                </div>
              </div>
            </div>

            <div className="info">
              <p>Front End</p>
            </div>
          </div>
        </div>
        <div className="move-container full">
          <div className="shape-container">
            <div className="shape-wrapper mouse-hover full-wrapper">
              <div className="shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  src={holder}
                  data-src={creativeArtworkimage}
                />
                <div>
                  <video
                    className="shape-video"
                    loop="True"
                    muted="True"
                    src={creativeArtworkvideo}
                    type="video/mp4"
                  />
                </div>
              </div>
            </div>

            <div className="info">
              <p>Creative Artwork</p>
            </div>
          </div>
        </div>

        <div className="move-container full">
          <div className="shape-container">
            <div className="shape-wrapper mouse-hover full-wrapper">
              <div className="shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  src={holder}
                  data-src={socialMediaimage}
                />
                <div>
                  <video
                    className="shape-video"
                    loop="True"
                    muted="True"
                    src={socialMediavideo}
                    type="video/mp4"
                  />
                </div>
              </div>
            </div>

            <div className="info">
              <p>Social Media Strategy</p>
            </div>
          </div>
        </div>

        <div className="move-container">
          <NavLink to="/work">
            <div className="shape-container">
              <div className="shape-wrapper mouse-hover">
                <div className="shape">
                  <img
                    alt="style"
                    className="lazyload"
                    data-sizes="auto"
                    src={holder}
                    data-src={UIUXimagesmall}
                  />
                  <div>
                    <video
                      className="shape-video"
                      loop="True"
                      muted="True"
                      src={UIUXVideo}
                      type="video/mp4"
                    />
                  </div>
                </div>
              </div>

              <div className="info">
                <p>UI UX</p>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="move-container sec-right-col">
          <NavLink to="/work">
            <div className="shape-container">
              <div className="shape-wrapper mouse-hover">
                <div className="shape">
                  <img
                    alt="style"
                    className="lazyload"
                    data-sizes="auto"
                    src={holder}
                    data-src={socialMediaimagesmall}
                  />
                  <div>
                    <video
                      className="shape-video"
                      loop="True"
                      muted="True"
                      src={socialMediavideo}
                      type="video/mp4"
                    />
                  </div>
                </div>
              </div>

              <div className="info">
                <p>Social Media Strategy</p>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="move-container right-col">
          <NavLink to="/work">
            <div className="shape-container">
              <div className="shape-wrapper mouse-hover">
                <div className="shape">
                  <img
                    alt="style"
                    className="lazyload"
                    data-sizes="auto"
                    src={holder}
                    data-src={frontEndimagesmall}
                  />
                  <div>
                    <video
                      className="shape-video"
                      loop="True"
                      muted="True"
                      src={frontEndvideo}
                      type="video/mp4"
                    />
                  </div>
                </div>
              </div>

              <div className="info">
                <p>Front End</p>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="move-container minus-margin">
          <NavLink to="/work">
            <div className="shape-container">
              <div className="shape-wrapper mouse-hover">
                <div className="shape">
                  <img
                    alt="style"
                    className="lazyload"
                    data-sizes="auto"
                    src={holder}
                    data-src={creativeArtworkimagesmall}
                  />
                  <div>
                    <video
                      className="shape-video"
                      loop="True"
                      muted="True"
                      src={creativeArtworkvideo}
                      type="video/mp4"
                    />
                  </div>
                </div>
              </div>

              <div className="info">
                <p>Creative Artwork</p>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="all-projects">
          <div>
            <NavLink to="/work">
              <div className="btn mouse-hover">
                <div className="line-btn"></div> <div>All Projects</div>
              </div>
            </NavLink>
          </div>
        </div>
      </main>

      <section className="bottom-list">
        {/*<div id="canvas">
          <Animation />
  </div>*/}
        <div className="middle hover-container mouse-hover">
          <img className="hover-img" src={gif1} alt="img" />
          <NavLink to="/culture">Our</NavLink>
        </div>
        <div className="hover-container mouse-hover">
          <img className="hover-img" src={gif2} alt="img" />
          <NavLink to="/culture" className="light">
            Collectives's
          </NavLink>
        </div>
        <div className="middle hover-container mouse-hover">
          <img className="hover-img" src={gif3} alt="img" />
          <NavLink to="/culture">Culture</NavLink>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
}

export default Home;
