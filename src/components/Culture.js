import "../styles/culture.css";
import gif1 from "../styles/gifs/gif1.webp";
import gif2 from "../styles/gifs/gif2.webp";
import gif3 from "../styles/gifs/gif3.webp";

import Footer from "./global/Footer";
function Culture() {
  return (
    <div>
      <header className="culture-header">
        <h1>Made to make.</h1>
        <h2>
          <span>
            <p>
              Kindly refrain from calling us an "agency". We are a collective
              built by artists, engineers, and makers; united by a shared
              passion for cultural relevance and timeless creative
            </p>
          </span>
        </h2>
      </header>
      <section></section>
      <section className="we-are-container">
        <p className="we-are">
          We are an international team with 5 offices across North America, made
          up of 29 nationalities, speaking 21 languages.
        </p>
      </section>
      <section className="make-container">
        <p className="small-text">
          <strong>How</strong> we make fun stuff.
        </p>
        <ol>
          <li className="row making-section">
            <div>
              <h2>Strategic Thinking</h2>{" "}
            </div>
            <div className="gif">
              <img src={gif1} alt="gif" />
            </div>
            <div className="section-text">
              <h3>Strategic Thinking</h3>
              <p>
                We put “thinking” in our name because calling ourselves brandbox
                seemed kinda silly, and great artistry starts with a heavy dose
                of strategy. Pulling from our bag of tricks or “proprietary
                intellectual property” allows us to make meaningful
                business-focused work.
              </p>
            </div>
          </li>
          <li className="row making-section">
            <div>
              <h2>Craft & Artistry</h2>{" "}
            </div>
            <div className="gif">
              <img src={gif2} alt="gif" />
            </div>
            <div className="section-text">
              <h3>Craft & Artistry</h3>
              <p>
                Keyboards down. Pencils up. The speed of ideas is often the only
                way to harness great creative when solving complex brand
                challenges. That’s why we are never afraid to get our hands
                dirty and cut, sew, draw, or push pixels. For the love of the
                craft.
              </p>
            </div>
          </li>
          <li className="row making-section">
            <div>
              <h2>Process </h2>
            </div>
            <div className="gif">
              <img src={gif3} alt="gif" />
            </div>
            <div className="section-text">
              <h3>Process</h3>
              <p>
                Inherently messy, always iterative, never boring. We work, how
                you work. Our team understands that as a client, you are
                uniquely YOU, and our goal is to build a collaborative fun
                relationship.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="bottom-list">
        <p className="small-text">
          <strong>What</strong> we craft.
        </p>
        <div className="top hover-container">
          <img className="hover-img" src={gif1} alt="img" />
          <p className="light">Digital</p>
        </div>
        <div className="middle hover-container">
          <p className="light">Experiential</p>
        </div>
        <div className="hover-container">
          <p className="light">Content</p>
        </div>
        <div className="middle hover-container">
          <p className="light">Social</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Culture;
