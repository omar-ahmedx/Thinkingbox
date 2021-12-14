import img from "../styles/imgs/slide.webp";
import img2 from "../styles/imgs/slide2.webp";
import img3 from "../styles/imgs/slide3.webp";

import "../styles/careers.css";
import { useEffect } from "react/cjs/react.development";
import Footer from "./global/Footer";
function Careers() {
  useEffect(() => {
    let sliderImagesBox = document.querySelectorAll(".imgs-box");
    sliderImagesBox.forEach((el) => {
      let imageNodes = el.querySelectorAll(".img:not(.hide)");
      let arrIndexes = []; // Index array
      (() => {
        // The loop that added values to the arrIndexes array for the first time
        let start = 0;
        while (imageNodes.length > start) {
          arrIndexes.push(start++);
        }
      })();

      let setIndex = (arr) => {
        for (let i = 0; i < imageNodes.length; i++) {
          imageNodes[i].dataset.slide = arr[i]; // Set indexes
        }
      };
      el.addEventListener("click", () => {
        arrIndexes.unshift(arrIndexes.pop());
        setIndex(arrIndexes);
      });
      setIndex(arrIndexes); // The first indexes addition
    });
  }, []);
  return (
    <div className="sections-padding">
      <header className="contact-header">
        <div className="slide-header">
          <h1>
            <span className="scribble">Love the hustle.</span>
            <br />
          </h1>
          <h2>
            <span>
              <p>
                we balue <span className="scribble-text">diversity</span> and a
                multicultural team. We believe different points of view make our
                work stronger and more impactful. Join us.
                <span className="scribble-container"></span>
              </p>
            </span>
          </h2>
        </div>
      </header>
      <main>
        <p className="small-text">
          <strong>Where</strong> teamwork makes the dream work.
        </p>

        <section className="row openings-container">
          <div>
            <div className="openings-place">
              <h2>LA</h2>
              <p>
                Our epicenter of culture and entertainment. Plus, it's just the
                best barrels ever. Get pitted.
              </p>
            </div>
            <div className="openings">
              <h3>Current Openings</h3>
              <p>Senior Designer</p>
              <p>Designer</p>
              <p>Digital Production Artist</p>
              <p>Office Manager</p>
            </div>
          </div>
          <div className="imgs-box-container">
            <div className="imgs-box">
              <div className="img hide">
                <img src={img} alt="img" />
              </div>
              <div className="img">
                <img src={img2} alt="img" />
              </div>
              <div className="img">
                <img src={img3} alt="img" />
              </div>
              <div className="img">
                <img src={img} alt="img" />
              </div>
              <div className="img">
                <img src={img} alt="img" />
              </div>
            </div>
          </div>
        </section>

        <section className="row openings-container">
          <div>
            <div className="openings-place">
              <h2>NYC</h2>
              <p>
                The most lit city in the world. If you can afford the rent,
                you'll love it.
              </p>
            </div>
          </div>
          <div className="imgs-box-container order">
            <div className="imgs-box">
              <div className="img hide">
                <img src={img} alt="img" />
              </div>
              <div className="img">
                <img src={img2} alt="img" />
              </div>
              <div className="img">
                <img src={img3} alt="img" />
              </div>
              <div className="img">
                <img src={img} alt="img" />
              </div>
              <div className="img">
                <img src={img} alt="img" />
              </div>
            </div>
          </div>
        </section>
        <section className="row openings-container">
          <div>
            <div className="openings-place">
              <h2>SLC</h2>
              <p>
                A mountain playground without legalized marijuana and with the
                best snow on earth
              </p>
            </div>
            <div className="openings">
              <h3>Current Openings</h3>
              <p>Senior Digital Project Manager</p>
              <p>Product Manager</p>
              <p>Senior Copywriter</p>
              <p>Senior Front-End Developer</p>
              <p>Front-End Developer</p>
              <p>Senior UX Designer</p>
            </div>
          </div>
          <div className="imgs-box-container">
            <div className="imgs-box">
              <div className="img hide">
                <img src={img} alt="img" />
              </div>
              <div className="img">
                <img src={img2} alt="img" />
              </div>
              <div className="img">
                <img src={img3} alt="img" />
              </div>
              <div className="img">
                <img src={img} alt="img" />
              </div>
              <div className="img">
                <img src={img} alt="img" />
              </div>
            </div>
          </div>
        </section>
        <section className="row openings-container">
          <div>
            <div className="openings-place">
              <h2>TOR</h2>
              <p>
                Canadians are just nice but don't tell them that; they hate it.
              </p>
            </div>
            <div className="openings">
              <h3>Current Openings</h3>
              <p>Executive Producer</p>
              <p>Senior Digital Producer</p>
              <p>Associate Creative Director</p>
              <p>Senior Copywriter</p>
            </div>
          </div>
          <div className="imgs-box-container order">
            <div className="imgs-box">
              <div className="img hide">
                <img src={img} alt="img" />
              </div>
              <div className="img">
                <img src={img2} alt="img" />
              </div>
              <div className="img">
                <img src={img3} alt="img" />
              </div>
              <div className="img">
                <img src={img} alt="img" />
              </div>
              <div className="img">
                <img src={img} alt="img" />
              </div>
            </div>
          </div>
        </section>

        <section className="row openings-container">
          <div>
            <div className="openings-place">
              <h2>VAN</h2>
              <p>
                Our home base and where it all started. Cosmopolitan city with
                the outdoors right outside.
              </p>
            </div>
            <div className="openings">
              <h3>Current Openings</h3>
              <p>Design Intern</p>
              <p>Associate Creative Director</p>
              <p>Front-End Developer</p>
              <p>Motion Designer</p>
              <p>Executive Assistant</p>
              <p>Talent Acquisition Specialist</p>
            </div>
          </div>
          <div className="imgs-box-container">
            <div className="imgs-box">
              <div className="img hide">
                <img src={img} alt="img" />
              </div>
              <div className="img">
                <img src={img2} alt="img" />
              </div>
              <div className="img">
                <img src={img3} alt="img" />
              </div>
              <div className="img">
                <img src={img} alt="img" />
              </div>
              <div className="img">
                <img src={img} alt="img" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Careers;
