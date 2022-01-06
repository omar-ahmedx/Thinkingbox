import { useEffect } from "react";
import "../styles/culture.css";
import img1 from "../styles/imgs/CULTURE/Asset1.png";
import img2 from "../styles/imgs/CULTURE/Asset2.png";
import img3 from "../styles/imgs/CULTURE/Asset3.png";
import img4 from "../styles/imgs/CULTURE/Asset4.png";
import img5 from "../styles/imgs/CULTURE/Asset5.png";
import img6 from "../styles/imgs/CULTURE/Asset6.png";
import img7 from "../styles/imgs/CULTURE/Asset7.png";
import img8 from "../styles/imgs/CULTURE/Asset8.png";
import img9 from "../styles/imgs/CULTURE/Asset9.png";
import img10 from "../styles/imgs/CULTURE/Asset10.png";
import img11 from "../styles/imgs/CULTURE/Asset11.png";
import img13 from "../styles/imgs/CULTURE/Asset13.png";
import img15 from "../styles/imgs/CULTURE/Asset15.png";

import gif1 from "../styles/gifs/gif1.webp";
import gif2 from "../styles/gifs/gif2.webp";
import gif3 from "../styles/gifs/gif3.webp";
import partner1 from "../styles/imgs/CLIENTS/partner1.png";
import partner2 from "../styles/imgs/CLIENTS/partner2.png";
import partner3 from "../styles/imgs/CLIENTS/partner3.png";
import partner4 from "../styles/imgs/CLIENTS/partner4.png";

import team1 from "../styles/imgs/TEAM/team1.png";
import team2 from "../styles/imgs/TEAM/team2.png";
import team3 from "../styles/imgs/TEAM/team3.png";
import team4 from "../styles/imgs/TEAM/team4.png";
import team5 from "../styles/imgs/TEAM/team5.png";
import team6 from "../styles/imgs/TEAM/team6.png";
import team7 from "../styles/imgs/TEAM/team7.png";
import team8 from "../styles/imgs/TEAM/team8.png";
import team9 from "../styles/imgs/TEAM/team9.png";
import team10 from "../styles/imgs/TEAM/team10.png";
import team11 from "../styles/imgs/TEAM/team11.png";
import team12 from "../styles/imgs/TEAM/team12.png";
import team13 from "../styles/imgs/TEAM/team13.png";
import team14 from "../styles/imgs/TEAM/team14.png";
import team15 from "../styles/imgs/TEAM/team15.png";
import team16 from "../styles/imgs/TEAM/team16.png";
import team17 from "../styles/imgs/TEAM/team17.png";
import team18 from "../styles/imgs/TEAM/team18.png";
import team19 from "../styles/imgs/TEAM/team19.png";

import { motion } from "framer-motion";

import Footer from "./global/Footer";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

