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
        e.target.nextSibling.style = "left:15%";
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
    const page = document.querySelector(".move-container");
    const area = document.querySelector(".shape");
    const box = document.querySelector(".shape-container");

    const width = document.querySelector(".shape").clientWidth;
    const height = document.querySelector(".shape").clientHeight;

    // we want to move the object by 50px at most
    const maxDeltaX = 50;
    const maxDeltaY = 50;

    let pageBox = page.getBoundingClientRect();
    let pageTopLeft = {
      x: pageBox.x,
      y: pageBox.y,
    };

    let areaBox = area.getBoundingClientRect();
    let areaRange = {
      w: areaBox.width / 2.0,
      h: areaBox.height / 2.0,
    };

    let boxBox = box.getBoundingClientRect();
    let transformOrigin = {
      x: boxBox.x + boxBox.width / 2.0,
      y: boxBox.y + boxBox.height / 2.0,
    };

    // multipliers allow the full delta displacement within the hover area range
    let multX = maxDeltaX / areaRange.w;
    let multY = maxDeltaY / areaRange.h;

    area.addEventListener("mousemove", onMove);
    area.addEventListener("mouseleave", onLeave);

    // mouse coords are computed wrt the wrapper top left corner and their distance from the object center is normalized
    function onMove(e) {
      let dx = e.clientX - pageTopLeft.x - transformOrigin.x;
      let dy = e.clientY - pageTopLeft.y - transformOrigin.y;
      box.style.transform =
        "translate3d(" + dx * multX + "px, " + dy * multY + "px, 0)";

      box.style.transform =
        "translate3d(" + dx * multX + "px, " + dy * multY + "px, 0)";
    }

    function onLeave(e) {
      box.style.transform = "translate3d(0, 0, 0)";
    }
  });
  useEffect(() => {
    const sliderImages = document.querySelectorAll(".shape");
    document.addEventListener("scroll", () => {
      sliderImages.forEach((e, i) => {
        let top = e.getBoundingClientRect().top;
        if (top < 1600) {
          e.classList.add("active");
          console.log(e);
        }
      });
    });
  }, []);
  return (
    <div className="home-container">
      <header>
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
        <div className="hover-container">
          <img className="hover-img" src={mountainDwe} alt="img" />
          <a href="">Our</a>
        </div>
        <div className="middle hover-container">
          <a href="" className="light">
            Collectives's
          </a>
        </div>
        <div className="hover-container">
          <a href="">Culture</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
