import { useEffect } from "react";
import Footer from "./global/Footer";
import "../styles/home.css";
import "../styles/commonStyles/header.css";
import "../styles/commonStyles/bottomList.css";
import mountainDwe from "../styles/imgs/mountainDwe.webp";
import mountainDweVideo from "../styles/videos/MountainDew.mp4";
function Home() {
  useEffect(() => {
    const videoContainer = document.querySelectorAll(".shape-wrapper");
    videoContainer.forEach((wrapper) => {
      wrapper.addEventListener("mouseover", (e) => {
        e.target.querySelector(".shape-video").currentTime = 0;
        e.target.querySelector(".shape-video").play();

        e.target.nextSibling.style = "left:15%";
        e.target.previousSibling.style.cssText =
          "font-size: 300%; opacity: 1; top:-50px;";
      });
    });
    videoContainer.forEach((wrapper) => {
      wrapper.addEventListener("mouseleave", (e) => {
        e.target.nextSibling.style = "left:0";
        e.target.previousSibling.style.cssText =
          "font-size: 0; opacity: 0; top:30px;";
      });
    });

    const videoContainerFull = document.querySelectorAll(".full-wrapper");
    videoContainerFull.forEach((wrapper) => {
      wrapper.addEventListener("mouseover", (e) => {
        e.target.nextSibling.style = "margin-left:14%";
        e.target.previousSibling.style.cssText =
          "font-size: 700%; opacity: 1; top: -100px;";
      });
    });
    videoContainerFull.forEach((wrapper) => {
      wrapper.addEventListener("mouseleave", (e) => {
        e.target.nextSibling.style = "left:0";
        e.target.previousSibling.style.cssText =
          "font-size: 0; opacity: 0; top:0;";
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

        let nextWidth = shape.nextSibling.clientWidth,
          nextHeight = shape.nextSibling.clientHeight;

        let mouseXNext = translateX,
          mouseYNext = translateY / (shapeHeight / nextHeight);
        console.log(shape);

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
        item.childNodes[0].style.cssText = `left: ${
          e.layerX - 350 / 2
        }px; top: ${e.layerY - 350 / 2}px;`;
      });
    });
  }, []);
  return (
    <div className="sections-padding">
      <header>
        <div className="slide-header">
          <h1>
            <span className="scribble">
              <span className="scribble-text">We are a globa</span>
              <span className="scribble-container"></span>
            </span>
            l
            <br />
            <span>creative collective.</span>
          </h1>
          <h2>
            <span>
              <p>We shape the future of brands</p>
              <p>through craft and curiosity</p>
            </span>
          </h2>
        </div>
      </header>
      <main className="home-main">
        <div className="move-container full">
          <div className="shape-container">
            <div className="back-header">Mountain Dew</div>

            <div className="shape-wrapper full-wrapper">
              <div className="shape">
                <img alt="style" src={mountainDwe} />
                <div>
                  <video className="shape-video" loop="True" muted="True">
                    <source src={mountainDweVideo} type="video/mp4" />
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
          </div>
        </div>
        <div className="move-container">
          <div className="shape-container">
            <div className="back-header">Mountain Dew</div>

            <div className="shape-wrapper">
              <div className="shape">
                <img alt="style" src={mountainDwe} />
                <div>
                  <video className="shape-video" loop="True" muted="True">
                    <source src={mountainDweVideo} type="video/mp4" />
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
          </div>
        </div>

        <div className="belive">
          <p>
            Belive <br /> in the <br />
            making
          </p>
        </div>

        <div className="move-container">
          <div className="shape-container">
            <div className="back-header">Mountain Dew</div>

            <div className="shape-wrapper">
              <div className="shape">
                <img alt="style" src={mountainDwe} />
                <div>
                  <video className="shape-video" loop="True" muted="True">
                    <source src={mountainDweVideo} type="video/mp4" />
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
          </div>
        </div>

        <div className="move-container minus-margin">
          <div className="shape-container">
            <div className="back-header">Mountain Dew</div>

            <div className="shape-wrapper">
              <div className="shape">
                <img alt="style" src={mountainDwe} />
                <div>
                  <video className="shape-video" loop="True" muted="True">
                    <source src={mountainDweVideo} type="video/mp4" />
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
          </div>
        </div>

        <div className="move-container right-col">
          <div className="shape-container">
            <div className="back-header">Mountain Dew</div>

            <div className="shape-wrapper">
              <div className="shape">
                <img alt="style" src={mountainDwe} />
                <div>
                  <video className="shape-video" loop="True" muted="True">
                    <source src={mountainDweVideo} type="video/mp4" />
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
          </div>
        </div>

        <div className="move-container full">
          <div className="shape-container">
            <div className="back-header">Mountain Dew</div>

            <div className="shape-wrapper full-wrapper">
              <div className="shape">
                <img alt="style" src={mountainDwe} />
                <div>
                  <video className="shape-video" loop="True" muted="True">
                    <source src={mountainDweVideo} type="video/mp4" />
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
          </div>
        </div>

        <div className="move-container">
          <div className="shape-container">
            <div className="back-header">Mountain Dew</div>

            <div className="shape-wrapper">
              <div className="shape">
                <img alt="style" src={mountainDwe} />
                <div>
                  <video className="shape-video" loop="True" muted="True">
                    <source src={mountainDweVideo} type="video/mp4" />
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
          </div>
        </div>

        <div className="move-container sec-right-col">
          <div className="shape-container">
            <div className="back-header">Mountain Dew</div>

            <div className="shape-wrapper">
              <div className="shape">
                <img alt="style" src={mountainDwe} />
                <div>
                  <video className="shape-video" loop="True" muted="True">
                    <source src={mountainDweVideo} type="video/mp4" />
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
          </div>
        </div>

        <div className="move-container">
          <div className="shape-container">
            <div className="back-header">Mountain Dew</div>

            <div className="shape-wrapper">
              <div className="shape">
                <img alt="style" src={mountainDwe} />
                <div>
                  <video className="shape-video" loop="True" muted="True">
                    <source src={mountainDweVideo} type="video/mp4" />
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
          </div>
        </div>

        <div className="move-container">
          <div className="shape-container">
            <div className="back-header">Mountain Dew</div>

            <div className="shape-wrapper">
              <div className="shape">
                <img alt="style" src={mountainDwe} />
                <div>
                  <video className="shape-video" loop="True" muted="True">
                    <source src={mountainDweVideo} type="video/mp4" />
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
          </div>
        </div>

        <div className="move-container last-row">
          <div className="shape-container">
            <div className="back-header">Mountain Dew</div>

            <div className="shape-wrapper">
              <div className="shape">
                <img alt="style" src={mountainDwe} />
                <div>
                  <video className="shape-video" loop="True" muted="True">
                    <source src={mountainDweVideo} type="video/mp4" />
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
          </div>
        </div>

        <div className="all-projects">
          <div>
            <a href="/work">
              <div className="btn">
                <div className="line-btn"></div> <div>All Projects</div>
              </div>
            </a>
          </div>
        </div>
      </main>
      <section className="bottom-list">
        <div className="middle hover-container">
          <img className="hover-img" src={mountainDwe} alt="img" />
          <a href="/culture">Our</a>
        </div>
        <div className="hover-container">
          <img className="hover-img" src={mountainDwe} alt="img" />
          <a href="/culture" className="light">
            Collectives's
          </a>
        </div>
        <div className="middle hover-container">
          <img className="hover-img" src={mountainDwe} alt="img" />
          <a href="/culture">Culture</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
