import { useEffect } from "react";
import Footer from "./global/Footer";
import dragon from "../styles/imgs/dragon.webp";
import dragonVideo from "../styles/videos/dragon.mp4";
import "../styles/work.css";
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
        }, 200 * i);
      });
    });
  }, []);
  return (
    <div className="work-section">
      <main className="work">
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape">
              <img alt="style" src={dragon} />
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
        </div>

        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape slide">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape slide">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape slide">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape slide">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape slide">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape slide">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape slide">
              <img alt="style" src={dragon} />
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
        </div>
        <div className="work-container">
          <div className="work-shape-wrapper">
            <div className="work-shape slide">
              <img alt="style" src={dragon} />
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
        </div>

        <div className="btn-container archive">
          <div>
            <a href="/archive">
              <div className="btn">
                <div className="line-btn"></div> <div>The Archive</div>
              </div>
            </a>
          </div>
        </div>
      </main>
      <div className="work-footer">
        <Footer />
      </div>
    </div>
  );
}
export default Work;
