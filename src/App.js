import { useEffect, useState } from "react";
import gsap from "gsap";
import { useCurtains } from "react-curtains";
import "./App.css";
import "./styles/commonStyles/mouse.css";
import Nav from "./components/global/Nav";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  const [delay, setDelay] = useState(true);
  useEffect(() => {
    var cursor = {
      delay: delay ? 8 : 1,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $dot: document.querySelector(".cursor-dot"),
      $outline: document.querySelector(".cursor-dot-outline"),

      init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
      },

      setupEventListeners: function () {
        var self = this;

        document.addEventListener("mousemove", function (e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility();

          // Position the dot
          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = self.endY + "px";
          self.$dot.style.left = self.endX + "px";
        });

        // Hide/show cursor
        document.addEventListener("mouseenter", function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        });

        document.addEventListener("mouseleave", function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        });
      },

      animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + "px";
        self.$outline.style.left = self._x + "px";

        requestAnimationFrame(this.animateDotOutline.bind(self));
      },

      toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
          self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
          self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
        } else {
          self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
          self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
        }
      },

      toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        }
      },
    };
    cursor.init();
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
        setDelay(false);
      });
      item.addEventListener("mouseleave", () => {
        document.querySelector(".cursor-dot").classList.remove("eye");
        document
          .querySelector(".cursor-dot-outline")
          .classList.remove("eye-outline");
        setDelay(true);
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
        setDelay(false);
      });
      slide.addEventListener("mouseleave", () => {
        document.querySelector(".drag").style.display = "none";
        document.querySelector(".cursor-dot").style.backgroundColor = "#f49578";
        document
          .querySelector(".cursor-dot-outline")
          .classList.remove("eye-outline");
        setDelay(true);
      });
    });
  });

  useCurtains((curtains) => {
    // use gsap ticker to render our curtains scene
    gsap.ticker.add(curtains.render.bind(curtains));
  });
  return (
    <div className="App">
      <div id="loader-wrapper">
        <div id="loader"></div>

        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>

      <div className="cursor-dot-outline"></div>
      <div className="cursor-dot">
        <p className="drag">
          <span className="arrow-left"></span>DRAG
          <span className="arrow-right"></span>
        </p>
      </div>
      <Router>
        <Nav delay={setDelay} />
      </Router>
    </div>
  );
}

export default App;
