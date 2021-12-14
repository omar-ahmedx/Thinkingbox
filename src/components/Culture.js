import { useEffect } from "react/cjs/react.development";
import "../styles/culture.css";
import gif1 from "../styles/gifs/gif1.webp";
import gif2 from "../styles/gifs/gif2.webp";
import gif3 from "../styles/gifs/gif3.webp";

import Footer from "./global/Footer";
function Culture() {
  useEffect(() => {
    // get the slider
    var theSlider = document.querySelector(".slider-all-items");
    // get the items in the slider
    var sliderItem = document.querySelectorAll(".slider-item");

    // variables saved for later
    var sliderWidth;
    var sliderRight;
    var pos1, pos3, pos2, sliderLeft;
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos3 = e.clientX;

      // set the element's new position:
      theSlider.style.left = theSlider.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // get each item width
      sliderWidth = theSlider.getBoundingClientRect().width / sliderItem.length;
      // get the right side position of the slider
      sliderRight = theSlider.getBoundingClientRect().right;
      // get the left side position of the slider
      sliderLeft = theSlider.getBoundingClientRect().left;

      if (sliderLeft >= 0) {
        theSlider.style.left = "0px";
      }

      if (sliderRight <= sliderWidth) {
        theSlider.style.left =
          -Math.abs(sliderWidth * sliderItem.length - sliderWidth) + "px";
      }
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }

    function dragElement(theSlider) {
      pos1 = 0;
      pos3 = 0;
      theSlider.onmousedown = dragMouseDown;
      theSlider.addEventListener("resize", closeDragElement);
    }

    dragElement(theSlider);

    /* global ResizeObserver */

    const ro = new ResizeObserver((entries) => {
      for (let entry of entries) {
        closeDragElement();
      }
    });

    ro.observe(theSlider); //<-- NOTICE HERE
  });
  return (
    <div className="sections-padding">
      <header className="culture-header">
        <div className="slide-header">
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
        </div>
      </header>
      <section>
        <div data-item="slider-full" className="slider-container">
          <div className="slider-all-items">
            <div className="slider-item slider-item1"></div>
            <div className="slider-item slider-item2"></div>
            <div className="slider-item slider-item3"></div>
          </div>
        </div>
      </section>
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
              <h2>Strategic Thinking</h2>
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
              <h2>Craft & Artistry</h2>
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