function Culture(props) {
  useEffect(() => {
    // get the slider
    var theSlider = document.querySelectorAll(".slider-all-items");
    theSlider.forEach((slider) => {
      dragElement(slider);
    });
    // run the function

    function dragElement(theSlider) {
      var pos1 = 0,
        pos3 = 0;
      theSlider.onmousedown = dragMouseDown;

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
        if (theSlider.offsetLeft - pos1 >= 0) {
          theSlider.style.left = 0;
        } else if (theSlider.offsetLeft - pos1 < -2515) {
          closeDragElement();
          theSlider.style.left = "-2500px";
        } else {
          theSlider.style.left = theSlider.offsetLeft - pos1 + "px";
        }
      }

      function closeDragElement() {
        // get each item width

        // get the right side position of the slider

        // delay 0.5s, then remove the class .shifting when finished checking and styling
        // .shifting {transition: all 0.5s ease;}
        setTimeout(() => {
          theSlider.classList.remove("shifting");
        }, 500);

        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
    let list = document.querySelectorAll(".hover-container");
    list.forEach((item) => {
      item.addEventListener("mousemove", (e) => {
        console.log();
        item.childNodes[0].style.cssText = `left: ${
          e.layerX - 350 / 2
        }px; top: ${e.layerY - 350 / 2}px;`;
      });
    });
    let sliders = document.querySelectorAll(".slider-container");
    sliders.forEach((slide) => {
      slide.addEventListener("mouseenter", () => {
        document.querySelector(".drag").style.display = "flex";
        document.querySelector(".cursor-dot").style.backgroundColor =
          "transparent";
        document
          .querySelector(".cursor-dot-outline")
          .classList.add("eye-outline");
        props.delay(false);
      });
      slide.addEventListener("mouseleave", () => {
        document.querySelector(".drag").style.display = "none";
        document.querySelector(".cursor-dot").style.backgroundColor = "#f49578";
        document
          .querySelector(".cursor-dot-outline")
          .classList.remove("eye-outline");
        props.delay(true);
      });
    });
  });
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

      <section className="slider-wrapper">
        <div>
          <div data-item="slider-full" className="slider-container">
            <div className="slider-all-items">
              <div className="slider-item">
                <img className="img1" src={img1} alt="img" />
                <img className="img2" src={img10} alt="img" />
                <img className="img3" src={img2} alt="img" />
                <img className="img4" src={img4} alt="img" />
                <img className="img5" src={img3} alt="img" />
                <img className="img6" src={img13} alt="img" />
                <img className="img7" src={img5} alt="img" />
                <img className="img8" src={img8} alt="img" />
                <img className="img9" src={img9} alt="img" />
                <img className="img10" src={img11} alt="img" />
                <img className="img11" src={img6} alt="img" />
                <img className="img12" src={img7} alt="img" />
                <img className="img13" src={img15} alt="img" />
              </div>
            </div>
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
        <div className="top hover-container mouse-hover">
          <img className="hover-img" src={gif1} alt="img" />
          <p className="light">Digital</p>
        </div>
        <div className="middle hover-container mouse-hover">
          <img className="hover-img" src={gif2} alt="img" />
          <p className="light">Experiential</p>
        </div>

        <div className="middle hover-container mouse-hover">
          <img className="hover-img" src={gif3} alt="img" />
          <p className="light">Social</p>
        </div>
      </section>

      <section className="partners">
        <p className="small-text">
          <strong>who</strong> is in our friendzone
        </p>
        <div className="partner-container">
          <div>
            <img src={partner1} alt="img" />
          </div>
          <div>
            <img src={partner2} alt="img" />
          </div>
          <div>
            <img src={partner3} alt="img" />
          </div>
          <div>
            <img src={partner4} alt="img" />
          </div>
        </div>
      </section>

      <section>
        <p className="small-text">
          <strong>Who</strong> leads these party people.
        </p>
        <div className="people">
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team17}
                />
              </div>
            </div>

            <div className="info">
              <p>Garima Singh</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team4}
                />
              </div>
            </div>

            <div className="info">
              <p>Ajay Singh</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team1}
                />
              </div>
            </div>

            <div className="info">
              <p>Aman Parashar</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team3}
                />
              </div>
            </div>

            <div className="info">
              <p>Mratunjay Mohan Gaur</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>

          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team2}
                />
              </div>
            </div>

            <div className="info">
              <p>Aakash Yadav</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>

          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team5}
                />
              </div>
            </div>

            <div className="info">
              <p>Parul Chauhan</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team6}
                />
              </div>
            </div>

            <div className="info">
              <p>Pawan Kumar Yadav</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team7}
                />
              </div>
            </div>

            <div className="info">
              <p>Yash Parashar</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team8}
                />
              </div>
            </div>

            <div className="info">
              <p>Himanshu Sachan</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team9}
                />
              </div>
            </div>

            <div className="info">
              <p>Kaushiki Chaturvedi</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team10}
                />
              </div>
            </div>

            <div className="info">
              <p>Bubul Deka</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team11}
                />
              </div>
            </div>

            <div className="info">
              <p>Puneet Soni</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team12}
                />
              </div>
            </div>

            <div className="info">
              <p>Nandini Chauhan</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team13}
                />
              </div>
            </div>

            <div className="info">
              <p>Ritu Shukla</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team14}
                />
              </div>
            </div>

            <div className="info">
              <p>Ishu Dhama</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team15}
                />
              </div>
            </div>

            <div className="info">
              <p>Shivam Pandey</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team16}
                />
              </div>
            </div>

            <div className="info">
              <p>Girish Chand Joshi</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team18}
                />
              </div>
            </div>

            <div className="info">
              <p>Anshika Jain</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
          <div className="work-container">
            <div className="work-shape-wrapper">
              <div className="work-shape">
                <img
                  alt="style"
                  className="lazyload"
                  data-sizes="auto"
                  data-src={team19}
                />
              </div>
            </div>

            <div className="info">
              <p>Aman Verma</p>
            </div>
            <div className="quote">
              "I've always just wanted to work on crazy projects with cool
              people. #LivingTheDream"
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
}
export default Culture;
